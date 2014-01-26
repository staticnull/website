module.exports = {

  index: function(req, res){
    res.render('index', { title: 'MidwestJS', homeActive: 'active' });
  },

  sponsors: function(req, res){
    res.render('sponsors', { title: 'MidwestJS | Sponsors', sponsorsActive: 'active' });
  },

  tickets: function(req, res){
    res.render('tickets', { title: 'MidwestJS | Tickets', ticketsActive: 'active' });
  },

  contact: function(req, res){
    res.render('contact', { title: 'MidwestJS | Contact', contactActive: 'active' });
  }
};
