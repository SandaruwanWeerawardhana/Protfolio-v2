import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/Portfolio/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "generateSW",
      includeAssets: [
        "favicon.svg",
        "icons/*.png",
        "assets/*.pdf",
        "images/*.{jpg,png}",
      ],
      manifest: {
        name: "Sandaruwan Weerawardhana - Portfolio",
        short_name: "Sandaruwan",
        description: "3",
        theme_color: "#0090f5",
        icons: [
          {
            src: "/Portfolio/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/Portfolio/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    // Optimize build output
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: ["framer-motion"],
          icons: ["lucide-react", "react-icons"],
        },
      },
    },
  },
  // Add path aliases for cleaner imports
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
