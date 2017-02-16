
module.exports = {
  entry:  {
    app: __dirname + '/src/index.js',
  },

  output: {
    path:     __dirname + '/www/builds',
    filename: 'bundle.js',
		publicPath: "/builds/",
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: __dirname + '/src',
      }, 
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: __dirname + '/src',
      },
    ],
  },

  devtool: 'source-map',
};

