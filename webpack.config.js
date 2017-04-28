var path = require("path");

module.exports = {
	entry: "./examples/index",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist/"
	},
  devServer: {
      inline: true,
      port: 9090
   },
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				presets: ["react", "es2015", "stage-1"]
			}
		}]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	devtool: "cheap-module-eval-source-map"
};
