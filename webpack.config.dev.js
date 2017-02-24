const { resolve } = require('path');
const webpack = require('webpack');

// eslint-disable-next-line
module.exports = function (env) {
  return {

    context: resolve(__dirname, 'src'),

    entry: './index.js',

    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      publicPath: '/'
    },

    devtool: 'inline-source-map',

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
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
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
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  };
};
