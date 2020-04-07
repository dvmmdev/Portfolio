const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const devServerConfig = {
	entry: './src/client/index.tsx',
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'public/bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'build/[path][name].[ext]',
							publicPath: (url) => url.replace(/public/, ''),
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { plugins: [autoprefixer()] },
					},
					'sass-loader',
				],
			},
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'webpack-import-glob-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.md$/,
				use: [
					'babel-loader',
					'frontmatter-markdown-loader',
					'sanitize-md-loader',
				],
			},
		],
	},
	resolveLoader: {
		modules: ['node_modules', path.resolve(__dirname, 'loaders')],
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
			'.scss',
			'.html',
			'.md',
			'.json',
		],
	},
	devServer: {
		port: 31199,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: 'src/public/index.html',
			filename: 'index.html',
		}),
	],
};

module.exports = [devServerConfig];
