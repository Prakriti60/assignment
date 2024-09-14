const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url == '/data' && req.method == 'GET'){
        const jsonData = {
            message: 'Hello World!',
            status: 'success'
        };
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'application/json');
        res.end(JSON.stringify(jsonData));
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type' , 'text/plain');
        res.end('Not Found`');
    }

});

server.listen(3000,() => {
    console.log('server running on http://localhost:3000/data')
})