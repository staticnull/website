var fs = require('fs');
var marked = require('marked');

var talks = {
  other: [],
  keynotes: []
};

var folder = APP_ROOT.join('data/talk-abstracts');


// Add keynotes

addKeynote(new Speaker('Venkat Subramaniam', 'venkats', 'venkat_s'), new Talk('Opening Keynote'));

// Add talks

addOtherTalk(new Speaker('Adam Ranfelt', 'adamRenny', 'adamRenny'), new Talk('Applying JavaScript Promises: Asynchronous Honesty', 8, 4));
addOtherTalk(new Speaker('Amos Kyler', 'amoskyler', 'aokyler'), new Talk('Optimizing Data Workflows in React', 5, 2));
addOtherTalk(new Speaker('Aziz Ali', 'azizali', 'heyaziz'), new Talk('Getting Confident and Comfortable with Node.js', 1, 1));
addOtherTalk(new Speaker('Bonnie Eisenman', 'bonniee', 'brindelle'), new Talk('Effective Tooling with React.js', 10, 1));
addOtherTalk(new Speaker('Brad Marsh', 'dottertrotter', 'bbqhacker'), new Talk('React.js - When, Where and How to Use It', 3, 2));
addOtherTalk(new Speaker('Branden Byers', 'brndnb', 'brandenbyers'), new Talk('Test Them Puzzles: What Test-Driven Learning Can Teach About JS and TDD', 8, 2));
addOtherTalk(new Speaker('Chuck Rolek', 'crolek', 'crolek'), new Talk('Sailsjs, making Nodejs backends a breeze', 4, 1));
addOtherTalk(new Speaker('Dan Callahan', 'callahad', 'callahad'), new Talk('Developing for Firefox OS: It\'s just the web... or is it?', 9, 3));
addOtherTalk(new Speaker('Eric Ponto', 'ericponto', 'ericponto'), new Talk('Bacon.js for Breakfast: An intro to functional reactive progamming', 5, 4));
addOtherTalk(new Speaker('Ethan Jewett', 'esjewett', 'esjewett'), new Talk('Interactive, browser-based data visualization with Crossfilter', 3, 4));
addOtherTalk(new Speaker('Jeremy Lund', 'lund0n', 'Jeremy_Lund'), new Talk('Adventures in Test-Driven Development', 10, 2));
addOtherTalk(new Speaker('Jon DeJong', 'jondejong', 'jondejong'), new Talk('Building Custom Directives in AngularJS', 7, 1));
addOtherTalk(new Speaker('Jonah Stiennon', 'jonahss', 'TinyTimZamboni'), new Talk('An Introduction to Appium, Test Automation for Mobile', 6, 3));
addOtherTalk(new Speaker('Jordan Kasper', 'jakerella', 'jakerella'), [
  new Talk('That\'s so prototypical', 5, 3), new Talk('Triage, Diagnose, and Scale Node.js', 2, 1)
]);
addOtherTalk(new Speaker('Josh Longanecker', 'joshofthewest', 'joshlovesdesign'), new Talk('Better debugging in Chrome', 3, 3));
addOtherTalk(new Speaker('Ken Dale', 'kendaleiv', 'kendaleiv'), new Talk('Writing Better jQuery Infused JavaScript', 1, 3));
addOtherTalk(new Speaker('Kent C. Dodds', 'kentcdodds', 'kentcdodds'), new Talk('Angular-Formly: Abstracting Away Complexity', 2, 2));
addOtherTalk(new Speaker('Kevin Moot', 'kcmoot', 'kcmoot'), new Talk('WebGL: A New Frontier for 3D Mobile Graphics', 10, 3));
addOtherTalk(new Speaker('Kris Kowal', 'kriskowal', 'kriskowal'), new Talk('A General Theory of Reactivity', 2, 4));
addOtherTalk(new Speaker('Kristina Durivage', 'gelicia', 'gelicia'), new Talk('Hardware and Javascript', 5, 1));
addOtherTalk(new Speaker('Mark Volkmann', 'mvolkmann', 'mark_volkmann'), new Talk('ES6: Too Much Goodness to Wait!', 1, 4));
addOtherTalk(new Speaker('Matt Zabriskie', 'mzabriskie', 'mzabriskie'), new Talk('Intro to React', 6, 1));
addOtherTalk(new Speaker('Nick Heiner', 'nickheiner', 'nickheiner'), new Talk('DIY Programming Language', 9, 4));
addOtherTalk(new Speaker('Nick Tomlin', 'nicktomlin', 'itsnicktomlin'), new Talk('TDD: The Hard Parts', 6, 2));
addOtherTalk(new Speaker('Pete Hodgson', 'moredip', 'ph1'), new Talk('Theory and Practice of Functional Reactive Javascript', 4, 4));
addOtherTalk(new Speaker('Ryan Anklam', 'bittersweetryan', 'bittersweetryan'), new Talk('Modern UI Development With Node.js', 3, 1));
addOtherTalk(new Speaker('Ryan Glover', 'themeteorchef', 'rglover'), new Talk('Meteor: Superpowers for JavaScript Developers', 1, 2));
addOtherTalk(new Speaker('Erik Onarheim', 'eonarheim', 'ErikOnarheim'), new Talk('HTML5: All Your Games Are Belong to Us', 4, 3));
addOtherTalk(new Speaker('Stefan Penner', 'stefanpenner', 'stefanpenner'), new Talk('Ember.js: Always be ship\'n', 9, 1));
addOtherTalk(new Speaker('Tessa Thornton', 'tessalt', 'tessthornton'), new Talk('Components are the future of the web: it\'s going to be okay.', 2, 3));
addOtherTalk(new Speaker('TJ VanToll', 'tjvantoll', 'tjvantoll'), new Talk('Introducing NativeScript', 8, 3));
addOtherTalk(new Speaker('Toran Billups', 'toranb', 'toranb'), new Talk('Writing your own identity map for Ember.js', 4, 2));
addOtherTalk(new Speaker('Tyler Gaw', 'tylergaw', 'thegaw'), new Talk('Building OS X Apps with JavaScript', 7, 4));
addOtherTalk(new Speaker('Venkat Subramaniam', 'venkats', 'venkat_s'), new Talk('Automated testing tools and techniques for JavaScript', 7, 2));
addOtherTalk(new Speaker('Vince Bullinger', 'vbullinger', 'vbullinger'), new Talk('Reapp - A React Framework for Building Hybrid Mobile Apps', 7, 3));
addOtherTalk(new Speaker('Will Buck', 'willbuck', 'wbucksoft'), new Talk('Check Your Angles and Angulars with Protractor', 9, 2));
addOtherTalk(new Speaker('Zach Legein', 'zlegein', 'zlegein'), new Talk('Thunderdome with Gulp, Grunt and NPM', 10, 4));
addOtherTalk(new Speaker('Zan Thrash', 'zanthrash', 'zanthrash'), new Talk('Intro to RxJS', 6, 4));
addOtherTalk(new Speaker('Zeno Rocha', 'zenorocha', 'zenorocha'), new Talk('Web Components: Is this the future of Web Development?', 8, 1));


talks.other.sort(alphabatizeBySpeaker);
// TODO is this where I want to add the 2d-array stuff perhaps? or am I doing finders on the jade template? or what? no idea yet

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

// HACKSAUCE 1-indexed 2D matrix for the timeslots and rooms
// timeslots
// day 1 - 8/14/14 - 1 == 10:30am, 2 == 11:30am, 3 == 01:30pm, 4 == 2:30pm, 5 == 4:00pm)
// day 2 - 8/15/14 - 6 == 09:00am, 7 == 10:30am, 8 == 11:30am, 9 == 1:30pm, 10 == 2:30pm)
// rooms
// 1 == auditorium, 2 == Rm127, 3 == Law235, 4 == Law238
function Talk(title, timeslot, room) {
  var abstract = '';
  var path = folder + '/' + filenamify(title) + '.md';
  try {
    abstract = fs.readFileSync(path, 'utf8')
  } catch(e) {
    console.warn('No talk abstract at path: ' + path);
  }
  this.title = title;
  this.abstractHtml = marked(abstract);
  this.timeslot = timeslot;
  this.room = room;
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
