//Express.js is a popular web framework for Node.js. It provides a set of features and utilities to help you build web applications and APIs. It's designed to be minimalistic and unopinionated.
//Allowing you to choose the libraries and tools you want to use.
//Here's an example of a simple Express.js server:

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


//REALWORLD EXAMPLE OF EXPRESS.JS SERVER

//Here's an example of a more complex Express.js server that includes routing, middleware, and error handling:
//USER REGISTRATION AND LOGIN SYSTEM USING EXPRESS.JS

const express = require('express'); // Import the Express.js library for building web applications
const bodyParser = require('body-parser');// Import the body-parser library for parsing incoming request bodies
const bcrypt = require('bcrypt');// Import the bcrypt library for password hashing
const jwt = require('jsonwebtoken');// Import the jsonwebtoken library for generating and verifying JSON Web Tokens
const app = express();//initialize the Express.js application

app.use(bodyParser.json());//use the body-parser middleware to parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true }));//use the body-parser middleware to parse incoming URL-encoded requests

const users = [];//create an empty array to store user data

app.post('/api/users', async (req, res) => {//define a route for creating new users
  const { username, password } = req.body;//extract the username and password from the request body
  const hashedPassword = await bcrypt.hash(password, 10);//hash the password using bcrypt with a salt rounds of 10
  const user = { username, password: hashedPassword };//create a new user object with the username and hashed password
  users.push(user);//add the new user to the users array
  res.status(201).json(user);//send a response with a status code of 201 (Created) and the new user object in JSON format
});

app.post('/api/login', async (req, res) => {//define a route for user login
  const { username, password } = req.body;//extract the username and password from the request body
  const user = users.find(u => u.username === username);//find the user in the users array by username
  if (!user) {//if the user is not found, send a response with a status code of 401 (Unauthorized) and an error message
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const isValid = await bcrypt.compare(password, user.password);//compare the provided password with the hashed password stored in the user object using bcrypt
  if (!isValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user.id }, 'secret');//sign a JSON Web Token with the user ID and a secret key
  res.json({ token });//send a response with the generated token in JSON format
});

app.listen(3000, () => {//start the server and listen on port 3000
  console.log('Server running at http://localhost:3000');
});


//GET AND POST REQUEST HANDLER USING EXPRESS.JS

//GET methods are used to retrieve data from a server.
 //hey are typically used to fetch data from a database or to retrieve information about a resource. 
//Here's an example of a GET method that retrieves a list of users:

//GET USED TO RETRIEVE DATA OR FETCH DATA TO SERVER
app.get('/api/users', (req, res) => {//define a route for retrieving a list of users
    res.json(users);//send a response with the users array in JSON format
  });

  //POST USED TO FEED OR SEND DATA TO THE SERVER
app.post('/api/users', (req, res) => {//define a route for creating a new user
    const { username, password } = req.body;//extract the username and password from the request body
    const user = { username, password };//create a new user object with the username and password
    users.push(user);//add the new user to the users array
    res.status(201).json(user);//send a response with a status code of 201 (Created) and the new user object in JSON format
  });

  //REAL WORLD EXAMPLE USING URL ENDPOINTS

  //In a real-world application, you might have multiple endpoints for different tasks. 
  //For example, you might have an endpoint for retrieving a list of products, an endpoint for creating a new product, and an endpoint for updating an existing product.

  app.get('/api/users/:id', (req, res) => {//define a route for retrieving a user by ID
    const userId = req.params.id;//extract the user ID from the request parameters
    const user = users.find(u => u.id === userId);//find the user in the users array by ID
    if (!user) {//if the user is not found, send a response with a status code of 404 (Not Found) and an error message
      return res.status(404).json({ error: 'User not found' });//send a response with a status code of 404 (Not Found) and an error message
    }
    res.json(user);
  });