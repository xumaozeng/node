const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const { method, url } = req
    if (method === 'GET' && url === '/') {
        fs.readFile('./index.html', (err, data) => {
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    } else if (method === 'GET' && url === '/api/users') {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.end(JSON.stringify([{ name: 'tom', age: 20 }]))
    } else if (method == "OPTIONS" && url == "/api/users") {
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Headers": "X-Token,Content-Type",
            "Access-Control-Allow-Methods": "PUT"
        });
        res.end();
    }
}).listen(4000, () => {
    console.log('api listen at ' + 4000);
})