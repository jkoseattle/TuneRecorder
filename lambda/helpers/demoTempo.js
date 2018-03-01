'use strict';

var constants = require('../constants/constants');
var syllables = require('../data/syllables');
var pitchTable = require('../data/pitchTable');
var getPitchPct = require('../helpers/getPitchPct');
var getRatePct = require('../helpers/getRatePct');
var formatSSML = require('../helpers/formatSSML');
var getDefaultSyllable = require('../helpers/getDefaultSyllable');

module.exports = function demoTempo(aTempo) {

    var answ = '';
    var aNote = {};
    aNote.pitchName = "C3";
    aNote.syllable = getDefaultSyllable(aNote.pitchName);
    aNote.value = "quarter";

    aNote.pitchPct = getPitchPct(aNote.syllable, aNote.pitchName);
    aNote.ratePct = getRatePct(aNote.syllable, aNote.value, aTempo);
    var ssml = formatSSML(aNote);
    for (let i = 0; i < constants.demo_count; i++) {
      answ += ssml;
    }

    return answ;
};
  