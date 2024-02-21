// Import necessary Node.js packages
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

// Import sequelize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Set up session with Sequelize
const sess = {
  secret: 'Super secret secret', // You should store the actual secret in an environment variable
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set up Handlebars.js as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Import routes (Make sure to create these files as per MVC structure)
// Example: const routes = require('./controllers');
// app.use(routes);

// Connect to the database and start the Express server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
