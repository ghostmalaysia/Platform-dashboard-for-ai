package com.ghostmalaysia.platform;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.WindowInsets;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebChromeClient;
import android.webkit.JsResult;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import android.webkit.WebViewClient;

public final class MainActivity extends Activity {
    private static final String DASHBOARD = "http://127.0.0.1:3000/";
    private WebView webView;
    private final Handler handler = new Handler(Looper.getMainLooper());

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setStatusBarColor(Color.rgb(17, 20, 16));
        getWindow().setNavigationBarColor(Color.rgb(17, 20, 16));

        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(17, 20, 16));
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
                new AlertDialog.Builder(MainActivity.this)
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
                    startActivity(new Intent(Intent.ACTION_VIEW, uri));
                }
                return true;
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                if (request.isForMainFrame()) showOfflinePage();
            }

            @Override
            public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                recreate();
                return true;
            }
        });
        setContentView(webView);
        if (savedInstanceState == null) connectToTermux();
        else webView.restoreState(savedInstanceState);
    }

    private void connectToTermux() {
        webView.loadUrl(DASHBOARD);
    }

    private void showOfflinePage() {
        handler.post(() -> {
            try (InputStream input = getAssets().open("offline.html")) {
                byte[] bytes = new byte[input.available()];
                int count = input.read(bytes);
                String html = new String(bytes, 0, Math.max(count, 0), StandardCharsets.UTF_8);
                webView.loadDataWithBaseURL("https://ghost-platform.invalid/", html,
                        "text/html", "UTF-8", null);
            } catch (IOException error) {
                webView.loadData("<h2>Ghost Platform cannot connect to Termux.</h2>",
                        "text/html", "UTF-8");
            }
        });
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
            webView.destroy();
        }
        super.onDestroy();
    }
}
