var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var FeedbackSchema = new Schema({
  fullName       : String,
  talk           : String,
  speaker        : String,
  reviewTalk     : String,
  reviewSpeaker  : String,
  rating         : String,
  created        : Date
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
