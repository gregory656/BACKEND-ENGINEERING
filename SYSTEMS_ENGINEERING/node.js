//Js Runtime built on Google v8 Engine

//Allows Js to 

 //1.Read Files(fs module..file system module)
 const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
//*readFile function* from the fs module to read the contents of a file named example.txt.
//  We're passing in three arguments: the path to the file, the encoding (in this case, UTF-8),
//  and a callback function that will be called when the file has been read.
//  If there's an error reading the file, the callback function will be called with an error object.
//  Otherwise, it will be called with the contents of the file as a string.




 //2.Create servers(http module..http server)

 const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;//status code 200 means the request was successful
  res.setHeader('Content-Type', 'text/plain');//setHeader method to set the Content-Type header of the response to text/plain
  res.end('Hello, world!');//end method to send the response back to the client with the message "Hello, world!"
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
//In this code, we're creating a new server using the createServer function
//  from the http module.
//  We're passing in a callback function that will be called whenever a request is made to the server.
//  In this example, we're simply sending a response with a status code of 200,
//  a content type of text/plain, and the message "Hello, world!".
//  We're then starting the server and listening on port 3000 on the localhost.


//3.Handle requests and responses
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
  } else if (req.url === '/api') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello, world!' }));
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
//In this code, we're checking the URL of the request to determine how to handle it.
//  If the URL is /, we're sending a response with a status code of 200, 
// a content type of text/plain, and the message "Hello, world!".
//  If the URL is /api, we're sending a response with a status code of 200,
//  a content type of application/json, and a JSON object with a message property.
//  If the URL is anything else, we're sending a response with a status code of 404 and the message "Not found".


//4.Create APIs(Express module)
const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ]));
});

app.post('/api/users', (req, res) => {
  const
})



//5.Connect to Databases(child_process module)//exec function is used to execute shell commands and scripts from within a Node.js application.
  //This module allows you to run shell commands and scripts from within your Node.js application.
const { exec } = require('child_process');

exec('ls -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(stdout);
});
//in this code, we're using the exec function from the child_process module to run the ls -l command.
//  We're passing in the command as a string and a callback function that will be called when the command has completed. 
// If there's an error running the command, the callback function will be called with an error object. 
// Otherwise, it will be called with the standard output and standard error of the command.

//6.Handle Asynchronous operations

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');//ROUTE HANDLER/URL/send method to send a response back to the client/simple message back to the client using the send function
});

app.get('/api/users', (req, res) => {
  res.json([//ROUTE HANDLER/URL/json method to send a JSON object back to the client
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ]);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

//Node.js is often used to build web applications using frameworks like Express, Koa, or Hapi.
//  These frameworks provide a set of pre-built middleware functions that can be used to handle common tasks such as parsing request bodies, serving static files, and handling errors.
//In this code, we're using the Express framework to create a web application. We're defining two routes: one for the root URL (/) and one for the /api/users URL. The first route sends a simple message back to the client using the send function. The second route sends a JSON object back to the client using the json function. We're then starting the server and listening on port 3000 on the localhost.
//In this code, we're using the Express framework to create a web application. We're defining two routes: one for the root URL (/) and one for the /api/users URL. The first route sends a simple message back to the client using the send function. The second route sends a JSON object back to the client using the json function. We're then starting the server and listening on port 3000 on the localhost.
//In this code, we're using the Express framework to create a web application.
//  We're defining two routes: one for the root URL (/) and
//  one for the /api/users URL.
//  The first route sends a simple message back to the client using the send function.
//  The second route sends a JSON object back to the client using the json function. We're then starting the server and listening on port 3000 on the localhost.











