/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Web3Forms access key. Enables real form submissions (email delivery).
   *  Without it, forms fall back to opening the user's mail client. */
  readonly VITE_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}
