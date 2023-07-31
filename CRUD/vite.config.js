import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Uncomment this line to re-enable the React plugin
  server: {
    host: 'localhost',
    port: 3000, // Change this to the desired port number
  },
})
