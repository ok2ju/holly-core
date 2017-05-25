const { resolve, join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'client'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      resolve(__dirname, 'client'),
      resolve(__dirname, 'node_modules'),
    ],
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          query: {
            import: false,
            importLoaders: 1,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            modules: true,
            sourceMap: true,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            config: {
              path: join(__dirname, './postcss.config.js'),
            },
          },
        }],
      },
      {
        test: /\.(ttf|otf|woff)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      title: 'Holly observer',
    }),
  ],
};
