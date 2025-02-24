/* eslint-disable */

// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);

// const PORT = process.env.PORT || 3001; // Use environment variable or default port
// server.listen(PORT, '0.0.0.0', () => {
//   console.log(`JSON Server is running on port ${PORT}`);
// });


// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const path = require('path');
const port = process.env.PORT || 3001;

// Serve static files from the React app
server.use(express.static(path.join(__dirname, 'dist')));

// Use default middlewares (CORS, static, etc.)
server.use(middlewares);

// Use json-server router
server.use('/api', router);

// Handle React routing, return all requests to React app
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});