var Talk = require(APP_ROOT.join('models/talk'));
var talks = require(APP_ROOT.join('data/talks'));

var groupedTalks = {
  keynotes: splitIntoGroups(talks.keynotes, 2),
  other: splitIntoGroups(talks.other, 3)
};

function splitIntoGroups(arry, size) {
  var totalGroups = Math.ceil(arry.length / size);
  var group = [];
  for (var i = 0; i < totalGroups; i++) {
    var talkGroup = arry.slice(i * size, (i + 1) * size);
    group.push(talkGroup);
  }
  return group;
}

module.exports = {

  index: function(req, res){
    res.render('speakers', { title: 'Midwest JS | Speakers', speakersActive: 'active', talks: groupedTalks });
  },

  create: function(req, res) {
    (new Talk(req.body)).save(function(err){
      if (err) {
        console.log(err);
      }
      res.redirect('/speakers/confirmation');
    });
  },

  review: function(req, res){
    Talk.find(function (err, talks) {
      res.json(talks);
    });
  },

//  delete: function(req, res){
//    Talk.collection.remove( function(err) {
//      if (err) {
//        console.log(err);
//      }
//    });
//    res.render('delete');
//  },

  confirmation: function(req, res){
    res.render('confirmation', { title: 'Midwest JS | Confirmation', speakersActive: 'active' });
  }
};
