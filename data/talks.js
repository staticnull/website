var fs = require('fs');
var marked = require('marked');

var talks = {
  other: [],
  keynotes: []
};

var folder = APP_ROOT.join('data/talk-abstracts');


// Add keynotes

addKeynote(new Speaker('Jeff Haynie'), new Talk('Titanium'));
addKeynote(new Speaker('Ritchie Martori', 'ritch', 'ritchiemartori'), new Talk('LoopBack'));

// Add talks

addOtherTalk(new Speaker('Aaron Eischeild', 'aeischeid', 'aeischeid'), [
  new Talk('JavaScript Promises in Depth'), new Talk('Testing JavaScript with Jasmine')
]);
addOtherTalk(new Speaker('Adam Bradley', 'adamdbradley', 'adamdbradley'), new Talk('Building Hybrid Apps with AngularJS and Ionic'));
addOtherTalk(new Speaker('Adam Grocholski', 'agrocholski', 'codel8r'), new Talk('Deploying Node.js to Azure'));
addOtherTalk(new Speaker('Alan Palazzolo', 'zzolo', 'zzolo'), new Talk('The MinnPost Stack'));
addOtherTalk(new Speaker('Alex Navasardyan', 'twokul', 'twokul'), new Talk('And Benchmarks For All!'));
addOtherTalk(new Speaker('Brad Marsh', 'dottertrotter', 'bbqhacker'), new Talk('Liger - Truly Hybrid App Development'));
addOtherTalk(new Speaker('Ryan Jarvinen', 'ryanjarvinen', 'ryanj'), [
  new Talk('Getting RESTless with MeteorJS'), new Talk('Full Stack Mobile with StrongLoop'), new Talk('Building with Javascript - featuring npm, grunt, bower, and yeoman')
]);
addOtherTalk(new Speaker('Kent C. Dodds', 'kentcdodds', 'kentcdodds'), new Talk('Improving Application UX with Genie.js'));
addOtherTalk(new Speaker('Chris Bartling', 'cebartling', 'cbartling'), new Talk('JavaScript Test-driven Development using Jasmine and Karma'));
addOtherTalk(new Speaker('Daniel Woods', 'danveloper', 'danveloper'), new Talk('Server-Side JavaScript with Nashorn'));
// Looks like the GitHub handle that was submitted does not work
addOtherTalk(new Speaker('Derek Anderson', 'toxigenicpoem', 'dmikeyanderson'), new Talk('EnyoJS - A Scalable Code Base'));
addOtherTalk(new Speaker('James Greene', 'JamesMGreene', '_JamesMGreene'), new Talk('The Art of Node - An Introduction to Node.js'));
addOtherTalk(new Speaker('John Culviner', 'johnculviner', 'johnculviner'), new Talk('Intro to Angular.js'));
addOtherTalk(new Speaker('John Paul', 'johnkpaul', 'johnkpaul'), new Talk('Ember Components Transclude My Directives'));
addOtherTalk(new Speaker('Jon DeJong', 'jondejong', 'jondejong'), new Talk('Combining D3 with AngularJS'));
addOtherTalk(new Speaker('Joshua Jensen', 'mintshrm', 'mintshrm'), new Talk('Running JavaScript Tasks with Grunt'));
addOtherTalk(new Speaker('Jonathan Sundquist', 'jsundquist', 'jsundquist'), new Talk('Let Knockout Knock Your Socks Off'));
addOtherTalk(new Speaker('Kassandra Perch', 'kperch', 'kassandra_perch'), new Talk('Why You Should Be Using The Flight framework'));
addOtherTalk(new Speaker('Kevin Whinnery', 'kwhinnery', 'kevinwhinnery'), new Talk('Flying Robots with the HTML 5 Gamepad API'));
addOtherTalk(new Speaker('Kristina Durivage', 'gelicia', 'gelicia'), new Talk('An Intro to Data Visualization with D3.js'));
addOtherTalk(new Speaker('Kurt Wiersma', 'kwiersma', 'kwiersma'), new Talk('Using TypeScript To Build Better JavaScript Apps'));
addOtherTalk(new Speaker('Marc Grabanski', '1Marc', '1Marc'), new Talk('Whirlwind Tour of Scalable Vector Graphics'));
addOtherTalk(new Speaker('Mark Stuart', 'mstuart', 'mark_stuart'), new Talk('Web Security in Single Page Apps and Node.js'));
addOtherTalk(new Speaker('Mike Frey', 'mikefrey', 'mikefrey'), new Talk('Promises, Generators and Callbacks! Oh my!'));
addOtherTalk(new Speaker('Monika Piotrowicz', 'mpiotrowicz', 'monsika'), new Talk('Accessibility is a Feature You Can Build - A Guided Tour to Demystify a11y Basics'));
addOtherTalk(new Speaker('Pam Selle', 'pselle', 'pamasaur'), new Talk('Zero to Testing in JavaScript'));
addOtherTalk(new Speaker('Ray Tiley', 'raytiley', 'raytiley'), new Talk('Building Apps With Ember.js'));
addOtherTalk(new Speaker('Shane Stillwell', 'shanestillwell', 'shanestillwell'), new Talk('Browserify - All The Things'));
addOtherTalk(new Speaker('Sony Seng', 'sonyseng', 'sonyseng'), new Talk('Introduction to Chrome Developer Tools'));
addOtherTalk(new Speaker('Stefan Penner', 'stefanpenner', 'stefanpenner'), new Talk('The Conventions Ember.js Provides To Make You Happy and Productive'));
addOtherTalk(new Speaker('Vince Bullinger', 'vbullinger', 'vbullinger'), [
  new Talk('Cross-Platform Mobile Development with the Appcelerator Framework'), new Talk('Cross-Platform Mobile Development with PhoneGap')
]);
addOtherTalk(new Speaker('Todd Gardner', 'toddhgardner', 'toddhgardner'), new Talk('Traces of Errors - Getting Better JavaScript Stacktraces'));
addOtherTalk(new Speaker('Trek Glowacki', 'trek', 'trek'), new Talk('Single Page Applications - the Web\'s Horseless Carriage'));
addOtherTalk(new Speaker('Will Buck & Zach Legein', 'willbuck', 'wbucksoft'), new Talk('Large Angular Projects - A Postmortem'));
addOtherTalk(new Speaker('Zach Lendon', 'zachlendon', 'zachlendon'), new Talk('Reconciling React as a View Layer Replacement'));
addOtherTalk(new Speaker('Zan Thrash', 'zanthash', 'zanthash'), new Talk('Angular Testing with Jasmine and Karma'));
addOtherTalk(new Speaker('Toran Billups', 'toranb', 'toranb'), new Talk('React-Routing-Lazy Loading and ES6'));

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
  return removeFileUnsafeChars(string.replace(/ /g, '-').replace(/\./g, '').replace(/\,/g, '').replace(/\!/g, '').replace(/\'/g, '')).toLowerCase();
}

function removeFileUnsafeChars(string) {
  return string.replace(/\[|\/|:|"|\*|\?|<|>|\||\]\+/g, '');
}

/*

 */