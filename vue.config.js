const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'api': resolve('src/api'),
        'assets': resolve('src/assets'),
        'base': resolve('src/base'),
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),
        'utils': resolve('src/utils'),
        'router': resolve('src/router')
      }
    }
  },
  productionSourceMap: true,
  devServer: {
    port: 3400,
    proxy: {
      '/mock': {
        target: 'http://localhost:4300',
        pathRewrite: {
          '/mock': process.env.NODE_ENV === 'development' ? '' : '/mock'
        }
      }
    }
  },
  lintOnSave: true
}