/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_URL?: string
  readonly VITE_LIVE_DEMO_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
