const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    let fileName = `.${parsedUrl.pathname}.html`;
    if (parsedUrl.pathname === "/") fileName = "./index.html";
    fs.readFile(fileName, function (err, data) {
        if (err) {
            fs.readFile("./404.html", function (err, data) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            });
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        }
    });
}).listen(8084);
