import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"
import WindiCSS from "vite-plugin-windicss"
import * as path from "path"

export default defineConfig({
  plugins: [solidPlugin(), WindiCSS()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
})
