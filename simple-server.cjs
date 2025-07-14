const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Default to index.html for SPA routing
  let filePath = req.url === '/' ? '/index.html' : req.url;
  if (!path.extname(filePath)) {
    filePath = '/index.html';
  }
  
  const fullPath = path.join(__dirname, 'dist', filePath);
  
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      // Fallback to index.html for client-side routing
      fs.readFile(path.join(__dirname, 'dist', 'index.html'), (fallbackErr, fallbackData) => {
        if (fallbackErr) {
          res.writeHead(404);
          res.end('Not Found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fallbackData);
      });
      return;
    }
    
    // Set correct content type
    const ext = path.extname(fullPath);
    const contentType = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.svg': 'image/svg+xml',
    }[ext] || 'text/plain';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(9000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:9000/');
});