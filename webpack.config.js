const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        vinoReactWheels: './lib/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'VinoReactWheels',
        // 别问为啥要用``,因为不加会有警告
        libraryTarget: `umd`,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title: "Webpack App",
            template: "index.html"
        }
    )]
}