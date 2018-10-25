const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'./src/index.js',
		'./src/css/main.scss'
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { url: false } },
					"postcss-loader",
					"sass-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: "./css/bundle.css"
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					autoprefixer()
				]
			}
		}),
		new CopyWebpackPlugin([
            {from:'src/img',to:'img'} 
        ]),
	]
}