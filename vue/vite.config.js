import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
// import basicSsl from "@vitejs/plugin-basic-ssl";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    // basicSsl(),
    laravel({
      input: "resources/js/app.js",
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    splitVendorChunkPlugin(),
  ],
  
  build: {
    chunkSizeWarningLimit: 1600,
    assetsInlineLimit: "2048",
    manifest: true,
    outDir: "public/build",
    rollupOptions: {
      input: "resources/js/app.js",
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
