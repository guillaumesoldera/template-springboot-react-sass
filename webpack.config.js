const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')
var path = require('path');
const glob = require('glob-all');


module.exports = {
    entry: {
        MyApp: './src/main/js/app.js'
    },
    cache: true,
    mode: 'production',
    output: {
        library: '[name]',
        libraryTarget: 'umd',
        path: path.join(__dirname, './target/classes/static/'),
        filename: 'built/[name].js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader?name=images/[name].[ext]"
            },
            {
                test: /\.(svg)$/,
                include: [
                    path.resolve(__dirname, "src/main/resources/static/images")
                ],
                loader: "file-loader?name=images/[name].[ext]"
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: [
                    path.resolve(__dirname, "src/main/resources/static/images")
                ],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "index.min.css",
            chunkFilename: "[id].css",
        }),
        new PurgecssPlugin({
            paths: () => glob.sync(['./src/main/resources/templates/**/*.html', './src/main/js/**/*.js']),
            safelist: [/^leaflet-*/]
        })
    ]
};