'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants/constants');

// Handlers
var onboardingStateHandlers = require('./handlers/onboardingStateHandlers');
var playingStateHandlers = require('./handlers/playingStateHandlers');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
  
    alexa.registerHandlers(
        onboardingStateHandlers,
        playingStateHandlers
    );

    alexa.execute();

};