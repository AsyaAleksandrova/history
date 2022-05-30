const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: {
      index: './src/pages/index.js',
      tree: './src/pages/tree.js',
      timeline: './src/pages/timeline.js',
      Alex1: './src/pages/Alex1.js'
      
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
         publicPath: ''
   },
  mode: 'development',
   devServer: {
      static: path.resolve(__dirname, './dist'),
      compress: true,
      port: 8080,
      open: true
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: '/node_modules/'
         },
         {
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf|mp4)$/,
            type: 'asset/resource'
         },
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, {
               loader: 'css-loader',
               options: { importLoaders: 1 }
            },
               'postcss-loader'
            ]
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: './src/index.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'tree.html',
         template: './src/tree.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'timeline.html',
         template: './src/timeline.html'
      }),  
      new HtmlWebpackPlugin({
         filename: 'Alex1.html',
         template: './src/Alex1.html'
      }),       
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin()
   ]
}