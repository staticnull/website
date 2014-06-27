module.exports = {

  index: function(req, res){
    res.render('schedule', { title: 'Midwest JS | Schedule', scheduleActive: 'active' });
  }
};
