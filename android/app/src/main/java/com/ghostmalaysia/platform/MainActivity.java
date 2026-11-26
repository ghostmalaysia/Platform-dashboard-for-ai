package com.ghostmalaysia.platform;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowInsets;
import android.widget.Toast;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebChromeClient;
import android.webkit.JsResult;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import android.webkit.WebViewClient;

public final class MainActivity extends Activity {
    private static final String DASHBOARD = "http://127.0.0.1:3000/";
    private static long lastRenderCrash;
    private WebView webView;
    private boolean offline;
    private final Handler handler = new Handler(Looper.getMainLooper());

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        int background = getResources().getColor(R.color.background);
        getWindow().setStatusBarColor(background);
        getWindow().setNavigationBarColor(background);

        webView = new WebView(this);
        webView.setBackgroundColor(background);
        webView.setFitsSystemWindows(false);
        webView.setOnApplyWindowInsetsListener((view, insets) -> {
            if (android.os.Build.VERSION.SDK_INT >= 30) {
                android.graphics.Insets bars = insets.getInsets(WindowInsets.Type.systemBars());
                view.setPadding(bars.left, bars.top, bars.right, bars.bottom);
            } else {
                view.setPadding(insets.getSystemWindowInsetLeft(), insets.getSystemWindowInsetTop(),
                        insets.getSystemWindowInsetRight(), insets.getSystemWindowInsetBottom());
            }
            return insets;
        });
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setSupportMultipleWindows(false);
        webView.setOverScrollMode(View.OVER_SCROLL_NEVER);
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onJsConfirm(WebView view, String url, String message, JsResult result) {
                new AlertDialog.Builder(MainActivity.this, R.style.AppDialogTheme)
                        .setTitle(R.string.app_name)
                        .setMessage(message)
                        .setNegativeButton(android.R.string.cancel, (dialog, which) -> result.cancel())
                        .setPositiveButton(android.R.string.ok, (dialog, which) -> result.confirm())
                        .setOnCancelListener(dialog -> result.cancel())
                        .show();
                return true;
            }
        });
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                if ("http".equals(uri.getScheme())
                        && "127.0.0.1".equals(uri.getHost())
                        && uri.getPort() == 3000) return false;
                if ("https".equals(uri.getScheme())) {
                    Intent browser = new Intent(Intent.ACTION_VIEW, uri);
                    if (browser.resolveActivity(getPackageManager()) != null) startActivity(browser);
                    else Toast.makeText(MainActivity.this, R.string.no_browser, Toast.LENGTH_SHORT).show();
                }
                return true;
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                if (request.isForMainFrame()) showOfflinePage();
            }

            @Override
            public void onReceivedHttpError(WebView view, WebResourceRequest request, WebResourceResponse response) {
                if (request.isForMainFrame() && response.getStatusCode() >= 500) showOfflinePage();
            }

            @Override
            public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                long now = SystemClock.uptimeMillis();
                if (now - lastRenderCrash > 5000) {
                    lastRenderCrash = now;
                    handler.postDelayed(MainActivity.this::recreate, 300);
                }
                return true;
            }
        });
        setContentView(webView);
        if (savedInstanceState == null) connectToTermux();
        else webView.restoreState(savedInstanceState);
    }

    private void connectToTermux() {
        handler.removeCallbacksAndMessages(null);
        offline = false;
        webView.loadUrl(DASHBOARD);
    }

    private void showOfflinePage() {
        offline = true;
        try (InputStream input = getAssets().open("offline.html")) {
            ByteArrayOutputStream output = new ByteArrayOutputStream();
            byte[] buffer = new byte[4096];
            int count;
            while ((count = input.read(buffer)) != -1) output.write(buffer, 0, count);
            String html = new String(output.toByteArray(), StandardCharsets.UTF_8);
            webView.loadDataWithBaseURL(DASHBOARD, html, "text/html", "UTF-8", DASHBOARD);
        } catch (IOException error) {
            webView.loadData("<h2>Ghost Platform cannot connect to Termux.</h2>",
                    "text/html", "UTF-8");
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (offline) handler.postDelayed(this::connectToTermux, 1200);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        if (webView != null) webView.saveState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) webView.goBack();
        else super.onBackPressed();
    }

    @Override
    protected void onDestroy() {
        handler.removeCallbacksAndMessages(null);
        if (webView != null) {
            webView.stopLoading();
            ViewGroup parent = (ViewGroup) webView.getParent();
            if (parent != null) parent.removeView(webView);
            webView.destroy();
        }
        super.onDestroy();
    }
}
