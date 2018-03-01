'use strict';

var constants = require('../constants/constants');

// Might just use the same as CnacelIntent
var stopPhrases = [
  {
    'Phrase': 'Stopping.',
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
// var stopPhrases = [
//   {   
//     'Phrase': 'Fine. <break time="1s" /><prosody rate="125%">No really. It\'s fine. Forget it. <prosody pitch="+20%"><sniff>Just forget it.</prosody></prosody>',
//     // 'NextState': constants.states.PLAYING
//   }
// ];

module.exports = stopPhrases;
