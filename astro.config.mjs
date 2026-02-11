// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  experimental: {
    // name: 'DM Serif Display',
    // name: 'Source Serif Pro',
    // name: 'Vollkorn',
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Crimson Pro',
        cssVariable: '--font-crimson-pro',
        subsets: ['latin'],
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Vollkorn',
        cssVariable: '--font-vollkorn',
        subsets: ['latin'],
      },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES'
        },
      },
    }),
    robotsTxt(),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
