require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

const commandErrorMessage = 'Command parse error. Command must begin with: ?eval';
const evalErrorMessage = 'Eval parse error. Check your JS code and try again.';
const everyone = '@everyone';

bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
	if (msg.author.bot) return;
	
	if (msg.content.indexOf('?eval ') === 0) {
		const arbitraryCode = msg.content.replace('?eval ', '');
		const currentChannel = msg.channel;
		const currentMessage = msg;
		
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
});