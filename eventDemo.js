import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
  console.log('hello ' + name) 
}


function goodbyeHandler(name){
  console.log('goodbye ' +name)
}

// Register event listeners

myEmitter.on('greet' , greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

myEmitter.emit('greet', 'isabella');
myEmitter.emit('goodbye', 'john ')


// error handling 

myEmitter.on('error', (err) => {
  console.log('An error occured', err);
})

// simulate erro 

myEmitter.emit('error', new Error('Something went wrong here');)