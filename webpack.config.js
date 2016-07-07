module.exports = {
  entry: "./app/app.js",
  output: {
    path: './public',
    filename: "bundle.js",
    publicPath: '/'
  },
  // webpack-dev-server config for refreshing and more
  devServer: {
    inline: true,
    devtool: 'eval-source-map',
    contentBase: './public',
    //in case of using react-router's browserHistory un-comment the line below
    //historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  }
}
