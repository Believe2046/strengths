import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 部署说明：
// 1. 如果仓库名是 talent-profile-github，base 改为 '/talent-profile-github/'
// 2. 如果使用自定义域名或部署到根域名，base 改为 '/'
export default defineConfig({
  plugins: [react()],
  base: './'
})
