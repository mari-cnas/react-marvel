const Config = {
  app: {
    name: import.meta.env.VITE_APP_NAME ?? 'My React App',
    env: import.meta.env.MODE,
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    key: import.meta.env.VITE_API_KEY,
    hash: import.meta.env.VITE_API_HASH,
    ts: import.meta.env.VITE_API_TS,
  },
};

export default Config;
