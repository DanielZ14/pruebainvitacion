

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Import the Vercel adapter (serverless)
import tailwindcss from '@tailwindcss/vite';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()], // Tailwind integration
  output: 'server', // Enable server-side rendering (SSR) - VERY IMPORTANT
  adapter: vercel(),  // Use the Vercel serverless adapter - ALSO VERY IMPORTANT
});