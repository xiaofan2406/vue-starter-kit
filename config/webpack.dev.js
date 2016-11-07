const webpack = require('webpack');
const paths = require('./paths');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getLocalIP = require('./ip');


module.exports = {
  devtool: 'eval',
  entry: [
    `${paths.appDir}/index.js`
  ],
  resolve: {
    fallback: common.resolve.fallback,
    extensions: common.resolve.extensions,
    alias: common.resolve.alias
  },
  output: {
    // For dev, `path` and `filename` are not important because of using webpack-dev-server
    path: paths.buildDir,
    filename: 'bundle.js',
    // In development, we always serve from the root. This makes config easier.
    publicPath: '/',
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true
  },
  module: {
    preLoaders: [...common.preLoaders],
    loaders: [
      {
        test: /\.js$/,
        include: paths.appDir,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?-autoprefixer&importLoaders=1!postcss'
      },
      ...common.loaders
    ]
  },
  postcss: common.postcss,
  vue: common.vue,
  node: common.node,
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.appDir}/index.html`,
      favicon: `${paths.appDir}/favicon.png`
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: paths.buildDir,
    historyApiFallback: true,
    hot: true,
    inline: true,
    publicPath: '/',
    stats: 'errors-only',
    watchOptions: {
      ignored: /node_modules/
    },
    host: process.env.HOST || getLocalIP(),
    port: process.env.PORT || 8080
  }
};
