import { merge } from 'webpack-merge';
import config from './webpack.common.js';

const dev = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
});

export default dev;
