const express = require('express');
const routes = require('./routes');

let app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app = routes.getRoutes(app);

app.listen(port, function() {
    console.log('Start server');
});