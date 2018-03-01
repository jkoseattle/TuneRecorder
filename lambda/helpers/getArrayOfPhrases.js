'use strict';

var myPhrases = require('../data/myPhrases');
var stopPhrases = require('../data/stopPhrases');
var helpPhrases = require('../data/helpPhrases');
var cancelPhrases = require('../data/cancelPhrases');
var rePromptPhrases = require('../data/rePromptPhrases');

module.exports = function getArrayOfPhrases(aPhraseList) {

  var phrases = {
    'Phrase': 'no phrases',
  };
  switch (aPhraseList) {
    case 'myPhrases':           // Duplicate this case as needed for every set of phrases in the application
      phrases = myPhrases;
      break;
    case 'stopPhrases':
      phrases = stopPhrases;
      break;
    case 'helpPhrases':
      phrases = helpPhrases;
      break;
    case 'cancelPhrases':
      phrases = cancelPhrases;
      break;
    case 'rePromptPhrases':
      phrases = rePromptPhrases;
      break;
  }

  return phrases;

};
  