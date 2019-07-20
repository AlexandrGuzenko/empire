const dbConfig = require('../config');
const knex = require('knex')(dbConfig);

module.exports = {
    get(req, res) {
        let id = req.params.id;

        if (id) {
            knex('users')
                .where({user_id: id, deleted: 0})
                .asCallback(function(err, row) {
                    if(row.length > 0) {
                        return res.json(row[0]);
                    }else{
                        return res.json({err: 'Ничего не найдено'});
                    }
                });
        }
    },

    setSchema(req) {
        req.passport = JSON.stringify(req.passport);
        req.birth_license = JSON.stringify(req.birth_license);
        req.driver_license = JSON.stringify(req.driver_license);
        req.military_id = JSON.stringify(req.military_id);
        req.transports = JSON.stringify(req.transports);
        req.transports = JSON.stringify(req.transports);
        req.foreign_passport = JSON.stringify(req.foreign_passport);
        req.settings = JSON.stringify(req.settings);
        return req;
    },

    add(req, res) {
        this.findUser(req, (row) => {
            console.log(row);
            if (row.length === 0) {
                try {
                    knex('users')
                        .insert(this.setSchema(req.body))
                        .asCallback(function(err, row) {
                            if (err) return res.json(err);
                            return res.json(row[0]);
                        });
                } catch (e) {
                    return res.json(e);
                }
            } else {
                return res.json({status: 'Такой пользователь уже существует!'});
            }
        });
    },

    set(req, res) {
        const self = this;
        knex('users')
            .where({user_id: req.params.id, deleted: 0})
            .asCallback(function(err, row) {
                if (err) return res.json(err);
                if (row.length > 0) {
                    knex('users')
                        .where({user_id: row[0].user_id})
                        .update(self.setSchema(req.body))
                        .asCallback(function(err, row) {
                            if (err) return res.json(err);

                            if (row === 1) {
                                res.json({status: 'Пользователь с id: '+req.params.id + ' обновлен!'});
                            }else{
                                res.json({status: 'Что-то пошло не так!'})
                            }
                        })
                }else{
                    res.json({status: 'Ничего не найдено!'});
                }
            });
    },

    destroy(req, res) {
        knex('users')
            .where({user_id: req.params.id, deleted: 0})
            .asCallback(function (err, row) {
                if (err) return res.json(err);

                if (row.length > 0) {
                    knex('users')
                        .where({user_id: req.params.id})
                        .update({deleted: 1})
                        .asCallback(function(err, row) {
                            if (err) res.json(err);

                            if (row === 1) {
                                res.json({status: 'Пользователь с id: '+req.params.id + ' удален!'});
                            }else{
                                res.json({status: 'Что-то пошло не так!'})
                            }
                        });
                }else {
                    return res.json({status: 'Ничего не найдено!'});
                }
            });
    },

    findUser(req, cb) {
        knex('users')
            .where({snils: req.body.snils})
            .asCallback(function(err, row){
                cb(row);
            });
    }
};