const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;
const deps = require('./package.json').dependencies;
require('dotenv').config({ path: './.env' });

module.exports = (env) => {
  return {
    entry: './src/index.tsx',
    mode: env.NODE_ENV || 'development',
    devServer: {
      port: 3000,
      open: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(jpg|jpeg|gif|png|mov|mp4)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: 'assets',
              outputPath: 'assets',
            }
          }
        },
        ],
    },

    plugins: [
      new webpack.EnvironmentPlugin({ BUILD_DATE: new Date() }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      // new ModuleFederationPlugin({
      //   name: 'main',
      //   filename: 'index',
      //   exposes: {
      //     './ajith': './src/app',
      //   },
      //   shared: {
      //     ...deps,
      //     react: { singleton: true, eager: true, requiredVersion: deps.react },
      //     'react-dom': {
      //       singleton: true,
      //       eager: true,
      //       requiredVersion: deps['react-dom'],
      //     },
      //   },
      // }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};