var path = require('path')
var cssLoaders = require('./css-loaders')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './resources/assets/js/main.js',
    vendor: ['vue','vue-router','vue-resource', 'jquery', 'bootstrap']
  },
  output: {
    path: path.resolve(__dirname, '../public/static'),
    publicPath: '/static/',
    filename: "bundle-[hash:7].js",
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')]
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      query: {
        presets: ['es2015'],
        plugins: ["transform-runtime"],
        comments: false         
      },
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader?" + JSON.stringify({
        discardComments: {
          removeAll: true
        }
      }))
    }, {
      test: /\.html$/,
      loader: 'vue-html'
    }, {
      test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '[name]-[hash:7].[ext]'
      }
    }]
  },
  vue: {
    loaders: cssLoaders()
  }
}
