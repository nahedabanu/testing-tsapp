const webpack = {

    entry: './src/components/*.tsx',

    output: {

        filename: 'target/bundle.js',

    },

    devtool: 'source-map',

    resolve: {

        extensions: ['.ts', '.tsx', '.js', '.json'],

    },

    module: {

        loaders: [

            {

                test: /.tsx?$/,

                loader: 'awesome-typescript-loader',

                exclude: /node_modules/,

            }, {

                test: /.js$/,

                loader: 'source-map-loader',

                enforce: 'pre',

            }

        ]

    }

};



module.exports = webpack;