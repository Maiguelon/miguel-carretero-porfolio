import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://carreteromiguel.com',
  output: 'static',
  trailingSlash: 'always',
});
