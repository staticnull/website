module.exports = {

  index: function(req, res){
    res.render('index', { title: 'Midwest JS', homeActive: 'active' });
  },

  sponsors: function(req, res){
    res.render('sponsors', { title: 'Midwest JS | Sponsors', sponsorsActive: 'active' });
  },

  tickets: function(req, res){
    res.render('tickets', { title: 'Midwest JS | Tickets', ticketsActive: 'active' });
  },

  contact: function(req, res){
    res.render('contact', { title: 'Midwest JS | Contact', contactActive: 'active' });
  }
};
