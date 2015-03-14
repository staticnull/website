var fs = require('fs');
var marked = require('marked');

var talks = {
  other: [],
  keynotes: []
};

var folder = APP_ROOT.join('data/talk-abstracts');


// Add keynotes

// addKeynote(new Speaker('Jeff Haynie'), new Talk('Titanium'));
// addKeynote(new Speaker('Shubhra Kar', 'ShubhraKar', 'ShubhraKar'), new Talk('LoopBack'));

// Add talks
// 2D-matrixing the schedule (1-indexed) hoping I can use it for schedule page
// addOtherTalk(new Speaker('Aaron Eischeild', 'aeischeid', 'aeischeid'), [
//   new Talk('JavaScript Promises in Depth', 1, 4), new Talk('Testing JavaScript with Jasmine', 8, 2)
// ]);
// addOtherTalk(new Speaker('Adam Bradley', 'adamdbradley', 'adamdbradley'), new Talk('Building Hybrid Apps with AngularJS and Ionic', 9, 3));
// addOtherTalk(new Speaker('Adam Grocholski', 'agrocholski', 'codel8r'), new Talk('Deploying Node.js to Azure', 5, 1));
// addOtherTalk(new Speaker('Alan Palazzolo', 'zzolo', 'zzolo'), new Talk('The MinnPost Stack', 3, 3));
// addOtherTalk(new Speaker('Alex Navasardyan', 'twokul', 'twokul'), new Talk('And Benchmarks For All!', 10, 2));
// addOtherTalk(new Speaker('Brad Marsh', 'dottertrotter', 'bbqhacker'), new Talk('Liger - Truly Hybrid App Development', 7, 3));
// addOtherTalk(new Speaker('Ryan Jarvinen', 'ryanjarvinen', 'ryanj'), [
//   new Talk('Getting RESTless with MeteorJS', 10, 1), new Talk('Full Stack Mobile with StrongLoop',0,1), new Talk('Building with Javascript - featuring npm, grunt, bower, and yeoman', 1, 3)
// ]);
// addOtherTalk(new Speaker('Kent C. Dodds', 'kentcdodds', 'kentcdodds'), new Talk('Improving Application UX with Genie.js', 8, 4));
// addOtherTalk(new Speaker('Chris Bartling', 'cebartling', 'cbartling'), new Talk('JavaScript Test-driven Development using Jasmine and Karma', 7, 2));
// addOtherTalk(new Speaker('Daniel Woods', 'danveloper', 'danveloper'), new Talk('Server-Side JavaScript with Nashorn', 2, 3));
// // Looks like the GitHub handle that was submitted does not work
// addOtherTalk(new Speaker('Derek Anderson', 'toxigenicpoem', 'dmikeyanderson'), new Talk('EnyoJS - A Scalable Code Base', 10, 3));
// addOtherTalk(new Speaker('James Greene', 'JamesMGreene', '_JamesMGreene'), new Talk('The Art of Node - An Introduction to Node.js', 1, 1));
// addOtherTalk(new Speaker('John Culviner', 'johnculviner', 'johnculviner'), new Talk('Intro to Angular.js', 1, 2));
// addOtherTalk(new Speaker('John Paul', 'johnkpaul', 'johnkpaul'), new Talk('Ember Components Transclude My Directives', 9, 1));
// addOtherTalk(new Speaker('Jon DeJong', 'jondejong', 'jondejong'), new Talk('Combining D3 with AngularJS', 9, 4));
// addOtherTalk(new Speaker('Joshua Jensen', 'mintshrm', 'mintshrm'), new Talk('Running JavaScript Tasks with Grunt', 5, 3));
// addOtherTalk(new Speaker('Jonathan Sundquist', 'jsundquist', 'jsundquist'), new Talk('Let Knockout Knock Your Socks Off', 7, 1));
// addOtherTalk(new Speaker('Kassandra Perch', 'kperch', 'kassandra_perch'), new Talk('Why You Should Be Using The Flight framework', 5, 2));
// addOtherTalk(new Speaker('Kevin Whinnery', 'kwhinnery', 'kevinwhinnery'), new Talk('Flying Robots with the HTML 5 Gamepad API', 4, 1));
// addOtherTalk(new Speaker('Kristina Durivage', 'gelicia', 'gelicia'), new Talk('An Intro to Data Visualization with D3.js', 4, 4));
// addOtherTalk(new Speaker('Kurt Wiersma', 'kwiersma', 'kwiersma'), new Talk('Using TypeScript To Build Better JavaScript Apps', 7, 4));
// addOtherTalk(new Speaker('Marc Grabanski', '1Marc', '1Marc'), new Talk('Whirlwind Tour of Scalable Vector Graphics', 5, 4));
// addOtherTalk(new Speaker('Mark Stuart', 'mstuart', 'mark_stuart'), new Talk('Web Security in Single Page Apps and Node.js', 3, 1));
// addOtherTalk(new Speaker('Mike Frey', 'mikefrey', 'mikefrey'), new Talk('Promises, Generators and Callbacks! Oh my!', 2, 1));
// addOtherTalk(new Speaker('Monika Piotrowicz', 'mpiotrowicz', 'monsika'), new Talk('Accessibility is a Feature You Can Build - A Guided Tour to Demystify a11y Basics', 4, 3));
// addOtherTalk(new Speaker('Pam Selle', 'pselle', 'pamasaur'), new Talk('Zero to Testing in JavaScript', 6, 2));
// addOtherTalk(new Speaker('Ray Tiley', 'raytiley', 'raytiley'), new Talk('Building Apps With Ember.js', 4, 2));
// addOtherTalk(new Speaker('Shane Stillwell', 'shanestillwell', 'shanestillwell'), new Talk('Browserify - All The Things', 3, 4));
// addOtherTalk(new Speaker('Sony Seng', 'sonyseng', 'sonyseng'), new Talk('Introduction to Chrome Developer Tools', 2, 4));
// addOtherTalk(new Speaker('Stefan Penner', 'stefanpenner', 'stefanpenner'), new Talk('The Conventions Ember.js Provides To Make You Happy and Productive', 2, 2));
// addOtherTalk(new Speaker('Vince Bullinger', 'vbullinger', 'vbullinger'), [
//   new Talk('Cross-Platform Mobile Development with the Appcelerator Framework', 8, 3), new Talk('Cross-Platform Mobile Development with PhoneGap', 6, 3)
// ]);
// addOtherTalk(new Speaker('Todd Gardner', 'toddhgardner', 'toddhgardner'), new Talk('Traces of Errors - Getting Better JavaScript Stacktraces', 9, 2));
// addOtherTalk(new Speaker('Trek Glowacki', 'trek', 'trek'), new Talk('Single Page Applications - the Web\'s Horseless Carriage', 6, 4));
// addOtherTalk(new Speaker('Will Buck', 'willbuck', 'wbucksoft'), new Talk('Large Angular Projects - A Postmortem', 8, 1));
// addOtherTalk(new Speaker('Zach Lendon', 'zachlendon', 'zachlendon'), new Talk('Reconciling React as a View Layer Replacement', 6, 1));
// addOtherTalk(new Speaker('Zan Thrash', 'zanthash', 'zanthash'), new Talk('Angular Testing with Jasmine and Karma', 3, 2));
// addOtherTalk(new Speaker('Toran Billups', 'toranb', 'toranb'), new Talk('React-Routing-Lazy Loading and ES6', 10, 4));

