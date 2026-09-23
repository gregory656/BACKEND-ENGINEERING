//Hapi is another popular web framework for Node.js. It's designed to be configuration-driven and provides a set of features and utilities to help you build robust and scalable web applications.

//Here's an example of a simple Hapi server:

const Hapi = require('hapi');
const server = new Hapi.Server();

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello, world!';
    }
});

server.start().then(() => {
    console.log('Server running at:', server.info.uri);
});