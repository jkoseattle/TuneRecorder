// Helper function which accepts an array of objects of the structure:
//   'Phrase': 'string',      <-- the chosen string among the array
//   'NextState': 'string',   <-- the state in the application which has been defined in constants.js. Undefined if state does not change
//   'Index': integer         <-- the index of the chosen phrase in the array, used to keep track of strings already chosen
// Also accepts an array of integers listing indexes of phrases in this array that have already been used
// returns a single object of the same type after any transformation that needs to be done on the chosen phrase

'use strict';

var constants = require('../constants/constants');
var syllables = require('../data/syllables');
var pitchTable = require('../data/pitchTable');

module.exports = function getDefaultSyllable(aPitchName) {

  // Check if all the phrases have been used already, and if so return error phrase
  var pitch;
  var pitchDiffs = [];
  var pitch_lo;

  for (let i = 0; i < pitchTable.length; i++) {
    const element = pitchTable[i];
    if (element.name.toUpperCase() == aPitchName.toUpperCase()) {
      pitch = element.pitchNbr;
      break;
    }
  }

  for (let i = 0; i < syllables.length; i++) {
    const element = syllables[i];
    if (pitch >= element.pitch_lo) {
      pitchDiffs.push({"syllable": element.name, "diff": pitch-element.pitch_lo});
    }
  }

  pitchDiffs.sort(function(a, b) {
    return a.diff - b.diff;
  })

  return pitchDiffs[0].syllable;
  
};
  