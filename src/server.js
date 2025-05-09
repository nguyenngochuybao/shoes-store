const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/db/db.json'); // Đường dẫn đến file db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/users') {
    const db = router.db; // Truy cập database
    const users = db.get('users').value();
    const lastId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
    req.body.id = lastId + 1; // Gán ID mới
  }
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});