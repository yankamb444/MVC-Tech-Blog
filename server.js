// requiring all of the
const express = require('express');
const mysql = require('mysql2');
const expressSession = require('express-session');
const expressHandlebars = require('express-handlebars');
// const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(expressSession.Store);
const routes = require('./controllers');


// server connection
const app = express();
const PORT = process.env.PORT || 3001;


// const session = {
//     secret: 'Welcome, hello!',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })
//   };

  const hbs = expressHandlebars.create({});
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');

//   app.use(expressSession(session));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
// });
