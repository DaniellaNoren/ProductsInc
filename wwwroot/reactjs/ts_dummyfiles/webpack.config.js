var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
    entry: './wwwroot/reactjs/expose-components.js',
    output: {
        filename: '[name].js',
        globalObject: 'this',
        path: path.resolve(__dirname, 'wwwroot/reactjs/dist'),
        publicPath: '/reactjs/dist/'
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    optimization: {
        runtimeChunk: {
            name: 'runtime', // necessary when using multiple entrypoints on the same page
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            generate: function (seed, files) {
                var manifestFiles = files.reduce(function (manifest, file) {
                    manifest[file.name] = file.path;
                    return manifest;
                }, seed);
                var entrypointFiles = files.filter(function (x) { return x.isInitial && !x.name.endsWith('.map'); }).map(function (x) { return x.path; });
                return {
                    files: manifestFiles,
                    entrypoints: entrypointFiles,
                };
            },
        }),
    ]
};
