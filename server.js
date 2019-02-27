'use strict';

const Hapi=require('hapi');
const pingRoute = require('./routes/pingRoute.js');



// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8083,
});

// Add the route
server.route([...pingRoute,...forms,...fillform,...getforms]);

// Start the server
const start =  async function() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

if (!module.parent) {
  start();
}