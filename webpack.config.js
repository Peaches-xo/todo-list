const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/controller.js',
  // entry: {
  // index: './src/index.js',
  // print: './src/print.js',
  // },
  devtool: 'inline-source-map',
  output: {
    //filename: 'bundle.js',
    // filename: '[name].bundle.js',
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // plugins: [
  //     new HtmlWebpackPlugin({
  //     title: 'Development', //as above
  //     }),
  // ],
};
