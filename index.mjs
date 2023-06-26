import { createServer } from '@tomphttp/bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';

const bare = createServer('/bare/', '');
const serve = new nodeStatic.Server('static/');

const server = http.createServer();

server.on('request', (request, response) => {
  if (bare.routeRequest(request, response)) return true;
  serve.serve(request, response);
});

server.on('upgrade', (req, socket, head) => {
  if (bare.routeUpgrade(req, socket, head)) return;
  socket.end();
});

server.listen(process.env.PORT || 6969, () => {
  console.log('Listening on port', server.address().port);
});
