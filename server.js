import http from 'http';
import { json } from 'stream/consumers';
const PORT = process.env.PORT;


const server = http.createServer((req, res) => {
  // res.write('Hello world');
  // res.setHeader('Content-Type', 'text/plain');
  // res.statusCode = 404;

  console.log(req.url);
  console.log(req.method);

  res.writeHead(200, {'Content-Type': ' text/html'});
  res.end("<h1>This is done by tita </h1>")

});


server.listen(PORT, () => {
  console.log(`server running o port ${PORT}`)
});