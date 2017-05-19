var webpack = require("webpack");
var path = require("path");
var glob = require("glob");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var PurifyCSSPlugin = require("purifycss-webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var autoprefixer = require("autoprefixer");
var fontMagician = require("postcss-font-magician");
var extractCSS = new ExtractTextPlugin("../stylesheets/[name]-css.css");
var extractSCSS = new ExtractTextPlugin("../stylesheets/[name]-scss.css");
var extractLESS = new ExtractTextPlugin("../stylesheets/[name]-less.css");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var VENDOR_LIBS = [
  "axios",
  "bootstrap",
  "classnames",
  "hamburgers",
  "react",
  "react-dom",
  "react-dropzone",
  "react-headroom",
  "react-helmet",
  "react-redux",
  "react-router",
  "redux",
  "redux-form",
  "redux-promise",
  "redux-thunk"
];

module.exports = {
  entry: {
    bundle: "./src/index",
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, "build", "scripts"),
    publicPath: "https://payslip-generator.surge.sh/scripts/",
    filename: "[name].[chunkhash].bundle.js"
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, "src")
      },
      {
        test: /\.css$/,
        use: extractCSS.extract(["css-loader", "postcss-loader"])
      },
      {
        test: /\.scss$/,
        use: extractSCSS.extract([
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ])
      },
      {
        test: /\.less$/,
        use: extractLESS.extract([
          "css-loader",
          "postcss-loader",
          "less-loader"
        ])
      },
      {
        test: /\.(woff(2)?|eot|ttf|svg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false,
      options: {
        postcss: [autoprefixer(), fontMagician()]
      }
    }),
    extractCSS,
    extractSCSS,
    extractLESS,
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      API_URL: JSON.stringify(process.env.API_URL)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["commons", "vendor", "bootstrap"]
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: "../../server/templates/base.html",
      template: "server/templates/template.html",
      hash: true
    }),
    new CleanWebpackPlugin([
      "server/templates/base.html",
      "build/scripts",
      "build/stylesheets"
    ]),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        },
        safe: true
      }
    })
  ]
};
