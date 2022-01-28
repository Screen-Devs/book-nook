const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // add mode option
  devtool: 'eval-source-map', // add devtool option
  module: {
    rules: [{
        test: /\.(js|jsx)$/, //regex to test for .js or .jsx file endings
        exclude: /node_modules/, //regex that specifies node_modules folder
        use: {
          //Loader to use on files specified by 'test' above
          loader: 'babel-loader',
          // Additional options specific to the loader
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};