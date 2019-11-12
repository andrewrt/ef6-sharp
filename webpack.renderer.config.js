const rules = require('./webpack.rules');
// const CopyPlugin = require('copy-webpack-plugin');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules ,
  },
  externals: {
    "sharp": 'commonjs sharp',
  },
  // plugins: [
  //   new CopyPlugin([
  //     {
  //       from: './node_modules/sharp/',
  //       to: 'main_window/node_modules/sharp/', // still under node_modules directory so it could find this module
  //       // ignore: [...]
  //     },
  //   ]),
  // ]
};
