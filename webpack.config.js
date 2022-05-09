const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { version, name } = require('./package.json');

const { NODE_ENV } = process.env;

const ENV_MAP = {
  'production': 'production',
  'development': 'development',
}

const mode = ENV_MAP[NODE_ENV] || ENV_MAP.development;
const appRootId = `app-${name}-v${version}-env-${mode}-${Date.now()}`


const config = {
  mode,
  entry: {
    'app': './ui/web/src/index.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Multi World',
      template: path.resolve(__dirname, 'ui/web/template.ejs'),
      inject: false,
      scriptLoading: 'blocking',
      appRootId,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?tsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
    ],
  },
};




if (mode === ENV_MAP.development) {
  config.devtool = 'inline-source-map';
  config.devServer = {
    static: './dist',
  };
  config.optimization = {
    runtimeChunk: 'single',
  };
}

module.exports = config;