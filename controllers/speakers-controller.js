module.exports = {

  index: function(req, res){
    res.render('speakers', { title: 'Midwest JS | Speakers', speakersActive: 'active' });
  },

  review: function(req, res){
    Talk.find(function (err, talks) {
      res.json(talks);
    });
  }
};
