const path = require('path')
const PrintHookNamePlugin = require('./plugins/PrintHookNamePlugin')

module.exports = {
  entry: './main',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash:7].js'
  },
  plugins: [
    new PrintHookNamePlugin()
  ]
}
