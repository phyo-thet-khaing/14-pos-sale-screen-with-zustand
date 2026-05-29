import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  darkMode: "class", // Enable dark mode using a CSS class
  plugins: [react(), tailwindcss()],
});
