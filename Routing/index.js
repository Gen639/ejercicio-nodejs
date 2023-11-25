const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const query = url.parse(req.url, true);
    console.log(query.pathname);
    const filename = `./pages${query.pathname}.html`;

    fs.readFile(filename, (err, data) => {
      try {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      } catch (error) {
        fs.readFile("./pages/not_found.html", (err, data) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          console.error(error);
          return res.end(data);
        });
      }
    });
  })
  .listen(8080);
