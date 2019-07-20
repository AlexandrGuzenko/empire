const path = require('path');
const users = require('./models/users');
const templates = require('./models/templates');

module.exports = {
    getRoutes(app) {

        // Users
        app.get('/users/get/:id', users.get);
        app.post('/users/add', users.add.bind(users));
        app.post('/users/set/:id', users.set.bind(users));
        app.get('/users/delete/:id', users.destroy);

        // Templates
        app.get('/templates/get/:userId/:id', templates.get);
        app.get('/templates/all/:userId/', templates.getAll);
        app.get('/templates/delete/:userId/:id', templates.destroy);
        app.post('/templates/:userId/add', templates.add.bind(templates));
        app.post('/templates/set/:userId/:id', templates.set.bind(templates));

        // Common
        app.get('/', function(req, res) {
            return res.sendFile(path.resolve('route.html'));
        });

        return app;
    }
};