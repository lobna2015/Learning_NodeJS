console.log("HELLO WORLD")
const http = require('http');
const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.write('welcome home')
    }
    if(req.url === '/contact'){
        res.write('bonjour contact :)')
    }
})
server.listen(5000)
console.log("last hello world")