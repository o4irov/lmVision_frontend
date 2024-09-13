const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4200
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/lmVision_frontend/'
    : '/'
})
