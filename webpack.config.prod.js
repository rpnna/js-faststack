const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

// eslint-disable-next-line
module.exports = function (env) {
  return {

    context: resolve(__dirname, 'src'),

    entry: './index.js',

    output: {
      filename: 'bundle.[chunkhash].min.js',
      path: resolve(__dirname, 'dist'),
      publicPath: '/'
    },

    devtool: 'cheap-module-source-map',

    resolve: {
      extensions: ['.js', '.jsx']
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'babel-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ]
          })
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          enforce: 'pre',
          loader: 'eslint-loader'
        }
      ]
    },

    plugins: [

      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),

      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),

      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
          screw_ie8: true,
          warnings: false
        },
        sourceMap: true
      }),

      new ExtractTextPlugin({
        filename: 'styles.[chunkhash].min.css',
        allChunks: true
      }),

      new HtmlWebpackPlugin({
        title: 'js Fast Stack'
      }),

      new ManifestPlugin({
        fileName: 'assets_dist.json'
      })
    ]
  };
};
