# VulnerableBot

With loving thanks to Discord, Sitepoint, and eval for making this possible.

Link to tutorial article on SitePoint: [https://www.sitepoint.com/discord-bot-node-js/](https://www.sitepoint.com/discord-bot-node-js/)

## Requirements

- [Node.js](http://nodejs.org/)
- [Discord](https://discordapp.com/) account
- A desire for suffering

## Commands

``?eval`` - Execute arbitrary code.

## Variables

``everyone`` - Variable for '@everyone' to circumvent individual permissions.

``currentChannel`` - The channel where the bot command was invoked. Used for scoping.

``currentMessage`` - The invoking message. Used for scoping.

## Command Examples

To send a message:

```js
?eval currentChannel.send('<https://bit.ly/3evxwsM> ')
```

To send a message to *everyone*:

```js
?eval const m='@'+'everyone';currentChannel.send(m+' <https://youtu.be/5exiot_c4Qg> ')
```

To send a message to the server host's console:

```js
?eval console.info('Hello, server!')
```

To kick someone (replace ``@MENTION_HERE`` with your mention):

```js
?eval const member=currentMessage.mentions.members.first();member.kick()/* @MENTION_HERE */
```