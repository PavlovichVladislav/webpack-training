const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
   context: path.resolve(__dirname, "src"),
   mode: "development",
   entry: {
      main: "./index.js",
      analytics: "./analytics.js",
   },
   output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
   },
   resolve: {
      extensions: [".js", ".json", ".png"],
      alias: {
         "@models": path.resolve(__dirname, "src/models"),
         "@": path.resolve(__dirname, "src/models"),
      },
   },
   optimization: {
      splitChunks: {
         chunks: "all",
      },
   },
   devServer: {
      static: {
         directory: path.join(__dirname, "src"),
      },
      compress: true,
      port: 4200,
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: "./index.html",
         minify: {
            collapseWhitespace: isProd
         }
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, "src/assets/favicon.ico"),
               to: path.resolve(__dirname, "dist"),
            },
         ],
      }),
      new MiniCssExtractPlugin({
         filename: "[name].[contenthash].css",
      }),
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {},
               },
               "css-loader",
            ],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
         },
         {
            test: /\.(ttf|woff|woff2|eot)$/,
            type: "asset/inline",
         },
         {
            test: /\.xml$/i,
            type: "asset/source",
         },
         {
            test: /\.(csv|tsv)$/i,
            use: ["csv-loader"],
         },
      ],
   },
};
