module.exports = {
  devServer: {
    port: 4300,
    proxy: {
      '/api': {
        target: 'http://localhost:4300/',
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
