var fs = require('fs')
var file = process.argv[2]  

// fs.readFile(filePath, (err, data) )  
fs.readFile('./text.txt', function (err, contents) {  
  // fs.readFile(file,'utf8', callback) can also be used  
  if (err) {
    return console.log(err)
  }
  
  var lines = contents.toString().split('\n').length - 1  
  console.log(lines)  
  console.log("asynchrone function")
})