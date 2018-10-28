const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// the path(s) that should be cleaned
const pathsToClean = [
    './public/build'
];

// the clean options to use
const cleanOptions = {
    exclude:  ['shared.js'],
    verbose:  false,
    dry:      false,
    watch: true
}

module.exports = {

    mode: 'development',

    entry: {
        app:'./src/app.js',
    },

    output: {
        path: path.resolve(__dirname,'./public/build'),
        filename: '[name]-[hash].js',
        publicPath: '/build/'

    },


    // output: {
    //     path: path.resolve(__dirname, '../sfphp/public/dist'),
    //     filename: '[name]-[hash]-min.js',
    //     publicPath: "/dist/"
    // },

    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.css$/,
                use: {
                    loader: "babel-loader"
                }
            }

        ]
    },

    plugins: [

        new CopyWebpackPlugin([
            {
                from: 'src/FrontBundle/img',
                to: './[path][name].[ext]',
                ignore: [ '.DS_Store' ]
            }
        ]),

        new WebpackNotifierPlugin(),

        new ManifestPlugin(),

        new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ]

};