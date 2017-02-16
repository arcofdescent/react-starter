
module.exports = {
  entry:  {
    app: __dirname + '/src/index.js',
  },

  output: {
    path:     __dirname + '/www/builds',
    filename: 'bundle.js',
		publicPath: "/assets/",
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
        loaders: ['style', 'css', 'sass'],
        include: __dirname + '/src',
      },
    ],
  },

	/*
  resolve: {
    alias: {
      handlebars: __dirname + '/node_modules/handlebars/dist/handlebars.js', 
    }, 
  },
	*/

  devtool: 'source-map',
};

