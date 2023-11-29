const path = require('path');
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~public': path.resolve(__dirname, 'public'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './src/index.html')
      },
    },
  },
});
