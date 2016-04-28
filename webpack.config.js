var path = require('path');

module.exports = {
    entry: {
        app: './src/ts/main.ts'
    },
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        root: [path.join(__dirname, 'node_modules')],
        extensions: ['', '.ts', 'webpack.js', '.web.js', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
}