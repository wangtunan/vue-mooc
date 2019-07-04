const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'api': resolve('src/api'),
        'assets': resolve('src/assets'),
        'base': resolve('src/base'),
        'components': resolve('src/components'),
        'utils': resolve('src/utils'),
        'router': resolve('src/router')
      }
    }
  },
  devServer: {
    port: 3400,
    proxy: {
      '/api': {
        target: 'http://localhost:3400',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
  lintOnSave: true
}