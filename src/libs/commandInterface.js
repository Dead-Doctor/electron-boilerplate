const Discord = require('discord.js');

module.exports = {
  CommandInterface: class {
    constructor(prefix) {
      this.prefix = prefix;
      this.registeredCommands = {};
    }

    registerCommand(options) {
      this.registeredCommands[options.identifier] = {
        identifier: options.identifier,
        description: options.description,
        arguments: options.arguments,
        callback: options.callback,
      };
      // console.log(this.registeredCommands[options.identifier]);
    }

    logCommands(format) {
      if (format == 'discord-embed') {
        return ['Error'];
      } else {
        let lines = ['Help Commands', 'Possible Commands:'];
        for (const command in this.registeredCommands) {
          const current = this.registeredCommands[command];

          let usage = [];
          for (const argument in current.arguments) {
            usage.push(`<${argument}>`);
          }

          const commandOutput = [
            ``,
            `${current.identifier}:`,
            ` ┣━Description: ${current.description}`,
            ` ┗━Usage: /${current.identifier} ${usage.join(' ')}`,
          ];

          lines.push(...commandOutput);
        }

        return lines.join('\n');
      }
    }

    input(input) {
      console.log(input);
    }
  },
};
