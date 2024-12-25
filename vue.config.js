module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      console.log(args)
      args[0].title = 'VoiceCards';
      return args;
    });
  },
  transpileDependencies: [
    'bootstrap-vue'
  ]
};
