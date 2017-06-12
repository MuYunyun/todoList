module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/index.js",
	output: {
		path: __dirname + "/static",
		filename: "bundle.js"
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		},{ test: /\.css$/, loader: 'style-loader!css-loader' },]
	},

	devServer: {
		contentBase: "./static",
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true
	},
}