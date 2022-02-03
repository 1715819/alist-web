import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import pluginRewriteAll from "vite-plugin-rewrite-all";
import { useDynamicPublicPath } from "vite-plugin-dynamic-publicpath";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    reactRefresh(),
    pluginRewriteAll(),
    useDynamicPublicPath(),
  ],
  build: {
    target: "es2015",
  },
  define: {
    "process.env": {},
  },
});
