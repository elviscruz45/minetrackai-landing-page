import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.minetrack.site",
  trailingSlash: "never", // ✅ Evita URLs con / al final
  build: {
    format: "file", // ✅ Genera index.html en lugar de /index/
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "InterLocal",
        cssVariable: "--font-inter",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/Inter-Regular.woff2"],
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/Inter-SemiBold.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/Inter-Bold.woff2"],
          },
        ],
      },
      {
        provider: "local",
        name: "InterLocalDisplay",
        cssVariable: "--font-inter-display",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/InterDisplay-Regular.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/InterDisplay-Medium.woff2"],
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/InterDisplay-SemiBold.woff2"],
          },
        ],
      },
    ],
  },
});
