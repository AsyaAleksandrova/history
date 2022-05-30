const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: {
      index: './src/pages/index.js',
      tree: './src/pages/tree.js',
      timeline: './src/pages/timeline.js',
      MihFed: './src/pages/MihFed.js',
      // AlexMih: '.src/pages/AlexMih.js',
      // Fedor3: '.src/pages/Fedor3.js',
      // Ivan5: '.src/pages/Ivan5.js',
      // Petr1: '.src/pages/Petr1.js',
      // Catherine1: '.src/pages/Catherine1.js',
      // Petr2: '.src/pages/Petr2.js',
      // Ivan6: '.src/pages/Ivan6.js',
      // AnnaIo: '.src/pages/AnnaIo.js',
      // ElisPetr: '.src/pages/ElisPetr.js',
      // Petr3: '.src/pages/Petr3.js',
      // Catherine2: '.src/pages/Catherine2.js',
      // Pavel1: '.src/pages/Pavel1.js',
      Alex1: './src/pages/Alex1.js',
      // Nikola1: '.src/pages/Nikola1.js',
      Alex2: './src/pages/Alex2.js',
      Alex3: './src/pages/Alex3.js'
      // Nikola2: '.src/pages/Nikola2.js'
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
         filename: 'MihFed.html',
         template: './src/MihFed.html'
      }),       
      new HtmlWebpackPlugin({
         filename: 'AlexMih.html',
         template: './src/AlexMih.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Fedor3.html',
         template: './src/Fedor3.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Ivan5.html',
         template: './src/Ivan5.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Petr1.html',
         template: './src/Petr1.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Catherine1.html',
         template: './src/Catherine1.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Petr2.html',
         template: './src/Petr2.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Ivan6.html',
         template: './src/Ivan6.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'AnnaIo.html',
         template: './src/AnnaIo.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'ElisPetr.html',
         template: './src/ElisPetr.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Petr3.html',
         template: './src/Petr3.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Catherine2.html',
         template: './src/Catherine2.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Pavel1.html',
         template: './src/Pavel1.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Alex1.html',
         template: './src/Alex1.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Nikola1.html',
         template: './src/Nikola1.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Alex2.html',
         template: './src/Alex2.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Alex3.html',
         template: './src/Alex3.html'
      }),
      new HtmlWebpackPlugin({
         filename: 'Nikola2.html',
         template: './src/Nikola2.html'
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin()
   ]
}