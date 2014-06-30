var Talk = require(APP_ROOT.join('models/talk'));
var talks = require(APP_ROOT.join('data/talks'));

module.exports = {

  index: function(req, res){
    res.render('schedule', { title: 'Midwest JS | Schedule', scheduleActive: 'active' });
  }
};
