const path    = require('path');
const webpack = require('webpack');
const LiveReloadPlugin  = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin({
  filename: '[name].css'
});

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    'js/app': [ './app/main.jsx' ],
    'css/style': './app/styles/style',
    // 'js/vendor': [
    //   'react',
    //   'react-dom',
    //   'react-router',
    //   'antd',
    //   'superagent',
    //   'moment'
    // ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: 'js/chunk-[id].js',
    publicPath: '',
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.less'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract([ 'css-loader?sourceMap', {
          loader: 'less-loader',
          options: {
            paths: path.resolve(__dirname, "node_modules"),
            sourceMap: true
          }
        } ])
      },
    ],
  },
  plugins: [
    extractLESS,
    new LiveReloadPlugin({}),
    new ExtractTextPlugin("css/style.css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'js/vendor',
      minChunks: Infinity,
      filename: 'js/common.js',
    }),

  ]
};
