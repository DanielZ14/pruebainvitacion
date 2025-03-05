// astro.config.mjs
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url'; // Importante: Asegúrate de tener esta importación
import vercel from '@astrojs/vercel/serverless'; // Import the Vercel adapter
import tailwindcss from '@tailwindcss/vite';

// astro.config.mjs
export default defineConfig({
  vite: {
    assetsInclude: ['**/*.csv'],
    plugins: [tailwindcss()]
    output: 'server', //  Enable server-side rendering
  adapter: vercel(), // Use the Vercel adapter
  }
});

import { defineConfig } from 'astro/config';


