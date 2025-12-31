import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";
import path from "path";

export default defineConfig({
  root: "src",            // your source folder
  plugins: [nunjucks()],  // plugin to handle .njk files
  build: {
    outDir: "../dist",    // output folder for built files
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/templates/index.njk"),
        menu: path.resolve(__dirname, "src/templates/menu.njk"),
        contact: path.resolve(__dirname, "src/templates/contact.njk")
      }
    }
  }
});
