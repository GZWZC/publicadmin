const path = require('path');
const webpack = require('webpack');


module.exports = function(options = {}){
    var config = {
        entry: './index.js',
        output: {
            filename: 'index1.js'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'vue-loader'
                    }
                },
                {
                    test: /\.(scss|css)$/,
                    use: [{
                        loader: "css-loader"
                    }]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.vue', '.js']
        },
    }
    return config;
}