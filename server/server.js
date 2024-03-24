// Importing modules
const express = require('express');
const path = require('path');
const db = require('./config/connection');

// GraphQL will replace existing routes
// const routes = require('./routes'); 

// Creating an express server
const app = express();
// Setting the port for production and development
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Middleware for routes
// app.use(routes);

// Connects to the database and listens on designated port
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
