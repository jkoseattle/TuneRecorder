'use strict';

var constants = require('../constants/constants');

var helpPhrases = [
  {
    'Phrase': 'Here is some help for you.',
    // 'NextState': constants.states.PLAYING
  },
  {
    'Phrase': 'I\'m helping you.',
    // 'NextState': constants.states.PLAYING
  },
  {
    'Phrase': 'Please do the thing and then the other thing.',
    // 'NextState': constants.states.PLAYING
  }
];

// DEBUG PHRASE
// var helpPhrases = [
//   {   
//     'Phrase': `<audio src="https://s3.amazonaws.com/jkoseattle-alexa/snorenew.mp3" />`,
//     // 'NextState': constants.states.PLAYING
//   }
// ];

module.exports = helpPhrases;
