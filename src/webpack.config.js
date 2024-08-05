const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const mimeTypes = require('mime-types');

module.exports = (env) => {
  const isProd = env.production;

  return {
    entry: './index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: isProd ? '/art-museum-react/' : '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        process: 'process/browser',
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'components/'),
        '@utils': path.resolve(__dirname, 'utils/'),
        '@styles': path.resolve(__dirname, 'styles/'),
        '@assets': path.resolve(__dirname, 'assets/'),
        '@pages': path.resolve(__dirname, 'pages/'),
        '@constants': path.resolve(__dirname, 'constants/'),
        '@store': path.resolve(__dirname, 'store/'),
      },
      modules: ['node_modules', path.resolve(__dirname, '.')],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000, 
                mimetype: 'image/svg+xml',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: '../public/index.html',
        filename: 'index.html',
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
    },
    devtool: isProd ? 'source-map' : 'inline-source-map',
    mode: isProd ? 'production' : 'development',
  };
};
