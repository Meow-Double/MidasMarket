import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts'
// import svgr from "vite-plugin-svgr";
import viteConfigPaths from "vite-tsconfig-paths"
// https://vitejs.dev/config/

export default defineConfig({
  base: "/MidasMarket/",
  plugins: [
    react(),
    sassDts(),
    viteConfigPaths()
    // svgr()
  ],
})
