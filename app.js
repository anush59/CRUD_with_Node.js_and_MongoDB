//app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds135421.mlab.com:35421/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/products', product);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

//to start at the begin, we don't touch to app.js and product.model.js...
// Only when we wanna start we first go to product.route.js , first we must write post method,
// then go to product.controller.js , add //CREATE, and than test it,,,,
// then go to product.route.js, write get method, go to product.controller.js, write //READ
//etc...






