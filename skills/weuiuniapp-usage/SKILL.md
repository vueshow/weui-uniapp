---
name: weuiuniapp-usage
description: Use when Codex needs to help a uni-app Vue 3 project install, configure, import, troubleshoot, or use the weui-uniapp npm package, including plugin registration, global styles, TypeScript declarations, ESLint import ordering, and basic component usage.
---

# weui-uniapp Usage

Use this skill to integrate the published `weui-uniapp` package into a uni-app Vue 3 project.

## Package

- Package name: `weui-uniapp`
- Minimum recommended version: `1.0.5`
- Peer dependencies: Vue 3 and `@dcloudio/uni-app`

Install with pnpm:

```bash
pnpm add weui-uniapp@latest
```

If a bug was fixed recently, force the patched version:

```bash
pnpm add weui-uniapp@1.0.5
```

## Main Entry Setup

In `main.ts` or `main.js`, register the plugin:

```ts
import { createSSRApp } from 'vue'
import WeuiUni from 'weui-uniapp'

import App from './App.vue'
import store from './store'

import 'weui-uniapp/styles/weui.css'
import '@/style/index.scss'
import 'virtual:uno.css'

export function createApp() {
  const app = createSSRApp(App)

  app.use(store)
  app.use(WeuiUni)

  return { app }
}
```

Prefer importing `weui-uniapp/styles/weui.css` directly. It is the most stable style entry for uni-app/Vite projects.

Use `weui-uniapp/styles/index.scss` only when the project compiles Sass imports from dependencies reliably:

```ts
import 'weui-uniapp/styles/index.scss'
```

## Import Ordering

When ESLint `perfectionist/sort-imports` is enabled, keep external packages before sibling or alias imports:

```ts
import { createSSRApp } from 'vue'
import WeuiUni from 'weui-uniapp'

import App from './App.vue'
import store from './store'

import 'weui-uniapp/styles/weui.css'
import '@/style/index.scss'
import 'virtual:uno.css'
```

If the project requires style imports after all value imports, keep all CSS imports grouped at the bottom.

## Style Troubleshooting

If components render but look unstyled:

1. Confirm the project imports:

```ts
import 'weui-uniapp/styles/weui.css'
```

2. Move WeUI CSS after project resets to test for overrides:

```ts
import '@/style/index.scss'
import 'virtual:uno.css'
import 'weui-uniapp/styles/weui.css'
```

3. Check whether project styles override `.weui-*`, `button`, `view`, or `page`.

4. Restart the dev server after changing dependency style imports:

```bash
pnpm dev:h5
```

## TypeScript Troubleshooting

`weui-uniapp@1.0.5` includes `index.d.ts`.

If TypeScript still reports:

```text
Cannot find declaration file for module 'weui-uniapp'
```

Then update the package and restart the TS server:

```bash
pnpm add weui-uniapp@1.0.5
```

If a project is pinned to an older version, add a temporary declaration:

```ts
declare module 'weui-uniapp'
```

Prefer upgrading over keeping the temporary declaration.

## Basic Usage

```vue
<template>
  <view class="weui-uni-page">
    <weui-button text="主要操作" />

    <weui-cell-group title="列表">
      <weui-cell title="标题文字" value="说明文字" arrow clickable />
    </weui-cell-group>
  </view>
</template>
```

## Common Components

- `weui-button`
- `weui-cell-group`
- `weui-cell`
- `weui-dialog`
- `weui-toast`
- `weui-actionsheet`
- `weui-searchbar`
- `weui-form`
- `weui-form-preview`
- `weui-tabbar`
- `weui-navbar`
- `weui-grid`
- `weui-grid-item`
- `weui-half-screen-dialog`
- `weui-information-bar`
- `weui-steps`

## Validation

After integration, run the project’s usual checks:

```bash
pnpm dev:h5
pnpm build:h5
```

If the package was just updated, remove stale lockfile/node_modules only if normal update fails.
