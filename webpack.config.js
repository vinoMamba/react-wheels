const path = require('path')

module.exports = {
    entry: {
        vinoReactWheels: './lib/index.tsx',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
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
            },
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader"
            }
        ]
    },
}