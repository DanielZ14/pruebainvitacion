// astro.config.mjs
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url'; // Make SURE this import is present

export default defineConfig({
  publicDir: 'public',  // Explicitly set publicDir
  vite: {
    server: {
      fs: {
        // Explicitly allow serving files from project root
        allow: [
          fileURLToPath(new URL('./', import.meta.url)),
        ]
      }
    }
  }
});