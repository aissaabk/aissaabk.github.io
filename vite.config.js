import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import staticPolicies from "./vite-plugins/staticPolicies.js";

// موقع مستخدم (username.github.io) => base = "/"
export default defineConfig({ base: "/", plugins: [react(), staticPolicies()] });
