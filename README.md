# Things

- created `public/index.html`

  ```html
  <!-- sourced from https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html -->
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>React Starter</title>
    </head>

    <body>
      <div id="root"></div>
      <noscript> You need to enable JavaScript to run this app. </noscript>
      <script src="../dist/bundle.js"></script>
    </body>
  </html>
  ```

- `npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0`

  - `babel-core` is the main babel package — We need this for babel to do any transformations on our code.
  - `babel-cli` allows you to compile files from the command line
  - [`preset-react`](https://babeljs.io/docs/en/babel-preset-react) and [`preset-env`](https://babeljs.io/docs/en/babel-preset-env) are both presets that transform specific flavors of code — in this case, the env preset allows us to transform ES6+ into more traditional javascript and the react preset does the same, but with JSX instead.

- created `.babelrc`

  ```
  {
    "presets": ["@babel/env", "@babel/preset-react"]
  }
  ```

- `npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2`

- created `webpack.config.js`

  ```js
  const path = require('path');
  const webpack = require('webpack');

  module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      publicPath: '/dist/',
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'public/'),
      port: 3000,
      publicPath: 'http://localhost:3000/dist/',
      hotOnly: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  };
  ```

- `npm i react@16.5.2 react-dom@16.5.2`

- created `src/index.js`

  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App.js';

  ReactDOM.render(<App />, document.getElementById('root'));
  ```

- created `src/App.js`

  ```js
  import React, { Component } from 'react';
  import './App.css';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <h1> Hello, World! </h1>
        </div>
      );
    }
  }

  export default App;
  ```

- created `src/App.css`

  ```css
  .App {
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  ```
