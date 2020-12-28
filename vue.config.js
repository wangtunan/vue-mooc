module.exports = {
  devServer: {
    port: 4399,
    proxy: {
      '/api': {
        target: 'http://localhost:4399'
      }
    }
  }
}
