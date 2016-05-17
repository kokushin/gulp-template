var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './src/js/main.js'
    },
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        root: [path.join(__dirname, 'node_modules')],
        extensions: ['', '.js', '.json', '.html'],
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
}