require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

const commandErrorMessage = 'Command parse error. Command must begin with: ?eval';
const evalErrorMessage = 'Eval parse error. Check your JS code and try again.';

bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
	if (msg.author.bot) return;
	
	if (msg.content.indexOf('?eval ') === 0) {
		const arbitraryCode = msg.content.replace('?eval ', '');
		
		try	{
			eval(arbitraryCode);
		} catch (e) {
			msg.reply(evalErrorMessage);
			msg.channel.send(e.message);
		}
	}
	else if (msg.content.indexOf('?') === 0) {
		msg.reply(commandErrorMessage);
	}

	// Starter Code
	/*if (msg.content === 'ping') {
		msg.reply('pong');
		msg.channel.send('pong');

		} else if (msg.content.startsWith('!kick')) {
			if (msg.mentions.users.size) {
				const taggedUser = msg.mentions.users.first();
				msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
			} else {
				msg.reply('Please tag a valid user!');
		}
	}*/
});
