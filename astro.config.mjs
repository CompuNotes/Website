// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://compunotes.narurm.eu',
    server: {
        allowedHosts: ['compunotes.narurm.eu'],
        host: true,
        port: 7000
    },
});
