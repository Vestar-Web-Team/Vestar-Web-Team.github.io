/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-solid" />

interface ImportMetaEnv {
  readonly PUBLIC_FOLDER_PATH: string;
  readonly RECORD_NUMBER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
