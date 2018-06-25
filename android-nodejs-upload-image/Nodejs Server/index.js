// requiring dependencies
const express = require('express');

// express app
const app = express();

// requiring morgran
const morgan = require('morgan');

// body parser
const bodyParser = require('body-parser');

/* 
 * defining middlewares
 */

app.use(morgan('dev'));

// parsing json data
app.use(bodyParser.json());

// parsing request body
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./route/imageRoute'));

// defining ports
const port = 3000 || process.env.PORT;

// listening on port 3000
app.listen(port, ()=>{
    console.log(`We are listening for requests at port ${3000}`);
})
// 