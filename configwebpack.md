### record some simple webpack config

### steps

#### Step 1

    修改package.json中的type字段(field)为module
    项目默认是commonjs module，修改后，项目采用ES module 模式，原本以.js结尾的文件将采用es6(es 2015以后)模块
    
    总结：未设type时，默认commonjs模式，.js默认按照commonjs编译(所以不能用es6模块导入或导出)，.mjs将按照es module编译。设置type后.js默认按照es module编译。
    
    注意note：根据 ESM 规范，使用 import 关键字并不会像 CommonJS 模块那样，在默认情况下以文件扩展名填充文件路径。因此，ES Modules 必须明确文件扩展名！（vue里我就不知道怎么实现的了vue里import可以写路径不必具体到文件的扩展名。example： index （不需要写成index.js）不管是否设置type为module最好不要让你的webpack配置文件以.cjs结尾！！！！我试过报错

#### Step 2

    npm i(add) -D webpack webpack-cli webpack-dev-server webpack-merge babel babel-loader style-loader css-loader scss-loader sass html-webpack-plugin 等等

#### Step 3

    创建三个配置文件webpack.common.js webpack.dev.js webpack.prod.js
    并分别配置如下

webpack.common.js

```js
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();
export default {
  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
};
```

webpack.dev.js

```js
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
});
```

webpack.prod.js

```js
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',
  devtool: 'eval-cheap-module-source-map',
});
```

#### Step4

    为package.json中的"scripts"添加属性
    "start": "webpack serve --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
