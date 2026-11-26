# Ghost Platform tool selection

This project targets **Web, Android and iOS**. Keep the shared dashboard and AI-provider layer platform-neutral. Device actions belong behind optional, platform-specific connectors; a web page or iPhone cannot execute Termux commands by itself.

## Best-fit GitHub projects reviewed

| Project | Fit | Decision |
| --- | --- | --- |
| [CLI-Anything / CLI-Hub](https://github.com/HKUDS/CLI-Anything) | Agent-friendly catalog and package manager for CLIs; useful for discovering tools and learning how to describe commands. Many registered tools wrap desktop software and will not run on Android. Repository license: Apache-2.0. | List as an optional catalog. Do not bulk-install from its registry or assume desktop CLIs work in Termux. |
| [Termux-MCP](https://github.com/termuxgpt/termux-mcp) | Android/Termux-local tool service with REST and MCP interfaces, device tools, streaming, and command risk controls. Repository license: AGPL-3.0. | Strong optional Android connector candidate. Keep it loopback-only; review its policy and license before integrating or distributing it. Ghost Platform currently only checks whether it is installed/running; commands still use the existing local bridge. |
| [Termux:API](https://github.com/termux/termux-api) | Official Termux companion exposing selected Android APIs to Termux commands. Requires the companion Android app and matching Termux distribution/signature, plus Android permissions. Repository license: GPLv3. | Recommended Android-only extension for device status and actions. |

## Not selected for the phone build

- AgentMemory and similar hosted/self-hosted memory servers are useful references for future per-customer memory, but server/container and database requirements make them a poor fit for direct installation into the current Termux dashboard. Supabase remains the intended cloud-account option once a project is configured.
- Desktop-focused CLI-Anything harnesses should be shown as incompatible unless their underlying program and dependencies are available on Android.

## Platform boundaries

- **Web:** shared responsive dashboard; device actions require an explicitly paired local agent/connector.
- **Android:** optional Termux connector; Termux:API functions require Android-side permissions.
- **iOS:** separate iOS connector and permission flow; no Termux shell is assumed.
- AI providers, accounts and user memory should stay behind platform-neutral interfaces so clients can share product logic without sharing device permissions.

## F-Droid readiness

The current repository is a Node.js dashboard, not an Android application, and has no root license file or Android build. Before proposing an Android client to F-Droid, Ghost Platform needs a FOSS project license, a source-built Android app with a unique application ID and versioning, F-Droid metadata/screenshots, and a build that uses acceptable open-source dependencies. The Android client must remain useful without proprietary Google services. Follow F-Droid's inclusion policy and submission review; inclusion is not automatic.

## Safety rule

Tool cards only prepare install commands in the local terminal. They never install or execute a tool automatically. Any later connector must stay on loopback by default, disclose its permissions, validate structured parameters, and gate writes, deletion, network exposure and device actions behind explicit approval.
