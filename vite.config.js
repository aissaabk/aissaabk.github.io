import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// موقع مستخدم (username.github.io) => base = "/"
// إن كان المستودع باسم آخر فاجعلها "/اسم-المستودع/"
export default defineConfig({ base: "/", plugins: [react()] });
