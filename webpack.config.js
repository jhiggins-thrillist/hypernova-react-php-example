/* eslint-disable filenames/match-regex, import/no-commonjs */

const path = require('path');
const context = path.resolve(__dirname, 'src');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // context: __dirname,
    entry: __dirname + '/src/web/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/docker-cakephp/app/app/webroot/js'
    },

    module: {
        // rules: [
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['es2015', 'react']
        //         }
        //     }
        // ],

        loaders: [

            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     loaders: [
            //         'style-loader',
            //         'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
            //     ],
            //     options: {
            //         removeImport: true
            //     }
            // },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, './src'),
                exclude: /node_modules/,
                query: {
                    plugins: [
                        'transform-react-jsx',
                  ]
                }
            },

            {
                test: /\.css$/,
                include: path.resolve(__dirname, './src'),
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    // {
                    //     loader: 'style-loader'
                    // },
                    fallback: 'style-loader',
                    use: combineLoaders([{
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            importLoader: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }])
                })
            },

            // {
            //     include: path.resolve(__dirname, './src'),
            //     loaders: [
            //         'style-loader',
            //         'css-loader?importLoader=1&modules&localIdentName=[name]__[local]___[hash:base64:5]'
            //     ],
            //     test: /\.css$/
            // },
        ]
    },

    stats: 'minimal',

    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.DedupePlugin()
    ]

};
