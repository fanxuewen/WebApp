module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
   
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
     // 是否使用css分离插件 ExtractTextPlugin
     extract: true,
     // 开启 CSS source maps?
     sourceMap: false,
     // css预设器配置项
     loaderOptions: {
         sass:{
             loader:'sass-loader'
         }
     },
     // 启用 CSS modules for all css / pre-processor files.
     modules: false
    },
    
    // webpack-dev-server 相关配置
    devServer: {
     open: true,
     host: '0.0.0.0',
     port: 9000,
     https: false,
     hotOnly: false,
     proxy: {
        '/api': {
          target: 'http://127.0.0.1:3000',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }, 
     before: app => {}
    }
   }