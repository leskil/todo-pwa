const Path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        "main": "./client/app.js"
        // "webpack": "webpack-hot-middleware/client"
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
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]

}