const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '1234',
        database : 'gosuslugi'
    }
});

app.use(express.static('public'));

// in module

app.get('/', function(req, res, next) {
    res.sendFile(path.resolve('route.html'));
});

app.get('/users/get/:id', function(req, res, next) {
    let id = req.params.id;

    if (id) {
        knex('users')
            .where({user_id: id})
            .asCallback(function(err, row) {
                res.json(row[0]);
            });
    }else{
        res.json({err: 'Ничего не найдено!'});
    }
});


app.listen(port, function() {
    console.log('Start server');
});