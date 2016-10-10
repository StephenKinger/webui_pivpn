var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'jquery',
    'bootstrap',
    'webpack-dev-server/client?http://localhost:8090', // Setting the URL for the hot reload
    'webpack/hot/only-dev-server', // Reload only the dev server,
    'font-awesome-webpack!./config/font-awesome.config.js',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
  },
  {
    test: /\.css$/,
    loader: 'style!css' // We add the css loader
  },
  {
    test: /\.less$/,
    exclude: '/node_modules/',
    loaders: ["style", "css", "less"]
  },
  {
    test: /\.scss$/,
    loaders: [ "style", "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", "sass?sourceMap"]
  },
  {
    test: /\.(png|jpg)$/,
    loader: 'url-loader?limit=50000'
  }, // inline base64 URLs for <=50k images, direct URLs for the rest
  {
    test: /\.eot/,
    loader: 'file-loader'
  },
  {
    test: /\.ttf/,
    loader: 'file-loader'
  },
  {
    test: /\.svg/,
    loader: 'file-loader'
  },
  {
    test: /\.woff/,
    loader: 'url-loader?mimetype=application/font-woff'
  },
  {
    test: /\.woff2/,
    loader: 'url-loader?mimetype=application/font-woff2'
  }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: '8090',
    hot: true
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
