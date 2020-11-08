/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();

// Route setup. You can implement more in the future!
//prove activities
const prove01Routes = require('./routes/prove01'); 
const pr02Routes = require('./routes/pr02'); 
const pr03Routes = require('./routes/proveRoutes/pr03RT'); 
const pr08Routes = require('./routes/proveRoutes/pr08RT');

//team activities
const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03/ta03'); 
const ta04Routes = require('./routes/ta04');

const classRoutes = require('./routes/classRoutes/w03/routes');

const adminRoutes = require('./routes/storeRoutes/admin')
const authRoutes = require('./routes/storeRoutes/auth')
const shopRoutes = require('./routes/storeRoutes/shop')
const User = require('./models/storeModels/user')

const mongoose = require('mongoose');

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('flash');
const errorController = require('./controllers/storeControllers/error');

const corsOptions = {
origin: "https://cse341-derek-washburn.herokuapp.com/",
optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

//...

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://bluelight:cangetin@cluster0.wuf5i.mongodb.net/test?retryWrites=true&w=majority";

const store = new MongoDBStore({
  uri: MONGODB_URL,
  collection: 'sessions'
});
//const csrfProtection = csrf();

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   // For view engine as Pug
   //.set('view engine', 'pug') // For view engine as PUG. 
   // For view engine as hbs (Handlebars)
   //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
   //.set('view engine', 'hbs')
   .use(bodyParser({extended: false})) // For parsing the body of a POST
   //.use(bodyParser.urlencoded({extended: true})) // For parsing the body of a POST
   //.use(bodyParser.json({extended: true}))

   .use((req, res, next) => {
    User.findById('5f86187ee66bf166f035ebad')
    .then(user => {
      req.user = user;
      next();
    })
    //res.locals.isAuthenticated = req.session.isLoggedIn;
    //res.locals.csrfToken = req.csrfToken();
    //next();
    
  })

  

  .use(session({ secret: 'l-is-real', resave: false, saveUninitialized: false }))
  //CSRFHERE.use(csrfProtection)
  .use(flash())

  .use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    //CSRFHEREres.locals.csrfToken = req.csrfToken();
    next();
  })

  .use((req, res, next) => {
    if (!req.session.user) {
      return next();
    }
    User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err));
    });
  })

   .use('/prove01', prove01Routes)
   .use('/pr02', pr02Routes)
   .use('/pr03', pr03Routes)
   .use('/ta01', ta01Routes)
   .use('/ta02', ta02Routes) 
   .use('/ta03', ta03Routes) 
   .use('/ta04', ta04Routes)
   .use('/pr08', pr08Routes)
   .use('/w03', classRoutes)
   .use('/admin', adminRoutes)
   .use('/', authRoutes)
   .use('/products', shopRoutes)
   .get('/500', errorController.get500)
   .get('/', (req, res, next) => {
     // This is the primary index, always handled last. 
     res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     // 404 page
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   })

   .use((error, req, res, next) => {
     //res.status(error.httpStatusCode).render();
     //res.redirect('/500');
     res.status(500).render('storeViews/shop/500', {
      title: 'Error Occured!',
      path: '/500',
      isAuthenticated: req.session.isLoggedIn
    });
    console.log(error);
   })
   //.listen(PORT, () => console.log(`Listening on ${ PORT }`));



   mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
    //... // This should be your user handling code implement following the course videos
    /*User.findOne().then(user => {
      if(!user){
        new User({
          email: "derekwashburn@hotmail.com",
          password: "1234",
          cart: [],
        })
        .save();
      }
    })*/
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });