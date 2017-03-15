const path = require('path');

module.exports = {
  entry: './web/client/index.js',
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
