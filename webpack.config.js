const HtmlWebpackPlugin = require('html-webpack-plugin');  //HTML的打包
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //CSS的打包
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //CSS的压缩
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'plugin demo',
      minify: true,
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    contentBase: __dirname + "dist",
    port:9999, 
    open:true 
	}
  
};