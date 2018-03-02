const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  	entry:{
		  script :  './src/scripts/index.js',
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
				use:["html-loader",{
					loader:"pug-html-loader",
					options:{
						pretty:true,
					}
				}],
			},
			{ 
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader:'file-loader',
				options:{
					limit: 10000,
					name: "[name].[hash].[ext]",
					outputPath: 'assets/images'
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options:{
					limit: 10000,
					name: "[name].[hash].[ext]",
					outputPath: 'assets/media'
				}
			  },
			  {
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options:{
					limit: 10000,
					name: "[name].[hash].[ext]",
					outputPath: 'assets/fonts'
				}
			  }
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/scripts/vendor', to: './scripts/vendor' },
			{ from: './src/styles/vendor', to:'./styles/vendor'},
		]),
		new webpack.ProvidePlugin({
            $: "jquery",
			jQuery: "jquery",
			_ : "underscore"
        }),
		new ExtractTextPlugin({
			filename: "styles/style.bundle.css"
		}), 
		new HtmlWebpackPlugin({
			hash: false,
			template: './src/template/index.pug',
			filename:  'index.html',
			minify:false,
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/template/home.pug',
			filename:  'home.html'
		})
    ]
};