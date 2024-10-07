/*
 *                   江城子 . 程序员之歌
 *
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 *
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 *
 *
 * @Description:vite.config.js配置
 * @version:
 * @Date: 2023-02-11
 * @LastEditors:  97972619@qq.com
 * @LastEditTime:
 * @Author: 97972619@qq.com
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import dayjs from 'dayjs'
import { wrapperEnv } from './vite/utils'
import { createProxy } from './vite/proxy'
import pkg from './package.json'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default async ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  const nowTime = new Date().getTime() // 定义一个时间戳

  const { VITE_PROXY, VITE_OPEN_PROXY, VITE_APP_MODE } = viteEnv
  const isBuild = command === 'build'
  // 全局 scss 资源
  const scssResources = []
  fs.readdirSync('src/assets/styles/resources').forEach((dirname) => {
    if (fs.statSync(`src/assets/styles/resources/${dirname}`).isFile()) {
      scssResources.push(`@use "src/assets/styles/resources/${dirname}" as *;`)
    }
  })
  return defineConfig({
    base: './',
    // 开发服务器选项 https://cn.vitejs.dev/config/#server-options
    server: {
      port: 8888,
      host: '0.0.0.0',
      proxy: VITE_APP_MODE == 'dev' ? createProxy(VITE_PROXY, VITE_OPEN_PROXY) : {},
    },
    build: {
      outDir: 'dist', // 相对于根目录的构建输出位置。如果目录存在，则将在构建之前删除该目录。
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
      minify: 'esbuild', // 混淆器，terser 构建后文件体积更小，'boolean' | 'terser' | 'esbuild'
      reportCompressedSize: true,
      // 规定触发警告的 chunk 大小.默认500
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        // 静态资源分类打包
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^\/]*)\//)?.groups!.moduleName ?? 'vender'
            }
          },
        },
      },
    },
    esbuild: {
      // 清除全局的console.log和debug
      drop: isBuild ? ['console', 'debugger'] : [],
    },
    define: {
      __SYSTEM_INFO__: JSON.stringify({
        pkg: {
          dependencies: pkg.dependencies,
          devDependencies: pkg.devDependencies,
        },
        lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      }),
      __APP_VERSION__: nowTime,
    },
    plugins: createVitePlugins(env, command === 'build', nowTime),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'src/types'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: scssResources.join(''),
        },
      },
    },
  })
}
