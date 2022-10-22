import * as path from "path"
import { defineConfig } from "vite"
import elmPlugin from 'vite-plugin-elm'
import solidPlugin from "vite-plugin-solid"
import WindiCSS from "vite-plugin-windicss"

export default defineConfig({
  plugins: [solidPlugin(), WindiCSS(), elmPlugin()],
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
