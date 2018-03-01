'use strict';

var constants = require('../constants/constants');

var rePromptPhrases = [
  {
    'Phrase': 'Are you there?',
    // 'NextState': constants.states.PLAYING
  },
  {
    'Phrase': 'You can say Help if you don\'t know what to do.',
    // 'NextState': constants.states.PLAYING
  },
  {
    'Phrase': 'You can always say Stop or Cancel if you want to exit this skill.',
    // 'NextState': constants.states.PLAYING
  }
];

// DEBUG PHRASE
// var rePromptPhrases = [
//   {   
//     'Phrase': `<audio src="https://s3.amazonaws.com/jkoseattle-alexa/snorenew.mp3" />`,
//     // 'NextState': constants.states.PLAYING
//   }
// ];

module.exports = rePromptPhrases;
