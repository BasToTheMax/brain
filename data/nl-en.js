// create data which will be used for training
const data = [
  { input: 'Hoi', output: 'Hey' }, { input: 'Hoi.', output: 'Hey.' }, { input: 'Hoi!', output: 'Hey!' }, { input: 'Hoi?', output: 'Hey?' },
  { input: 'Hoi', output: 'Hi' }, { input: 'Hoi.', output: 'Hi.' }, { input: 'Hoi!', output: 'Hi!' }, { input: 'Hoi?', output: 'Hi?' },
  { input: 'Hallo', output: 'Hello' }, { input: 'Hallo.', output: 'Hello.' }, { input: 'Hallo!', output: 'Hello!' }, { input: 'Hallo?', output: 'Hello?' },

  { input: 'Hoe gaat het', output: 'How are you' }, { input: 'Hoe gaat het.', output: 'How are you.' }, { input: 'Hoe gaat het!', output: 'How are you!' }, { input: 'Hoe gaat het?', output: 'How are you?' },
  { input: 'Hoe gaat het', output: 'How are you doing' }, { input: 'Hoe gaat het.', output: 'How are you doing.' }, { input: 'Hoe gaat het!', output: 'How are you doing!' }, { input: 'Hoe gaat het?', output: 'How are you doing?' }
];

module.exports = data;
