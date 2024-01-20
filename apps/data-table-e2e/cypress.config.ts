import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1440,
  e2e: {
    ...nxE2EPreset(__filename, { cypressDir: 'src', bundler: 'vite' }),
    baseUrl: 'http://localhost:4200',
  },
});
