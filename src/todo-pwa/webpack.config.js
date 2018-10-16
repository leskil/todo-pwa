const Path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        "main": "./client/app.jsx",
        //"extract-text-webpack-plugin-output-filename": "./wwwroot/css/app.css"
    },
    output: {
        path: Path.resolve(__dirname, "./wwwroot/js"),
        filename: "app.js",
        publicPath: "dev/assets/"
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "less-loader"],
                    fallback: "style-loader"
                })
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.less', '.css']
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
        new ExtractTextPlugin("../css/app.css")
    ]

}