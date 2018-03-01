'use strict';

var constants = require('../constants/constants');
var pitchTable = require('../data/pitchTable');

module.exports = function getPitchNbr(aPitchName, aLastPitch, aDirection) {
    if (!aLastPitch) {
        aLastPitch = 12;
    }

    var newPitchNbr = -1;
    if (aPitchName = "REST") {
        return newPitchNbr;
    }
    
    for (let i = 0; i < pitchTable.length; i++) {
        const element = pitchTable[i];
        if (element.name == aPitchName) {
            newPitchNbr = parseInt(element.pitchNbr);
            break;
        }        
    }

    while (Math.abs(newPitchNbr-aLastPitch) > 6) {
        tempPitchNr += 12;
    }

    if (aDirection) {
        if (aDirection == constants.directions.DOWN && newPitchNbr >= aLastPitch) {
            newPitchNbr -= 12;
        }
        if (aDirection == constants.directions.UP && newPitchNbr <= aLastPitch) {
            newPitchNbr += 12;
        }
    }

    return newPitchNbr
};


