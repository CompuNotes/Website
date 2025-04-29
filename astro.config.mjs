// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://compunotes.narurm.eu',

  server: {
      allowedHosts: ['compunotes.narurm.eu'],
      host: true,
      port: 7001
  },

  trailingSlash: 'never',
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
    experimental: {
      session: true
    },
});