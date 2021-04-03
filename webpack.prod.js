const path = require('path');


module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'src/assets/js'),
  },
};