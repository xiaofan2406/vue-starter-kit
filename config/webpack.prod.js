const webpack = require('webpack');
const paths = require('./paths');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const pkg = require('../package.json');


module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: 'source-map',
  entry: {
    main: `${paths.appDir}/index.js`,
    vendor: Object.keys(pkg.dependencies)
  },
  resolve: {
    fallback: paths.nodeModulesDir,
    extensions: common.resolve.extensions,
    alias: common.resolve.alias
  },
  output: {
    path: paths.buildDir,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [...common.preLoaders],
    loaders: [
      {
        test: /\.js$/,
        include: paths.appDir,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
        'style',
        'css?-autoprefixer&importLoaders=1!postcss'
      )
      },
      ...common.loaders
    ]
  },
  postcss: common.postcss,
  vue: common.vue,
  node: common.node,
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.appDir}/index.html`,
      favicon: `${paths.appDir}/favicon.png`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('css/[name].[contenthash:8].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[chunkhash:8].js'
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    })
  ]
};
