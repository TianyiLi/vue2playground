const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIBS = [
    'vue'
]
const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('style.css')
    ]
}

module.exports = config;