var Talk = require(APP_ROOT.join('models/talk'));

module.exports = {

  index: function(req, res){
    res.render('speakers', { title: 'MidwestJS | Speakers', speakersActive: 'active' });
  },

  create: function(req, res) {
    var fullName = req.body.fullName;
    var email = req.body.email;
    var twitter = req.body.twitter;
    var github = req.body.github;
    var talkTitle = req.body.talkTitle;
    var talkAbstract = req.body.talkAbstract;
    var track = req.body.track;
    var other = req.body.other;
    console.log('Name: ' + fullName);
    console.log('Email: ' + email);
    console.log('Twitter: ' + twitter);
    console.log('GitHub: ' + github);
    console.log('Talk Title: ' + talkTitle);
    console.log('Talk Abstract: ' + talkAbstract);
    console.log('Track: ' + track);
    console.log('Other: ' + other);

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
    res.render('confirmation', { title: 'MidwestJS | Confirmation', speakersActive: 'active' });
  }
};
