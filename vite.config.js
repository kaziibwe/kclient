import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix:'KCLIENT_',
  server:{
    // proxy:{
    //   '/api':{

    //     target: 'https://testapi.cognospheredynamics.com',
    //     changeOrigin: true,
    //     headers:{
    //       Accept: 'application/json',
    //       "Content-Type": 'application/json',
    //     }
    //   }
    // }
  }
})
