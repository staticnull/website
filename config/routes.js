var fs = require('fs');

var controllers = {};
// require all controllers in the controllers directory
fs.readdirSync(APP_ROOT.join('controllers')).forEach(function(filename){
  controllers[filename.replace('-controller.js', '')] = require(APP_ROOT.join('controllers', filename));
});

module.exports = function(app) {
  app.get('/', controllers['main'].index);
  app.get('/speakers', controllers['speakers'].index);
  app.get('/speakers/review', controllers['speakers'].review);
//  app.get('/speakers/delete', controllers['speakers'].delete);
  app.get('/sponsors', controllers['main'].sponsors);
  app.get('/tickets', controllers['main'].tickets);
  app.get('/hotel', controllers['main'].hotel);
  app.get('/contact', controllers['main'].contact);
  app.get('/code-of-conduct', controllers['main'].codeOfConduct);
  app.get('/schedule', controllers['schedule'].index);

  app.use(function(req, res, next){
    res.status(404).render('404', {title: "Midwest JS | Page Not Found"});
  });
}
