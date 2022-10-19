//const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
//const html
const port=process.env.PORT || 80
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
   // path: path.resolve(__dirname, "./dist")
  },
  mode:"development",
  devServer:{

  },
  //para css
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  },
  plugins:[
    new MiniCssExtractPlugin({
        filename:'index.css'
    })
  ]
};
