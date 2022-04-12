import config from './webpack.common.js';
import { merge } from 'webpack-merge';

const prod = merge(config, {
  mode: 'production',
  devtool: 'eval-cheap-module-source-map',
});

export default prod;
