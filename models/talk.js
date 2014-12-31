var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var TalkSchema = new Schema({
  fullName       : String,
  email          : String,
  twitter        : String,
  github         : String,
  photo          : String,
  employer       : String,
  bio            : String,
  tshirt         : String,
  reimbursement  : String,
  location       : String,
  talkTitle      : String,
  talkAbstract   : String,
  track          : String,
  other          : String,
  created        : Date
});

module.exports = mongoose.model('Talk', TalkSchema);
