const path = require('path')

module.exports = {
    mode: "production",
    entry: {
        vinoReactWheels: './lib/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'VinoReactWheels',
        // 别问为啥要加``,因为不加会有警告
        libraryTarget: `"umd"`,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    }
}