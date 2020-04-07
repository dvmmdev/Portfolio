const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const commonConfig = require('./webpack.common.config');

const clientConfig = {
	...commonConfig,
	module: {
		...commonConfig.module,
		rules: [
			...commonConfig.module.rules,
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { plugins: [autoprefixer()] },
					},
					'sass-loader',
				],
			},
		],
	},
	entry: './src/client/index.tsx',
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'public/bundle.js',
		publicPath: '/',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'public/[name].css',
		}),
		new HtmlWebPackPlugin({
			template: './src/public/index.html',
			filename: './index.html',
		}),
	],
};

const serverExternals = ['firebase', 'firebase-admin', 'firebase-functions'];

const serverConfig = {
	...commonConfig,
	module: {
		...commonConfig.module,
		rules: [
			...commonConfig.module.rules,
			{
				test: /\.s[ac]ss$/i,
				use: ['css-loader', 'sass-loader'],
			},
		],
	},
	entry: './src/server/index.tsx',
	target: 'node',
	output: {
		path: path.resolve(__dirname, '../functions/dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	node: {
		__dirname: false,
	},
	externals: serverExternals.reduce(
		(acc, name) => ({
			...acc,
			[name]: true,
		}),
		{}
	),
};

module.exports = [clientConfig, serverConfig];
