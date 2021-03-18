const { CommandInterface } = require('../libs/commandInterface');

const commandInterface = new CommandInterface('!');

commandInterface.registerCommand({
  identifier: 'hello',
  description: 'Greet someone',
  arguments: {
    name: /[α-ω]/gi,
  },
  callback(name) {
    console.log(`Hello ${name}!`);
  },
});

console.log(commandInterface.logCommands('discord-embed'));
