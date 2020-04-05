const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common.config');

const devServerConfig = {
	...commonConfig,
	entry: './src/client/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'public/bundle.js',
		publicPath: '/',
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 31199,
	},
	plugins: [
		...commonConfig.plugins,
		new HtmlWebPackPlugin({
			template: './src/public/index.html',
			filename: './index.html',
			minify: {
				removeComments: false,
			},
		}),
	],
};

module.exports = [devServerConfig];
