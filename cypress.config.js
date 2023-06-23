import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,

  e2e: {
    baseUrl: 'http://localhost:3000',
  },

  component: {
    framework: 'react',
    bundler: 'vite',
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
