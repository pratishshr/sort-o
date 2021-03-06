var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'sorto.js',
    library: 'sorto',
    libraryTarget: 'umd'
  }
};
