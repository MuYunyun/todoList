module.exports = {
	entry: __dirname + "/index.js",
	mode: 'development',
	devtool: 'eval-source-map',
	output: {
		path: __dirname + "/static",
		filename: "bundle.js"
	},

  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
    }, {
			test: /\.css$/,
      loader: "style-loader!css-loader",
		}]
  },

	devServer: {
		contentBase: "./static",
	},
}