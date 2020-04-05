const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							outputPath: 'build/public/',
						},
					},
				],
			},
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
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: ['babel-loader', 'webpack-import-glob-loader'],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: {
								removeComments: false,
							},
						},
					},
				],
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
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'public/[name].css',
		}),
	],
	resolveLoader: {
		modules: ['node_modules', path.resolve(__dirname, 'loaders')],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.html', '.md'],
	},
	node: {
		__dirname: false,
	},
};
