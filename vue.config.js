module.exports = {
  devServer: {
    port: 4300,
    proxy: {
      '/api': {
        target: 'http://localhost:4300',
        pathRewrite: {
          '/api': ''
        }
      },
      '/auth': {
        target: 'http://localhost:4300',
        pathRewrite: {
          '/auth': ''
        }
      }
    }
  }
}
