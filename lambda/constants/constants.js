var constants = Object.freeze({

    // DynamoDB Table Name
    dynamoDBTableName: 'YOUR_TABLE_NAME',

    // Skill States
    states: {
      ONBOARDING: '',
      PLAYING: '_PLAYING',
    },

    demo_count: 8,

    pitchPcts: ["-25", "-20", "-15", "-10", "-5", "+0", "+7", "+14", "+21", "+28", "+37", "+44", "+50"]

  });
  
  module.exports = constants;
  