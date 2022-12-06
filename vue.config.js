const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		},
    // Precisa adicionar esse trecho nas versões mais novas
    electronBuilder: {
      nodeIntegration: true
    },
  }
})
