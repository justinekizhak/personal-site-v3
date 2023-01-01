import devtools from "solid-devtools/vite";
import vercel from "solid-start-vercel";
import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    devtools({
      autoname: true, // e.g. enable autoname
    }),
    solid({ adapter: vercel({ edge: true }) }),
  ],
});
