import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = resolve();

const config = {
  entry: './src/js/index.js',
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist/'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loader: 'sass-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ],
};

export default config;
