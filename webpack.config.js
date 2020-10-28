const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    resume: path.resolve(__dirname, 'src/pages/resume/index.tsx')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        }
      },
      {
        test: /\.(ttf)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        }
      }
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src/pages/resume/resume.html'),
          inject: 'body',
          chunks: [ 'resume' ]
      })
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }  
};