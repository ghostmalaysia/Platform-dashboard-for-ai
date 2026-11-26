# Ghost Platform tool selection

This project targets **Web, Android and iOS**. Keep the shared dashboard and AI-provider layer platform-neutral. Device actions belong behind optional, platform-specific connectors; a web page or iPhone cannot execute Termux commands by itself.

## Best-fit GitHub projects reviewed

| Project | Fit | Decision |
| --- | --- | --- |
| [CLI-Anything / CLI-Hub](https://github.com/HKUDS/CLI-Anything) | Agent-friendly catalog and package manager for CLIs; useful for discovering tools and learning how to describe commands. Many registered tools wrap desktop software and will not run on Android. Repository license: Apache-2.0. | List as an optional catalog. Do not bulk-install from its registry or assume desktop CLIs work in Termux. |
| [Termux-MCP](https://github.com/termuxgpt/termux-mcp) | Android/Termux-local tool service with REST and MCP interfaces, device tools, streaming, and command risk controls. Repository license: AGPL-3.0. | Strong optional Android connector candidate. Keep it loopback-only; review its policy and license before integrating or distributing it. Ghost Platform currently only checks whether it is installed/running; commands still use the existing local bridge. |
| [Termux:API](https://github.com/termux/termux-api) | Official Termux companion exposing selected Android APIs to Termux commands. Requires the companion Android app and matching Termux distribution/signature, plus Android permissions. Repository license: GPLv3. | Recommended Android-only extension for device status and actions. |
| [OpenCode](https://github.com/anomalyco/opencode) | Upstream open-source coding agent (MIT). The dashboard already calls its installed CLI with `opencode run --agent plan` for planning, using the provider/model configured locally. | Keep as an external CLI dependency, not vendored source. Recheck `opencode run --help` after upgrades and keep the Ghost Platform naming clearly unaffiliated with the OpenCode team. |

## Not selected for the phone build

- AgentMemory and similar hosted/self-hosted memory servers are useful references for future per-customer memory, but server/container and database requirements make them a poor fit for direct installation into the current Termux dashboard. Supabase remains the intended cloud-account option once a project is configured.
- Desktop-focused CLI-Anything harnesses should be shown as incompatible unless their underlying program and dependencies are available on Android.

## Platform boundaries

- **Web:** shared responsive dashboard; device actions require an explicitly paired local agent/connector.
- **Android:** optional Termux connector; Termux:API functions require Android-side permissions.
- **iOS:** separate iOS connector and permission flow; no Termux shell is assumed.
- AI providers, accounts and user memory should stay behind platform-neutral interfaces so clients can share product logic without sharing device permissions.

## F-Droid readiness

The repository now contains both a Node.js dashboard and an early Android WebView companion in `android/`. The app already has a unique application ID (`com.ghostmalaysia.platform`), versioning, a conservative `INTERNET`-only permission set, and cleartext traffic restricted to `127.0.0.1`. It still is **not F-Droid ready**: there is no root FOSS license file, no Gradle wrapper or verified source build, no F-Droid metadata/screenshots, no reproducible CI build, and no signing/release setup. Add those before submitting; the app must remain useful without proprietary Google services. Follow F-Droid's inclusion policy and submission review; inclusion is not automatic.

## Safety rule

Tool cards only prepare install commands in the local terminal. They never install or execute a tool automatically. Any later connector must stay on loopback by default, disclose its permissions, validate structured parameters, and gate writes, deletion, network exposure and device actions behind explicit approval.
