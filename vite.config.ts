import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    // Prevent Vite from pre-bundling this dependency, forcing direct resolution
    exclude: ["@graphql-typed-document-node/core"],
  },
  // Temporarily remove ssr config to isolate optimizeDeps effect
  // ssr: {
  //   noExternal: ["@graphql-typed-document-node/core"],
  // },
});
