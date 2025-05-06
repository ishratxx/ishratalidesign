// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ishratxx.github.io',
  base: '/ishratalidesign/',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()]
  }
});