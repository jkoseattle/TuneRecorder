'use strict'

var constants = require('../constants/constants');

module.exports = function singTune(aTune) {
    var answ = '';
    for (let i = 0; i < aTune.length; i++) {
        const element = aTune[i];
        answ += element.ssml;
    }

    return answ;
}
