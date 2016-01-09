// var Talk = require(APP_ROOT.join('models/talk'));
// var talks = require(APP_ROOT.join('data/talks'));
//
// // Not gonna do the keynotes since there's no decision point on that for attendees
// var talksByTimeSlot = sortTalksIntoTimeSlots(talks.other);
//
// function sortTalksIntoTimeSlots(otherTalks) {
// 	// Magic value 10 for number of timeslots
// 	var NUM_TIME_SLOTS = 10;
// 	// Magic value 6 for start of day2's talks
// 	var DAY_TWO_FIRST_TALK_NUM = 6;
//
//  	// starting each array with 1 el in there for my crazy 1 indexing
// 	var byTimeSlot = {dayOne: [{}], dayTwo: [{}]};
//
// 	// First we have to flatten out otherTalks into just the talks objects, adding the speaker name to each one
// 	var otherTalksFlattened = flattenTalks(otherTalks);
//
// 	for(var i=1; i <= NUM_TIME_SLOTS; i++) {
// 		var currentCallbackForSlots = arrayFilterByTimeslot(i);
// 		var thisTimeSlot = otherTalksFlattened.filter(currentCallbackForSlots);
// 		thisTimeSlot = thisTimeSlot.sort(arraySortByRoom);
// 		if(i<DAY_TWO_FIRST_TALK_NUM) {
// 			byTimeSlot.dayOne.push(thisTimeSlot);
// 		} else {
// 			byTimeSlot.dayTwo.push(thisTimeSlot);
// 		}
// 	}
// 	return byTimeSlot;
// }
//
// function flattenTalks(otherTalks) {
// 	var flattenedTalks = []
// 	otherTalks.forEach(function(thisTalk, index, thisArray) {
// 		thisTalk.talks.forEach(function(val, index, thisOtherArray) {
// 			var talkToPush = val;
// 			talkToPush.speakerName = thisTalk.speaker.name;
// 			flattenedTalks.push(talkToPush);
// 		});
// 	});
// 	return flattenedTalks;
// }
//
//
// function arrayFilterByTimeslot(slot) {
// 	var callbackfn = function(value, index, thisArray) {
// 		return value.timeslot === slot;
// 	}
// 	return callbackfn;
// }
//
// function arraySortByRoom(a, b) {
//     return a.room - b.room;
// }

module.exports = {

  index: function(req, res){
    res.render('schedule', { title: 'Midwest JS | Schedule', scheduleActive: 'active'});
  }
};
