var Talk = require(APP_ROOT.join('models/talk'));
var nodemailer = require("nodemailer");
var _jade = require('jade');
var fs = require('fs');

var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "****@gmail.com",
        pass: "****"
    }
});

var sendMail = function(toAddress, content, next){
    var mailOptions = {
        to : toAddress,
        from : 'Midwest JS <no-reply@midwestjs.com>',
        replyTo : 'no-reply@midwestjs.com',
        bcc : 'bobbywarner@gmail.com',
        subject : "Midwest JS Speaker Submission",
        html: content
    };

    smtpTransport.sendMail(mailOptions, next);
};

module.exports = {

  index: function(req, res){
    res.render('speakers', { title: 'Midwest JS | Speakers', speakersActive: 'active' });
  },

  create: function(req, res) {
    (new Talk(req.body)).save(function(err) {
      if (err) {
        console.log(err);
      }

      var template = process.cwd() + '/views/emails/submission.jade';
      fs.readFile(template, 'utf8', function(err, file) {
        if (err) {
          console.log('ERROR!');
          return res.send('ERROR!');
        } else {
          var compiledTmpl = _jade.compile(file, {filename: template});
          var context = {
            fullName: req.param('fullName'),
            talkTitle: req.param('talkTitle'),
            talkAbstract: req.param('talkAbstract')
          };
          var html = compiledTmpl(context);

          sendMail(req.param('email'), html, function(err, response) {
            if (err){
              console.log('ERROR!');
              return res.send('ERROR');
            }
            res.redirect('/speakers/confirmation');
          });
        }
      });
    });
  },

  review: function(req, res){
    Talk.find(function (err, talks) {
      res.json(talks);
    });
  },

  confirmation: function(req, res){
    res.render('confirmation', { title: 'Midwest JS | Confirmation', speakersActive: 'active' });
  }
};
