var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var TalkSchema = new Schema({
  fullName     : String,
  email        : String,
  twitter      : String,
  github       : String,
  talkTitle    : String,
  talkAbstract : String,
  track        : String,
  other        : String,
  created      : Date
});

module.exports = mongoose.model('Talk', TalkSchema);
