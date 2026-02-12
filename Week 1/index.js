// index.js
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  console.log(req);
  res.statusCode = 200; {'Content-Type', 'text/plain'});
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/. Press Ctrl+C to stop`);
});
// run with "node index.js" and visit http://127.0.0.1:3000 in your browser to serve
