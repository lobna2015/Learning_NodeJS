var fs = require('fs')

var contents = fs.readFileSync('./text.txt')
var lines = contents.toString().split('\n').length - 1
console.log(lines)