import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {    
    globals: true,         // Enable Vitest's global test functions like 'test'
    environment: 'jsdom',  // Simulate browser-like environment for DOM testing
    setupFiles: './src/setupTest.ts',  // Path to your setup file for Jest DOM
  },   
})
