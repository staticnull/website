var Talk = require(APP_ROOT.join('models/talk'));

module.exports = {

  index: function(req, res){
    res.render('speakers', { title: 'Midwest JS | Speakers', speakersActive: 'active' });
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
