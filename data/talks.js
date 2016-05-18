var fs = require('fs');
var marked = require('marked');

var talks = {
  other: [],
  workshop: [],
  keynotes: []
};

var folder = APP_ROOT.join('data/talk-abstracts');


// Add keynotes

addKeynote(new Speaker('Douglas Crockford', 'douglascrockford', ''), new Talk('Opening Keynote'));

// Add workshops

addWorkshop(new Speaker('Jon DeJong', 'jondejong', 'jondejong'), new Talk('Angular 2'));
addWorkshop(new Speaker('Matt Zabriskie', 'mzabriskie', 'mzabriskie'), new Talk('React'));
addWorkshop(new Speaker('Kent C. Dodds', 'kentcdodds', 'kentcdodds'), new Talk('React'));
addWorkshop(new Speaker('Sequoia McDowell', 'Sequoia', '_sequoia'), new Talk('Node.js'));
addWorkshop(new Speaker('Wyatt Lyon Preul', 'geek', 'wpreul'), new Talk('Developing Node.js Microservices'));
addWorkshop(new Speaker('Lloyd Benson', 'lloydbenson', 'LloydWith2Ls'), new Talk('Developing Node.js Microservices'));

// Add talks

addOtherTalk(new Speaker('Safia Abdalla', 'captainsafia', 'captainsafia'), new Talk('A Guide to All Things Memory in JavaScript', 5, 3));
addOtherTalk(new Speaker('Gabrielle Crevecoeur', 'gcrev93', 'nowayshecodes'), [
    new Talk('Level up from Hardware Noob to Hardware Node ', 5, 2), new Talk('The True Powers of JavaScript: Beyond The Basics', 1, 3)
]);
addOtherTalk(new Speaker('Aaron Ackerman', 'aackerman', '_aaronackerman_'), new Talk('JavaScript Flow', 3, 3));
addOtherTalk(new Speaker('Ken Dale', 'kendaleiv', 'kendaleiv'), new Talk('Components and More: Effective Angular 2 Testing Strategies', 7, 2));
addOtherTalk(new Speaker('Raymond Camden', 'cfjedimaster', 'raymondcamden'), [
    new Talk('Rapidly developing APIs with StrongLoop', 2, 2), new Talk('What they didn\'t tell you about Cordova', 7, 3)
]);
addOtherTalk(new Speaker('Sarah Etter', 'sarahetter', 'SarahEtter_'), new Talk('Bringing Web Development to the Physical World', 7, 4));
addOtherTalk(new Speaker('Stacy Kirk', 'QualityWorksCG', 'queenofagileqa'), new Talk('Full Stack Testing of NodeJS Applications', 10, 2));
addOtherTalk(new Speaker('Mark Volkmann', 'mvolkmann', 'mark_volkmann'), new Talk('React - Say No to Complexity', 2, 1));
addOtherTalk(new Speaker('Kirsten Hunter', 'synedra', 'syndra'), new Talk('Quantifying your Fitness', 9, 4));
addOtherTalk(new Speaker('Randall Koutnik', 'SomeKittens', 'rkoutnik'), new Talk('What are Observables and Why Should I Care?', 10, 4));
addOtherTalk(new Speaker('Todd Kennedy', 'toddself', 'whale_eat_squid'), new Talk('Where Quality is Job #1', 6, 2));
addOtherTalk(new Speaker('Jeff Sacks', 'jrsacks', 'jeff_sacks'), new Talk('Voice Controlled Home Automation in JavaScript', 5, 4));
addOtherTalk(new Speaker('John Culviner', 'johnculviner', 'johnculviner'), new Talk('Node.js and MongoDB API from scratch, fully explained and tested', 3, 2));
addOtherTalk(new Speaker('Vince Bullinger', 'vbullinger', 'vbullinger'), new Talk('The Definitive Guide to the Flux Pattern for React', 4, 1));
addOtherTalk(new Speaker('Kurt Wiersma', 'kwiersma', 'kwiersma'), new Talk('Launch Yourself Into the Angular 2 and TypeScript Space', 6, 1));
addOtherTalk(new Speaker('David Giard', 'DavidGiard', 'DavidGiard'), new Talk('Building a TV show with Angular, Bootstrap, and Web Services', 3, 1));
addOtherTalk(new Speaker('Len Smith', 'ignu', 'ignu'), new Talk('Bootstrapping React Applications', 7, 1));
addOtherTalk(new Speaker('Robert Hanson', 'kimtuck', 'rhansonmn'), new Talk('Introduction to Functional Programming', 4, 3));
addOtherTalk(new Speaker('Kyle Hill', 'kylehill', 'kylehill'), new Talk('Deep Dive into ES2015 Feature Transpilation', 6, 4));
addOtherTalk(new Speaker('David Alan LaTour', 'splayfee', ''), new Talk('Realtime Communication Between Angular 2 and Node.js', 1, 1));
addOtherTalk(new Speaker('Kent C. Dodds', 'kentcdodds', 'kentcdodds'), [
    new Talk('Testing React', 8, 2), new Talk('Harnessing the Power of Webpack', 1, 4)
]);
addOtherTalk(new Speaker('Mike Frey', 'mikefrey', 'mikefrey'), new Talk('Choosing the right Node.js Framework', 1, 2));
addOtherTalk(new Speaker('Evan You', 'yyx990803', 'youyuxi'), new Talk('The Progressive Framework', 10, 1));
addOtherTalk(new Speaker('Justin James', 'digitaldrummerj', 'digitaldrummerj'), new Talk('Cross Platform Mobile Apps with Ionic', 8, 3));
addOtherTalk(new Speaker('Kamran Ayub', 'kamranayub', 'kamranayub'), new Talk('Demystifying TypeScript', 2, 3));
addOtherTalk(new Speaker('Mike Ball', 'mdb', 'clapexcitement'), new Talk('Headless Testing Against Real Web Browsers', 9, 2));
addOtherTalk(new Speaker('Chris Lorenzo', 'chiefcll', 'chiefcll'), new Talk('Polymer in Practice', 9, 1));
addOtherTalk(new Speaker('Kevin Bravestone', 'kcmoot', 'kcmoot'), new Talk('Making JavaScript beautiful again with async', 8, 4));
addOtherTalk(new Speaker('Scott Fradkin', 'sfradkin', 'sfradkin'), new Talk('A Block Based Environment for Live Coding Music', 4, 4));
addOtherTalk(new Speaker('Jeremy Lund', 'lund0n', 'Jeremy_Lund'), new Talk('Introduction to Cycle.js', 2, 4));
addOtherTalk(new Speaker('David Kelleher', 'davidknet', 'david_kelleher'), new Talk('Rapid Game Development with CreateJS', 8, 1));
addOtherTalk(new Speaker('Joel Lord', 'joellord', 'joel__lord'), new Talk('Sockets Bring Light At The End Of The Tunnel', 4, 2));
addOtherTalk(new Speaker('Dan Callahan', 'callahad', 'callahad'), [
    new Talk('The New Mobile Web: Service Worker, Push, and App Manifests', 6, 3), new Talk('What the heck is WebAssembly, and do I have to learn C now?', 3, 4)
]);
addOtherTalk(new Speaker('Jamison Dance', 'jergason', 'jergason'), new Talk('Functional Front End Development: Building Web Applications In Elm', 5, 1));
addOtherTalk(new Speaker('Josh Longanecker', 'joshofthewest', 'joshlovesdesign'), new Talk('Progressive Design and the Future of Web Apps', 9, 3));
addOtherTalk(new Speaker('Steven Faulkner', 'southpolesteve', 'southpolesteve'), new Talk('Building Serverless Applications', 10, 3));

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

function addWorkshop(speakers, talks) {
  addItem('workshop', speakers, talks);
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
