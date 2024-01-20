/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import browserslistToEsbuild from 'browserslist-to-esbuild';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/data-table',

  server: {
    port: 4200,
    host: 'localhost',
    fs: {
      strict: false,
    },
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    // Add WDYR for dev mode.
    // More on; https://github.com/welldone-software/why-did-you-render/issues/243#issuecomment-1132892461
    react({
      //jsxImportSource: '@welldone-software/why-did-you-render',
    }),
    nxViteTsPaths(),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/data-table',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    // Add browserlist support to Esbuild
    // More on: https://github.com/vitejs/vite/discussions/6849#discussioncomment-4082583
    // And: https://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only
    target: browserslistToEsbuild(),
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/data-table',
      provider: 'v8',
    },
  },
});
