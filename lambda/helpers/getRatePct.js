'use strict';

var constants = require('../constants/constants');
var syllables = require('../data/syllables');
var valueTable = require('../data/valueTable');

module.exports = function getRatePct(aSyllable, aValue, aTempo) {

    // Get bpm from selected syllable
    var syllableBpm;
    var syllableMs;
    var multiplier;
    var valueMs;
    var answ;

    for (let i = 0; i < syllables.length; i++) {
        const element = syllables[i];
        if (element.name == aSyllable) {
            syllableBpm = element.bpm;
            break;
        }
    }
    if (syllableBpm) {
        syllableMs = (60 / syllableBpm) * 1000;
    }
    else {
        return 'Error getting bpm';
    }
    
    // Get multiplier for selected value
    for (let i = 0; i < valueTable.length; i++) {
        const element = valueTable[i];
        if (element.name == aValue) {
            multiplier = element.dur;
            break;
        }
    }
    if (multiplier) {
        valueMs = (60000 / aTempo) * multiplier;
    }
    else {
        return 'Error getting multiplier';
    }
    
    answ = Math.round((syllableMs / valueMs) * 100);

    return answ;
};
  