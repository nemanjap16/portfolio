import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import htmlPurge from 'vite-plugin-html-purgecss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
