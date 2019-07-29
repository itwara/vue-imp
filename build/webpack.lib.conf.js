var path = require('path')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    'vue-imp': './src/index'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    library: 'vueImp',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src')]
    }
    ]
  },
  node: {
    process: false
  }
}
