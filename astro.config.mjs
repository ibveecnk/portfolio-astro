import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeMathJax from "rehype-mathjax";

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax],
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "entry.[hash].js",
          chunkFileNames: "chunks/chunk.[hash].js",
          assetFileNames: "assets/asset.[hash][extname]",
        },
      },
    },
  },
});
