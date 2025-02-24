/* eslint-disable */

import jsonServer from 'json-server';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
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