import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    assetsInlineLimit: 0,
  }
  // resolve: {
  //   alias: {
  //     // You can use an alias for your assets folder if needed
  //     '@assets': '/src/assets',
  //   },
  // },
  // // Add an image rule to handle SVG files
  // rules: [
  //   {
  //     test: /\.(svg)$/,
  //     type: 'asset/resource',
  //   },
  // ],
});
