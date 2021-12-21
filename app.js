const express = require('express')
const bodyParser = require('body-parser');
const app = express()
require('dotenv').config()
const morgan = require('morgan')
app.use(morgan('short'))

const PORT = process.env.PORT || 3000

// form data access
app.use(bodyParser.urlencoded({ extended: true }));
// tamplate engine
app.set('view engine', 'ejs')

// static files
app.use(express.static('public'))
// mongodb connection
const DB_URL = process.env.DB_URL
const dbConnect = require('./db/connection')
dbConnect(DB_URL)
// all routes
const homeRoutes = require('./routes/home')
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')
app.use('/', homeRoutes)
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)



app.listen(PORT, () => {
    console.log(`app is running ${PORT}`);
})