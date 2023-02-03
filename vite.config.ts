/* eslint-disable import/no-extraneous-dependencies */
import eslint from '@rollup/plugin-eslint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...eslint({ include: 'src/**/*.+(js|jsx|ts|tsx)' }),
      enforce: 'pre',
    },
    svgr(),
    react(),
  ],
});
