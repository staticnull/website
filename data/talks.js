var fs = require('fs');
var marked = require('marked');

var talks = {
  other: [],
  keynotes: []
};

var folder = APP_ROOT.join('data/talk-abstracts');


// Add keynotes

addKeynote(new Speaker('Jeff Heynie'), new Talk('Appcelerator'));
addKeynote(new Speaker('Ritchie Martori'), new Talk('StrongLoop'));

// Add talks

addOtherTalk(new Speaker('Aaron Eischeild'), [
  new Talk('JavaScript Promises in Depth'), new Talk('Testing JavaScript with Jasmine')
]);
addOtherTalk(new Speaker('Adam Bradley'), new Talk('Building Hybrid Apps with AngularJS and Ionic'));
addOtherTalk(new Speaker('Adam Grocholski'), new Talk('Deploying Node.js to Azure'));
addOtherTalk(new Speaker('Alan Palazzolo'), new Talk('The MinnPost Stack'));
addOtherTalk(new Speaker('Alex Navasardyan'), new Talk('And benchmarks for all!'));
addOtherTalk(new Speaker('Brad Marsh'), new Talk('Liger - Truly Hybrid App Development'));
addOtherTalk(new Speaker('Ryan Jarvinen'), new Talk('Getting RESTless with MeteorJS'));
addOtherTalk(new Speaker('Kent C. Dodds', 'kentcdodds', 'kentcdodds'), new Talk('Improving Application UX with Genie.js'));
addOtherTalk(new Speaker('Chris Bartling'), new Talk('JavaScript Test-driven Development using Jasmine and Karma'));
addOtherTalk(new Speaker('Daniel Woods'), new Talk('Server-Side JavaScript with Nashorn'));
addOtherTalk(new Speaker('Derek Anderson'), new Talk('EnyoJS: A Scalable Code Base'));
addOtherTalk(new Speaker('James Greene'), new Talk('The Art of Node: An Introduction to Node.js'));
addOtherTalk(new Speaker('John Culviner'), new Talk('Intro to Angular.js'));
addOtherTalk(new Speaker('John Paul'), new Talk('Ember Components Transclude My Directives'));
addOtherTalk(new Speaker('Jon DeJong'), new Talk('Combining D3 with AngularJS'));
addOtherTalk(new Speaker('Jonathan Sundquist'), new Talk('Let Knockout Knock Your Socks Off'));
addOtherTalk(new Speaker('Kassandra Perch'), new Talk('Why You Should Be Using The Flight framework'));
addOtherTalk(new Speaker('Kristina Durivage'), new Talk('An Intro to Data Visualization with D3.js'));
addOtherTalk(new Speaker('Kurt Wiersma'), new Talk('Using TypeScript To Build Better JavaScript Apps'));
addOtherTalk(new Speaker('Marc Grabanski'), new Talk('Whirlwind Tour of Scalable Vector Graphics'));
addOtherTalk(new Speaker('Mark Stuart'), new Talk('Web Security in Single Page Apps and Node.js'));
addOtherTalk(new Speaker('Mike Frey'), new Talk('Promises, Generators and Callbacks! Oh my!'));
addOtherTalk(new Speaker('Monika Piotrowicz'), new Talk('Accessibility is a Feature You Can Build - A Guided Tour to Demystify a11y Basics'));
addOtherTalk(new Speaker('Pam Selle'), new Talk('Zero to Testing in JavaScript'));
addOtherTalk(new Speaker('Ray Tiley'), new Talk('Building Apps With Ember.js'));
addOtherTalk(new Speaker('Sony Seng'), new Talk('Introduction to Chrome Developer Tools'));
addOtherTalk(new Speaker('Stefan Penner'), new Talk('The Conventions Ember.js Provides To Make You Happy and Productive'));
addOtherTalk(new Speaker('Vince Bullinger'), [
  new Talk('Cross-Platform Mobile Development with the Appcelerator Framework'), new Talk('Cross-Platform Mobile Development with PhoneGap')
]);
addOtherTalk(new Speaker('Todd Gardner'), new Talk('Traces of Errors: Getting Better JavaScript Stacktraces'));
addOtherTalk(new Speaker('Trek Glowacki'), new Talk('Single Page Applications: the Web\'s Horseless Carriage'));
addOtherTalk(new Speaker('Will Buck & Zach Legein'), new Talk('Large Angular Projects - A Postmortem'));
addOtherTalk(new Speaker('Zach Lendon'), new Talk('Reconciling React as a View Layer Replacement'));
addOtherTalk(new Speaker('Zan Thrash'), new Talk('Angular Testing with Jasmine and Karma'));

talks.other.sort(alphabatizeBySpeaker);

function alphabatizeBySpeaker(a,b) {
  if (a.speaker.name < b.speaker.name)
    return -1;
  if (a.speaker.name > b.speaker.name)
    return 1;
  return 0;
}


// export items
module.exports = talks;


// FUNCTIONS
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function getId() {
  return s4() + s4() + '-' + s4() + '-' + s4();
}

function addItem(type, speaker, theTalks) {
  talks[type].push({
    speaker: speaker,
    talks: arrayify(theTalks)
  });
}

function addOtherTalk(speakers, talks) {
  addItem('other', speakers, talks);
}

function addKeynote(name, talks) {
  addItem('keynotes', name, talks);
}

function Speaker(name, github, twitter, image) {
  this.name = name;
  this.github = github;
  this.twitter = twitter;
  var theImage = image || '/images/speakers/' + filenamify(name) + '.jpg';
  var imageExists = fs.existsSync(APP_ROOT.join('public/' + theImage));
  if (!imageExists) {
    console.warn('No image for ' + theImage);
    theImage = '/images/midwestjs-logo-200.png';
  }
  this.image = theImage;
}

function Talk(title) {
  var abstract = '';
  var path = folder + '/' + filenamify(title) + '.md';
  try {
    abstract = fs.readFileSync(path, 'utf8')
  } catch(e) {
    console.warn('No talk abstract at path: ' + path);
  }
  this.title = title;
  this.abstractHtml = marked(abstract);
  this.uniqueId = getId();
}

function arrayify(item) {
  if (!Array.isArray(item)) {
    item = [item];
  }
  return item;
}

function filenamify(string) {
  return removeFileUnsafeChars(string.replace(/ /g, '-').replace(/\./g, '')).toLowerCase();
}

function removeFileUnsafeChars(string) {
  return string.replace(/\[|\/|:|"|\*|\?|<|>|\||\]\+/g, '');
}

/*

 */