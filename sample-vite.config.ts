import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // reactRouter(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // or host: true
    port: 5173, // Or your preferred port
      watch: {
        usePolling: true, // Enable polling for file changes in Docker
        interval: 1000, // Polling interval in milliseconds
      },
  },
})