addOtherTalk(new Speaker('Adam Ranfelt', 'adamRenny', 'adamRenny'), new Talk('Applying JavaScript Promises: Asynchronous Honesty', 8, 4));
addOtherTalk(new Speaker('Amos Kyler', 'amoskyler', 'aokyler'), new Talk('Optimizing Data Workflows in React', 5, 2));
addOtherTalk(new Speaker('Aziz Ali', 'azizali', 'heyaziz'), new Talk('Getting Confident & Comfortable with Node.js', 1, 1));
addOtherTalk(new Speaker('Bonnie Eisenman', 'bonniee', 'brindelle'), new Talk('Effective Tooling with React.js', 10, 1));
addOtherTalk(new Speaker('Brad Marsh', 'dottertrotter', 'bbqhacker'), new Talk('React.js - When, Where and How to Use It', 3, 2));
addOtherTalk(new Speaker('Branden Byers', 'brndnb', 'brandenbyers'), new Talk('Test Them Puzzles: What Test-Driven Learning Can Teach About JS and TDD', 8, 2));
addOtherTalk(new Speaker('Chuck Rolek', 'crolek', 'crolek'), new Talk('Sailsjs, making Nodejs backends a breeze', 4, 1));
addOtherTalk(new Speaker('Dan Callahan', 'callahad', 'callahad'), new Talk('Developing for Firefox OS: It\'s just the web... or is it?', 9, 3));
addOtherTalk(new Speaker('Eric Ponto', 'ericponto', 'ericponto'), new Talk('Bacon.js for Breakfast: An intro to functional reactive progamming', 5, 4));
addOtherTalk(new Speaker('Ethan Jewett', 'esjewett', 'esjewett'), new Talk('Interactive, browser-based data visualization with Crossfilter', 3, 4));
addOtherTalk(new Speaker('Jeremy Lund', 'lund0n', 'Jeremy_Lund'), new Talk('Adventures in Test-Driven Development', 10, 2));
addOtherTalk(new Speaker('Jon DeJong', 'jondejong', 'jondejong'), new Talk('Building Custom Directives in AngularJS', 7, 1));
addOtherTalk(new Speaker('Jonah Stiennon', 'jonahss', 'TinyTimZamboni'), new Talk('An Introduction to Appium, Test Automation for Mobile', 7, 2));
addOtherTalk(new Speaker('Jordan Kasper', 'jakerella', 'jakerella'), new Talk('That\'s so prototypical', 4, 3));
addOtherTalk(new Speaker('Jordan Kasper', 'jakerella', 'jakerella'), new Talk('Triage, Diagnose, and Scale Node.js', 3, 1));
addOtherTalk(new Speaker('Josh Longanecker', 'joshofthewest', 'joshlovesdesign'), new Talk('Better debugging in Chrome', 3, 3));
addOtherTalk(new Speaker('Ken Dale', 'kendaleiv', 'kendaleiv'), new Talk('Writing Better jQuery Infused JavaScript', 1, 3));
addOtherTalk(new Speaker('Kent Dodds', 'kentcdodds', 'kentcdodds'), new Talk('Angular-Formly: Abstracting Away Complexity', 2, 2));
addOtherTalk(new Speaker('Kevin Moot', 'kcmoot', 'kcmoot'), new Talk('WebGL: A New Frontier for 3D Mobile Graphics', 10, 3));
addOtherTalk(new Speaker('Kevin Whinnery', 'kwhinnery', 'kevinwhinnery'), new Talk('The Best of the Web For Native Apps', 6, 3));
addOtherTalk(new Speaker('Kris Kowal', 'kriskowal', 'kriskowal'), new Talk('A General Theory of Reactivity', 2, 4));
addOtherTalk(new Speaker('Kristina Durivage', 'gelicia', 'gelicia'), new Talk('Hardware and Javascript', 5, 1));
addOtherTalk(new Speaker('Mark Volkmann', 'mvolkmann', 'mark_volkmann'), new Talk('ES6: Too Much Goodness to Wait!', 1, 4));
addOtherTalk(new Speaker('Matt Zabriskie', 'mzabriskie', 'mzabriskie'), new Talk('Intro to React', 6, 1));
addOtherTalk(new Speaker('Nick Heiner', 'nickheiner', 'nickheiner'), new Talk('DIY Programming Language', 9, 4));
addOtherTalk(new Speaker('Nick Tomlin', 'nicktomlin', 'itsnicktomlin'), new Talk('TDD: The Hard Parts', 6, 2));
addOtherTalk(new Speaker('Pete Hodgson', 'moredip', 'ph1'), new Talk('Theory and Practice of Functional Reactive Javascript', 4, 4));
addOtherTalk(new Speaker('Ryan Anklam', 'bittersweetryan', 'bittersweetryan'), new Talk('Modern UI Development With Node.js', 2, 1));
addOtherTalk(new Speaker('Ryan Glover', 'themeteorchef', 'rglover'), new Talk('Meteor: Superpowers for JavaScript Developers', 1, 2));
addOtherTalk(new Speaker('Scott Silvi', 'scottsilvi', 'scottsilvi'), new Talk('Introduction to Modular / Component Architecture', 5, 3));
addOtherTalk(new Speaker('Stefan Penner', 'stefanpenner', 'stefanpenner'), new Talk('Ember.js: Always be ship\'n', 9, 1));
addOtherTalk(new Speaker('Tessa Thornton', 'tessalt', 'tessthornton'), new Talk('Components are the future of the web: it\'s going to be okay.', 2, 3));
addOtherTalk(new Speaker('TJ VanToll', 'tjvantoll', 'tjvantoll'), new Talk('Introducing NativeScript', 8, 3));
addOtherTalk(new Speaker('Toran Billups', 'toranb', 'toranb'), new Talk('Writing your own identity map for Ember.js', 4, 2));
addOtherTalk(new Speaker('Tyler Gaw', 'tylergaw', 'thegaw'), new Talk('Building OS X Apps with JavaScript', 7, 4));
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

/*

 */
