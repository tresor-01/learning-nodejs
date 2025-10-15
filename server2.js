import {createServer} from 'http';
const PORT = process.env.PORT

const users=[
  {id:1 , name: 'John Doe'},
  {id:2 , name: 'Jane Doe'},
  {id:3 , name: 'Jimmy Doe'},
  {id:4 , name: 'Jack Doe'},
  {id:5 , name: 'Jilly Doe'}
];

// Logger middleware 
const logger = (req,res,next) => {
  console.log(`${req.method} ${req.url}`)
  next();
};

// JSOn middleware 

const jsonMiddleware  = ( req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
}

//  Router hander for GET  /api/users

const getUserHandler = (req, res) =>{
 res.write(JSON.stringify(users));
res.end(); 
};

// Roy=tr handler for GET /api/users/id

const getUserByIdhandler  = ( req, res) =>{
const id = req.url.split('/')[3];
const user = users.find((user) => user.id === parseInt(id)) 
if(user){
res.write(JSON.stringify(user));
}else{
res.write(JSON.stringify({message:'User not found '}));
}
 res.end();
}
//  Router handler for POST /api/users


// not found handler 

const notFoundhandler = (req, res) => {
res.statusCode = 404;
res.write(JSON.stringify({message: 'Route not found '}));
res.end();  
}

const server = createServer((req, res) => {

  logger (req, res , () => {
   jsonMiddleware(req, res , () => {
    if(req.url === '/api/users' && req.method === 'GET'){
      getUserByIdhandler(req,res);
    }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method==='GET'){
  getUserByIdhandler(req,res);
    }else{
      notFoundhandler(req,res);
    }
   })
  });

});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});