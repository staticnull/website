var mongoose = require('mongoose');
var connStr = 'mongodb://localhost/midwestjs'
var conn = mongoose.connect(connStr);
module.exports = conn;
