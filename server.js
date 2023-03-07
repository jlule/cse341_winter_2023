// The code on this page is what it takes to make a node server
// All the code you need to create a node server

var express = require('express');
var app = express();
const port = process.env.PORT || 3000

 app.use('/', require('./routes'));

 app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});