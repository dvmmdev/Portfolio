const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common.config');

const clientConfig = {
	...commonConfig,
	entry: './src/client/index.tsx',
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'public/bundle.js',
		publicPath: '/',
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

const serverConfig = {
	...commonConfig,
	entry: './src/server/index.tsx',
	target: 'node',
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'server.js',
		libraryTarget: 'commonjs2',
	},
	node: {
		__dirname: false,
	},
};

module.exports = [clientConfig, serverConfig];
