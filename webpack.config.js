const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: {
      directory: './dist'
    },
    port: 8080, 
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
};

