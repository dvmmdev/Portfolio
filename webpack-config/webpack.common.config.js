const path = require('path');

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
				test: /\.tsx?$/,
				use: ['babel-loader', 'webpack-import-glob-loader'],
				exclude: /node_modules/,
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
};
