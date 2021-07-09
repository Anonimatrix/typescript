const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/ts/index.ts',
    output: {
        path: path.resolve(__dirname, 'src/js'),
        filename: 'bundle[contenthash].js'
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /(\.m?js)|\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript']
                    }
                }
            }
        ]
    },
    plugins: [
        new ESLintPlugin({}),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new TerserWebpackPlugin()
    ]
}