'use strict';

var conn = require('../lib/connectMongoose.js');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    age: Number
});


userSchema.statics.list = function(sort,cb) {
    var query = User.find({});
    query.sort(sort);
    //query.skip(500);
    //query.limit(1);
    query.select('name age');
    return query.exec(function(err, rows) {
        if (err) {
            return cb(err);
        }
        return cb(null, rows);
    });
};

var User = mongoose.model('User', userSchema);
