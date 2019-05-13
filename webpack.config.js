const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const WebpackMd5Hash = require("webpack-md5-hash");

const config = env => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css"
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          unused: false
        }
      }
    }),
    new OptimizeCSSAssetsPlugin(),
    new WebpackMd5Hash(),
    new HtmlWebpackPlugin(
      {
        title: "Platzi Badges",
        template: path.resolve(__dirname, "public/index.html"),
        filename: path.resolve(__dirname, "public/index.html"),
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          removeRedundantAttributes: true
        }
      },
      new webpack.DllReferencePlugin({
        manifest: require("./modules-manifest.json")
      })
    )
  ];

  if (env.NODE_ENV === "production") {
    plugins.push(new CleanWebpackPlugin());
  }
  return {
    mode: "production",
    entry: {
      index: path.resolve(__dirname, "./src/index.js"),
      badgeDetail: path.resolve(__dirname, "./src/pages/BadgeDetail.js"),
      badgeDetailContainer: path.resolve(
        __dirname,
        "./src/pages/BadgeDetailContainer.js"
      ),
      badgeEdit: path.resolve(__dirname, "./src/pages/BadgeEdit.js"),
      badges: path.resolve(__dirname, "./src/pages/Badges.js"),
      newBadges: path.resolve(__dirname, "./src/pages/NewBadges.js")
    },
    output: {
      path: path.resolve(__dirname, "./public/dist"),
      filename: "js/[name].[hash].js",
      publicPath: "./public/dist"
    },
    module: {
      rules: [
        {
          test: /\.(css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader"
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/react"],
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            }
          ]
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 1000000,
              name: "/images/[name].[hash].[ext]"
            }
          }
        },
        {
          test: /\.(woff|eot|ttf)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 1000000,
              name: "/images/[name].[hash].[ext]"
            }
          }
        }
      ]
    },
    plugins
  };
};
module.exports = config;
