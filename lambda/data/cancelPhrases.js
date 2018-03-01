'use strict';

var constants = require('../constants/constants');

// You may want to just use the same phrases as you have for StopIntent, but if they are to be different, you can use this array
var cancelPhrases = [
  {
    'Phrase': 'Canceling.',
    // 'NextState': constants.states.PLAYING
  },
  {
    'Phrase': 'Good bye.',
    // 'NextState': constants.states.PLAYING
  },
  {
    'Phrase': 'See you later.',
    // 'NextState': constants.states.PLAYING
  }
];

// DEBUG PHRASE
// var cancelPhrases = [
//   {   
//     'Phrase': `<audio src="https://s3.amazonaws.com/jkoseattle-alexa/snorenew.mp3" />`,
//     // 'NextState': constants.states.PLAYING
//   }
// ];

module.exports = cancelPhrases;
