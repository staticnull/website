var Feedback = require(APP_ROOT.join('models/feedback'));

function Talk(speaker, title) {
  this.speaker = speaker;
  this.title = title;
}

var talks = [];

talks.push(new Talk('Venkat Subramaniam', 'Keynote: The Art of Simplicity'));
talks.push(new Talk('Jon DeJong', 'Keynote: The Current State of JavaScript'));
talks.push(new Talk('Bruce Coddington and Michael Kelly','Workshop: React.js'));
talks.push(new Talk('Kevin Bosak and Travis Martensen', 'Workshop: Angular.js'));
talks.push(new Talk('Kent C. Dodds', 'Workshop: ECMAScript 6'));
talks.push(new Talk('Sequoia McDowell', 'Workshop: Node.js'));
talks.push(new Talk('Adam Ranfelt', 'Applying JavaScript Promises: Asynchronous Honesty'));
talks.push(new Talk('Amos Kyler', 'Optimizing Data Workflows in React'));
talks.push(new Talk('Aziz Ali', 'Getting Confident and Comfortable with Node.js'));
talks.push(new Talk('Bonnie Eisenman', 'Effective Tooling with React.js'));
talks.push(new Talk('Brad Marsh', 'React.js - When, Where and How to Use It'));
talks.push(new Talk('Branden Byers', 'Test Them Puzzles: What Test-Driven Learning Can Teach About JS and TDD'));
talks.push(new Talk('Chuck Rolek', 'Sailsjs, making Nodejs backends a breeze'));
talks.push(new Talk('Dan Callahan', 'Developing for Firefox OS: It\'s just the web... or is it?'));
talks.push(new Talk('Eric Ponto', 'Bacon.js for Breakfast: An intro to functional reactive programming'));
talks.push(new Talk('Ethan Jewett', 'Interactive, browser-based data visualization with Crossfilter'));
talks.push(new Talk('Jeremy Lund', 'Adventures in Test-Driven Development'));
talks.push(new Talk('Jon DeJong', 'Building Custom Directives in AngularJS'));
talks.push(new Talk('Jonah Stiennon', 'An Introduction to Appium, Test Automation for Mobile'));
talks.push(new Talk('Jordan Kasper', 'That\'s so prototypical'));
talks.push(new Talk('Jordan Kasper', 'Triage, Diagnose, and Scale Node.js'));
talks.push(new Talk('Josh Longanecker', 'Better debugging in Chrome'));
talks.push(new Talk('Ken Dale', 'Writing Better jQuery Infused JavaScript'));
talks.push(new Talk('Kent C. Dodds', 'Angular-Formly: Abstracting Away Complexity'));
talks.push(new Talk('Kevin Moot', 'WebGL: A New Frontier for 3D Mobile Graphics'));
talks.push(new Talk('Kris Kowal', 'A General Theory of Reactivity'));
talks.push(new Talk('Kristina Durivage', 'Hardware and Javascript'));
talks.push(new Talk('Mark Volkmann', 'ES6: Too Much Goodness to Wait!'));
talks.push(new Talk('Matt Zabriskie', 'Intro to React'));
talks.push(new Talk('Nick Heiner', 'DIY Programming Language'));
talks.push(new Talk('Nick Tomlin', 'TDD: The Hard Parts'));
talks.push(new Talk('Pete Hodgson', 'Theory and Practice of Functional Reactive Javascript'));
talks.push(new Talk('Ryan Anklam', 'Modern UI Development With Node.js'));
talks.push(new Talk('Ryan Glover', 'Meteor: Superpowers for JavaScript Developers'));
talks.push(new Talk('Erik Onarheim', 'HTML5: All Your Games Are Belong to Us'));
talks.push(new Talk('Tessa Thornton', 'Components are the future of the web: it\'s going to be okay.'));
talks.push(new Talk('David Washington', 'Building Web Touch Experiences That Don\'t Suck'));
talks.push(new Talk('Toran Billups', 'Writing your own identity map for Ember.js'));
talks.push(new Talk('Todd Gardner', 'JavaScript Forensics'));
talks.push(new Talk('Tyler Gaw', 'Building OS X Apps with JavaScript'));
talks.push(new Talk('Venkat Subramaniam', 'Automated testing tools and techniques for JavaScript'));
talks.push(new Talk('Will Buck', 'Check Your Angles and Angulars with Protractor'));
talks.push(new Talk('Zach Legein', 'Thunderdome with Gulp, Grunt and NPM'));
talks.push(new Talk('Benjamin Malley', 'Interactive Data Visualization with D3 and React'));
talks.push(new Talk('Kurt Wiersma', 'Enterprise JavaScript apps with TypeScript'));
talks.push(new Talk('David Giard', 'Edge of Tomorrow: Introducing Microsoft\'s new browser'));

talks.sort(alphabatizeByTitle);

function alphabatizeByTitle(a,b) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}

module.exports = {

  index: function(req, res){
    res.render('feedback', { title: 'Midwest JS | Feedback', talks: talks });
  },

  create: function(req, res) {
    (new Feedback(req.body)).save(function(err) {
      if (err) {
        console.log(err);
      }
    });

    res.redirect('/feedback/confirmation');
  },

  confirmation: function(req, res){
    res.render('confirmation', { title: 'Midwest JS | Confirmation' });
  }
};
