var mongoose = require('mongoose');
var connStr;

if (process.env.NODE_ENV == 'production') {
  connStr = process.env.MONGO_CONN
} else {
  connStr = 'mongodb://localhost/midwestjs'
}

var conn = mongoose.connect(connStr);

module.exports = conn;