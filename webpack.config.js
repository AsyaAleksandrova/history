const path = require('path');
const multipage = require('./multipage.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: {
      ...multipage.entry
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
         template: './src/index.html',
         chunks: ['main']
      }),
      new HtmlWebpackPlugin({
         filename: 'tree.html',
         template: './src/pages/tree.html',
         chunks: ['tree']
      }),
      new HtmlWebpackPlugin({
         filename: 'timeline.html',
         template: './src/pages/timeline.html',
         chunks: ['timeline']
      }),  
      new HtmlWebpackPlugin({
         filename: 'MihFed.html',
         template: './src/pages/personalpages/MihFed.html'
      }),       
      new HtmlWebpackPlugin({
         filename: 'AlexMih.html',
         template: './src/pages/personalpages/AlexMih.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Fedor3.html',
         template: './src/pages/personalpages/Fedor3.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Ivan5.html',
         template: './src/pages/personalpages/Ivan5.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Petr1.html',
         template: './src/pages/personalpages/Petr1.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Catherine1.html',
         template: './src/pages/personalpages/Catherine1.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Petr2.html',
         template: './src/pages/personalpages/Petr2.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Ivan6.html',
         template: './src/pages/personalpages/Ivan6.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'AnnaIo.html',
         template: './src/pages/personalpages/AnnaIo.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'ElisPetr.html',
         template: './src/pages/personalpages/ElisPetr.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Petr3.html',
         template: './src/pages/personalpages/Petr3.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Catherine2.html',
         template: './src/pages/personalpages/Catherine2.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Pavel1.html',
         template: './src/pages/personalpages/Pavel1.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Alex1.html',
         template: './src/pages/personalpages/Alex1.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Nikola1.html',
         template: './src/pages/personalpages/Nikola1.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Alex2.html',
         template: './src/pages/personalpages/Alex2.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Alex3.html',
         template: './src/pages/personalpages/Alex3.html',
         chunks: ['personalpage']
      }),
      new HtmlWebpackPlugin({
         filename: 'Nikola2.html',
         template: './src/pages/personalpages/Nikola2.html',
         chunks: ['personalpage']
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin()
   ]
}