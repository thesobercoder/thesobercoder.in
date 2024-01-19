/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_VERCEL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
