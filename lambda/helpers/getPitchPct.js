'use strict';

var constants = require('../constants/constants');
var syllables = require('../data/syllables');
var pitchTable = require('../data/pitchTable');

module.exports = function getPitchPct(aSyllable, aPitchNbr) {

    // Get pitch_lo from selected syllable
    var pitch_lo;
    for (let i = 0; i < syllables.length; i++) {
        const element = syllables[i];
        if (element.name == aSyllable) {
            pitch_lo = element.pitch_lo;
            break;
        }
    }

    // Return error if both not found
    var error = '';
    if (!pitch_lo) {
        error = 'the syllable ';
    }
    if (!abs_pitch) {
        if (error.length > 0) {
            error += 'or ';
        }
        error += 'the pitch ';
    }
    if (error != '') {
        return `<speak>I can't resolve ` + error + '</speak>';
    }

    var rel_pitch = parseInt(abs_pitch) - parseInt(pitch_lo);
    var answ = constants.pitchPcts[rel_pitch];

    return answ;
};
  