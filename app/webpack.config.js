
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin=require('mini-css-extract-plugin')
var path = require('path');
var webpack = require("webpack");
//const port=process.env.PORT || 80
module.exports = {
  entry: "./src/index.js",
  
  mode: 'development',
  output: {
   path:path.resolve( __dirname+ "./dist"), 
   filename: "bundle.js"
  },
 
  module: {
    rules: [
      {
        test: /\.js$/,
       // loader:"babel-loader",
        exclude:/node_modules/,
        use: ["babel-loader"]
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
devServer: {
  static: {
      directory: path.join(__dirname, 'src'),
  },
 host: 'localhost',
  port: 80,
  open: true,
  hot: true,
  liveReload: true
},
devtool: 'inline-source-map',
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:"src/index.html"
    })
  ]
}

  /*devServer: {
    host: 'localhost',
   // port: port,
    historyApiFallback: true,
    open: true
  },*/
  

