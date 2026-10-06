import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://miguel-carretero-portfolio.miguel-carretero.workers.dev',
  output: 'static',
  trailingSlash: 'always',
});
