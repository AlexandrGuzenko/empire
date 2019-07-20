const dbConfig = require('../config');
const knex = require('knex')(dbConfig);

module.exports = {
    get(req, res) {
        knex('templates')
            .where({user_id: req.params.userId, templates_id:req.params.id, deleted: 0})
            .asCallback(function(err, row) {
                if (err) return res.json(err);
                if (row.length > 0) {
                    return res.json(row[0]);
                }else {
                    return res.json({status: 'Ничего не найдено!'});
                }
            });
    },

    getAll(req, res) {
        knex('templates')
            .where({user_id: req.params.userId, deleted: 0})
            .asCallback(function(err, row) {
                if (err) return res.json(err);
                if (row.length > 0) {
                    return res.json(row);
                }else {
                    return res.json({status: 'Ничего не найдено!'});
                }
            });
    },

    set(req, res) {
        knex('templates')
            .where({user_id: req.params.userId, templates_id: req.params.id, deleted: 0})
            .update(this.setSchema(req.body))
            .asCallback(function(err, row) {
                if (err) return res.json(err);
                if (row === 1) {
                    return res.json({status: 'Шаблон с id: '+req.params.id + ' обновлен!'});
                }else{
                    return res.json({status: 'Что-то пошло не так!'})
                }
            })
    },

    add(req, res) {
        knex('templates')
            .insert({user_id: req.params.userId, ...this.setSchema(req.body)})
            .asCallback(function(err, row) {
                if (err) return res.json(err);
                return res.json(row[0]);
            });
    },

    destroy(req, res) {
        knex('templates')
            .where({user_id: req.params.userId, templates_id: req.params.id, deleted: 0})
            .update({deleted: 1})
            .asCallback(function(err, row) {
                if (err) return res.json(err);

                if (row === 1) {
                    res.json({status: 'Шаблон с id: '+req.params.id + ' удален!'});
                }else{
                    res.json({status: 'Что-то пошло не так!'})
                }
            });
    },

    setSchema(req) {
        req.data = JSON.stringify(req.data);
        req.settings =JSON.stringify(req.settings);
        return req;
    }
};