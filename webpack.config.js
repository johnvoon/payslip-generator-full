const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const fontMagician = require("postcss-font-magician");

module.exports = {
  devtool: "eval",
  entry: {
    bundle: "./src/index"
  },
  output: {
    path: path.join(__dirname, "server/static/scripts"),
    publicPath: "http://localhost:8080/static/scripts",
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader",
        query: {
          configFile: "./.eslintrc"
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, "src")
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
        include: path.join(__dirname, "src", "styles")
      },
      {
        test: /\.(woff(2)?|eot|ttf|svg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader"
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: "file-loader",
        options: {
          name: "./server/static/images/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL)
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer(), fontMagician()]
      }
    }),
    new HtmlWebpackPlugin({
      title: "Concept Law Firm",
      template: "server/templates/template.html",
      filename: "../../templates/base.html"
    })
  ]
};
