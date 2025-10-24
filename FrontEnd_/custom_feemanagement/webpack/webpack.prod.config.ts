import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
// import webpack from 'webpack';



const config: Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[contenthash].js",
     // './' makes sure assets load correctly when you open any nested route (like /login)
    publicPath: "./",
  },
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
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
    },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
       // to ensures correct relative links for scripts/styles in the generated index.html
      publicPath: "./",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CleanWebpackPlugin(),
  //   new webpack.DefinePlugin({
  //   "process.env.BASE_URL": JSON.stringify(process.env.BASE_URL),
  //   "process.env.ENDPOINT": JSON.stringify(process.env.ENDPOINT),
  //   "process.env.AUTHENTICATION_ENDPOINT": JSON.stringify(process.env.AUTHENTICATION_ENDPOINT),
  //   "process.env.STUDENTDETAILS_ENDPOINT": JSON.stringify(process.env.STUDENTDETAILS_ENDPOINT),
  //   "process.env.STUDENTID_ENDPOINT": JSON.stringify(process.env.STUDENTID_ENDPOINT),
  // }),

  ],
   // optional but nice for debugging your deployed code
  devtool: "source-map",
};

export default config;