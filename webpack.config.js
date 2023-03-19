const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const postcssPresetEnv = require("postcss-preset-env");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const target = isDev ? "web" : "browserslist";
const devtool = isDev ? "source-map" : undefined;

const plugins = () => {
   const base = [
      new HTMLWebpackPlugin({
         template: "./index.html",
         minify: {
            collapseWhitespace: isProd,
         },
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
         filename: fileName("css"),
      }),
      new ESLintPlugin(),
   ];

   if (isProd) {
      base.push(new BundleAnalyzerPlugin());
   }

   return base;
};

const optimization = () => {
   const config = {
      splitChunks: {
         chunks: "all",
      },
   };

   if (isProd) {
      config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()];
   }

   return config;
};

const fileName = (extension) => (isDev ? `[name].${extension}` : `[name].[hash].${extension}`);

const cssLoaders = (extra) => {
   const loaders = [];

   isProd ? loaders.push(MiniCssExtractPlugin.loader) : loaders.push("style-loader");

   loaders.push("css-loader");

   loaders.push({
      loader: "postcss-loader",
      options: {
         postcssOptions: {
            plugins: [postcssPresetEnv()],
         },
      },
   });

   if (extra) {
      loaders.push(extra);
   }

   return loaders;
};

module.exports = {
   context: path.resolve(__dirname, "src"),
   mode: "development",
   entry: {
      main: ["@babel/polyfill", "./index.jsx"],
      analytics: "./analytics.ts",
   },
   output: {
      filename: fileName("js"),
      clean: true,
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "assets/[name][ext]",
   },
   resolve: {
      extensions: [".js", ".json", ".png"],
      alias: {
         "@models": path.resolve(__dirname, "src/models"),
         "@": path.resolve(__dirname, "src/models"),
      },
   },
   optimization: optimization(),
   devServer: {
      static: {
         directory: path.join(__dirname, "src"),
      },
      compress: true,
      port: 4200,
      hot: true,
   },
   target,
   devtool,
   plugins: plugins(),
   module: {
      rules: [
         {
            test: /\.css$/,
            use: cssLoaders(),
         },
         {
            test: /\.s[ac]ss$/,
            use: cssLoaders("sass-loader"),
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
            use: [
               {
                  loader: "image-webpack-loader",
                  options: {
                     mozjpeg: {
                        progressive: true,
                     },
                     // optipng.enabled: false will disable optipng
                     optipng: {
                        enabled: false,
                     },
                     pngquant: {
                        quality: [0.65, 0.9],
                        speed: 4,
                     },
                     gifsicle: {
                        interlaced: false,
                     },
                     // the webp option will enable WEBP
                     webp: {
                        quality: 75,
                     },
                  },
               },
            ],
            type: "asset/resource",
         },
         {
            test: /\.(ttf|woff|woff2|eot)$/,
            type: "asset/resource",
            generator: {
               filename: "fonts/[name][ext]",
            },
         },
         {
            test: /\.xml$/i,
            type: "asset/source",
         },
         {
            test: /\.(csv|tsv)$/i,
            use: ["csv-loader"],
         },
         {
            test: /\.[tj]s$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"],
               },
            },
         },
         {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"],
               },
            },
         },
      ],
   },
};
