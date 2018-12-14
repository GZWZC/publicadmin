const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(options = {}){
    let { isProduction } = options;
    var config = {
        entry: './index.js',
        output: {
            filename: 'bundle.js',
            path: isProduction ? path.resolve(__dirname, "../dist") : path.resolve(__dirname, "../dist-dev"),
            publicPath: isProduction ? '/dist/' : '/dist-dev/'
        },
        devtool: isProduction ? false: 'eval',
        mode: isProduction ? 'production' : 'development',
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
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            {
                                loader: "css-loader"
                            }, {
                                loader: "sass-loader"
                            }, {
                                loader: 'postcss-loader', 
                                options: {
                                    config: {
                                        path: path.resolve(__dirname, "./postcss.config.js")
                                    }
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.(eot|ttf|woff|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[hash:8].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.vue', '.js', '.scss', '.css'],
            alias: {
                '@': path.resolve('./')
            }
        },
        plugins: [
            new ExtractTextPlugin('css/common.css')
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {  // 抽离自己写的公共代码
                        chunks: "initial",
                        name: "common", // 打包后的文件名，任意命名
                        minChunks: 2,//最小引用2次
                        minSize: 0 // 只要超出0字节就生成一个新包
                    },
                    vendor: {   // 抽离第三方插件
                        test: /node_modules/,   // 指定是node_modules下的第三方包
                        chunks: 'initial',
                        name: 'vendor',  // 打包后的文件名，任意命名
                        // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                        priority: 10
                    },
                }
            }
        }
    }
    return config;
}