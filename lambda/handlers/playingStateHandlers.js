'use strict';

var Alexa = require('alexa-sdk');
var constants = require('../constants/constants');

var playingStateHandlers = Alexa.CreateStateHandler(constants.states.PLAYING, {

    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Stop intent');
    },
    
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Cancel intent');
    },
    
    'SessionEndedRequest': function () {
        this.emit(':tell', 'Session ended');
    },
    
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'Help intent');
    },
    
    'Unhandled': function () {
        this.emitWithState('AMAZON.HelpIntent');
    }
    
});

module.exports = playingStateHandlers;
