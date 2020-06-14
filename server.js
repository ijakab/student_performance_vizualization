var fs = require('fs'),
    http = require('http');
/**/
http.createServer(function (req, res) {
    const file = req.url !== '/' ? req.url : '/index.html'
    fs.readFile(__dirname + file, function (err,data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080);
