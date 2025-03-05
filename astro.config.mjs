// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Or '@astrojs/vercel' (see below)
import tailwind from '@astrojs/tailwind';

export default defineConfig({
 integrations: [tailwind()],
 output: 'server',
 adapter: vercel(),
});