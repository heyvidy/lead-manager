module.exports = {
    module: {
        rules: [
            { test: /\.js$/, 
            loader: 'babel-loader', 
            exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
        }
        ]
    }
}