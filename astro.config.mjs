// astro.config.mjs
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url'; // Importante: Asegúrate de tener esta importación

import tailwindcss from '@tailwindcss/vite';

// astro.config.mjs
export default defineConfig({
  vite: {
    assetsInclude: ['**/*.csv'],
    plugins: [tailwindcss()]
  }
});