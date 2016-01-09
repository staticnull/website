var fs = require('fs');
var marked = require('marked');

var talks = {
  other: [],
  workshop: [],
  keynotes: []
};

var folder = APP_ROOT.join('data/talk-abstracts');


// Add keynotes

// Add workshops

// Add talks


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
