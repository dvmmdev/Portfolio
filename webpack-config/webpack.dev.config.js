const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const devServerConfig = {
	entry: './src/client/index.js',
	output: {
		path: __dirname,
		filename: './build/bundle.js',
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
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: ['babel-loader', 'webpack-import-glob-loader'],
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
		extensions: ['.js', '.jsx', '.scss', '.html', '.md'],
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
