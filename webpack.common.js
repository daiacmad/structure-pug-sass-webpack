const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
module.exports = {
  	entry:{
		  script :  './src/scripts/index.js',
		  vendor:  './src/scripts/vendor.js'
  	},
  	devtool : "eval",
	output: {
		filename: 'scripts/[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
	    loaders: [
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{ 
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{ 
				test: /\.pug$/,
				exclude: /node_modules/,
				loader: ['html-loader','pug-html-loader']
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "styles/style.bundle.css"
		}), 
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/template/index.pug',
			filename:  'index.html'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/template/home.pug',
			filename:  'home.html',
			chunks: ['vendor']
		})
    ]
};