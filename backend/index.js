const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('¡Hola Mundo! Docker, Node.js y MySQL funcionando en el servidor de DAW.\n');
});

server.listen(3000,'0.0.0.0', () => {
  console.log('Servidor Node.js corriendo en el puerto 3000');
});
