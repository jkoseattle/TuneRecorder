'use strict';

var constants = require('../constants/constants');

module.exports = function formatSSML(aNote) {

  var answ = '<prosody ';
  
  answ += 'pitch="';
  answ += aNote.pitchPct + '%" ';
  
  answ += 'rate="';
  answ += aNote.ratePct + '%">';

  answ += '<say-as interpret-as="interjection">';
  answ += aNote.syllable;
  
  answ += '</say-as>';
  answ += '</prosody>';

  return answ;

};  
  