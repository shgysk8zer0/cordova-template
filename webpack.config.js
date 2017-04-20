const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './www/js/index.js',
    output: {
        path: __dirname,
        filename: 'www/js/index.min.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'latest'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};
