import { createServer } from 'http';
const PORT = process.env.PORT || 3000;

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jimmy Doe' },
  { id: 4, name: 'Jack Doe' },
  { id: 5, name: 'Jilly Doe' }
];

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
};

// GET /api/users
const getUserHandler = (req, res) => {
  res.statusCode = 200;
  res.write(JSON.stringify(users));
  res.end();
};

// GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split('/')[3];
  const user = users.find(u => u.id === parseInt(id));
  if (user) {
    res.statusCode = 200;
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'User not found' }));
  }
  res.end();
};

// POST /api/users
const createUserHandler = (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    try {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.statusCode = 201;
      res.write(JSON.stringify(newUser));
    } catch (error) {
      res.statusCode = 400;
      res.write(JSON.stringify({ message: 'Invalid JSON' }));
    }
    res.end();
  });
};

// 404 handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: 'Route not found' }));
  res.end();
};

// Server setup
const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === '/api/users' && req.method === 'GET') {
        getUserHandler(req, res);
      } else if (req.url.match(/^\/api\/users\/\d+$/) && req.method === 'GET') {
        getUserByIdHandler(req, res);
      } else if (req.url === '/api/users' && req.method === 'POST') {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
