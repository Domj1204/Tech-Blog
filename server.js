/* Require necessary npm packages */
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

/* Require routes */
const routes = require('./controllers');
const helpers = require('./utils/helpers');

/* Require database connection */
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

/* Initialize the application and create a port */
const app = express();
const PORT = process.env.PORT || 3001;

/* Set up Handlebars.js engine with custom helpers */
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'green-grape',
  cookie: {
    // Session will automatically expire in 15 minutes
    maxAge: 15 * 30 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

/* Inform Express.js on which template engine to use */
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

/* Middleware to parse JSON and urlencoded request data */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

/* Sync database connection to Express.js server */
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
