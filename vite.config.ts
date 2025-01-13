import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 允许IP访问
    host: "0.0.0.0",
    // 应用端口 (默认:3000)
    port: Number(3000),
    // 运行是否自动打开浏览器
    open: true,
    proxy: {
      /** 代理前缀为 /dev-api 的请求  */
      ['/api']: {
        changeOrigin: true,
        // 接口地址
        target: 'https://conduit-api.bondaracademy.com/api',

        configure: (proxy, options) => {
          // 解决请求403问题：invalid CORS request。非常重要的代码！！
        proxy.on('proxyReq', function (proxyReq, req, res) {
         proxyReq.removeHeader('referer')  // 移除请求头
           proxyReq.removeHeader('origin') // 移除请求头
          })
        },
        
        rewrite: (path) =>
          path.replace(/^\/api/, ""),
      },
    },
  }
})
