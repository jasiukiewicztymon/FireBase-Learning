const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname.replace('\\', '/'), 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}