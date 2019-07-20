const path = require('path');
const users = require('./models/users');

module.exports = {
    getRoutes(app) {

        // Users
        app.get('/users/get/:id', users.get);
        app.post('/users/add', users.add.bind(users));
        app.post('/users/set/:id', users.set.bind(users));
        app.get('/users/delete/:id', users.destroy);

        // Templates


        // Common
        app.get('/', function(req, res) {
            return res.sendFile(path.resolve('route.html'));
        });

        return app;
    }
};