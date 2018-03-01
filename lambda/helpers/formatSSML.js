'use strict';

var constants = require('../constants/constants');

module.exports = function formatSSML(aNote) {

  // Quick silent break to reset Speechcons
  var answ = `<prosody volume="silent" pitch="+0%" rate="5000%"><say-as interpret-as="interjection">jink</say-as> </prosody>`;
  
  answ += '<prosody ';
  
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
  