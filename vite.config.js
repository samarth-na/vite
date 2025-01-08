// frontend/vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        manifest: true,
    },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
