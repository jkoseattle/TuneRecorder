'use strict';

var Alexa = require('alexa-sdk');
var constants = require('../constants/constants');
var demoTempo = require('../helpers/demoTempo');
var getPitchPct = require('../helpers/getPitchPct');
var getRatePct = require('../helpers/getRatePct');
var formatSSML = require('../helpers/formatSSML');
var getDefaultSyllable = require('../helpers/getDefaultSyllable');
var singTune = require('../helpers/singTune');

var onboardingStateHandlers = Alexa.CreateStateHandler(constants.states.ONBOARDING, {
    
    'NewSession': function () {
        this.attributes['tune'] = [];
        this.attributes['tempo'] = 100;
        this.emit(':ask', 'Welcome to tune recorder. You can record a tune or else have me sing one back to you. Which would you like to do?');
    },

    'RecordTune': function () {
        this.emit(':ask', `Great. First, I need to know the tempo. you can give me the tempo by saying, for example, one hundred beats per minute. Or if you're not sure, say tempo help and we'll figure it out togther.`);
    },

    'RecordNote': function () {
        var note = {};

        // Assign note pitch
        var pitchName = this.event.request.intent.slots.pitch.value;

        if (pitchName.search("natural") + pitchName.search("flat") + pitchName.search("sharp") + pitchName.search("rest") == -4) {
            pitchName += ' natural';
        }
        note.pitchName = pitchName.toUpperCase();

        // Get the last note entered, to help determine what the next note is
        var lastNote;
        var currentTune = this.attributes['tune'];
        if (currentTune.length > 0) {
            var lastNote = currentTune[currentTune.length-1];
        }
            
        // Get the new note pitch
        note.pitchNbr = getPitchNbr(note.pitchName, lastNote.pitchNbr, this.event.request.intent.slots.direction.value);

        // Get the new note duration, or use last duration, or default to quarter note
        if (this.event.request.intent.slots.duration.value) {
            note.value = this.event.request.intent.slots.duration.value;
        } else {
            if (this.attributes['currentDuration']) {
                note.value = this.attributes['currentDuration'];
            } else {
                note.value = "quarter";
            }
        }
        this.attributes['currentDuration'] = note.value;

        // Get the default syllable to use based on the pitch
        note.syllable = getDefaultSyllable(note.pitchNbr);

        // Calculate pitch and rate percentages to use in SSML
        note.pitchPct = getPitchPct(note.syllable, note.pitchNbr);
        note.ratePct = getRatePct(note.syllable, note.value, this.attributes['tempo']);

        // Finally, format the actual SSML
        note.ssml = formatSSML(note);

        // Add this note to the tune
        this.attributes['tune'].push(note);


        var theTune = singTune(this.attributes['tune']);
        this.emit(':ask', theTune);
    },

    'BeatsPerMinute': function () {
        this.attributes['tempo'] = this.event.request.intent.slots.bpm.value;
        this.emit(':ask', "Great. I'm ready for the first note.");
    },

    'TempoHelp': function () {
        var ssml = '';
        if (!this.attributes['helped']) {
            ssml = `OK. I'll start a beat of quarter notes, and you can tell me "faster" or "slower", until I've got it right, then say "got it". Here goes. <break time="1s"/>`;
            this.attributes['helped'] = 1;
        }
        if (this.event.request.intent.slots.tempoDirective.value == 'got it') {
            this.emit(':ask', `OK. The tempo is ${this.attributes['tempo']} beats per minute. I'm ready for the first note.`);
        } else {
            if (this.event.request.intent.slots.tempoDirective.value == 'faster') {
                this.attributes['tempo'] += 10;
            }
            if (this.event.request.intent.slots.tempoDirective.value == 'slower') {
                this.attributes['tempo'] -= 10;
            }
            if (this.event.request.intent.slots.tempoDirective.value == 'much faster') {
                this.attributes['tempo'] += 30;
            }
            if (this.event.request.intent.slots.tempoDirective.value == 'much slower') {
                this.attributes['tempo'] -= 30;
            }
            ssml += demoTempo(this.attributes['tempo']);
            this.emit(':ask', ssml);
        }
    },

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

module.exports = onboardingStateHandlers;

