import path from "path";

import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin, } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.css$/i, // this applies to all .css files
        use: ['style-loader', 'css-loader'], // the order matters!
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
       {
        test: /\.(png|jpg|gif|svg)$/i, // Matches common image file extensions
        type: 'asset/resource', // Emits a separate file and exports the URI
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new HotModuleReplacementPlugin(),
     new ForkTsCheckerWebpackPlugin({
      async: false
    }),
     new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
       emitWarning: true
    }),
  new webpack.EnvironmentPlugin({
  NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
  DEBUG: false,
}),
new Dotenv({
  path: 'properties/.env.dev', // Path to .env file (this is the default)
  safe: false, // load .env.example (defaults to "false" which does not use dotenv-safe)
}),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true
  },
};

export default config;