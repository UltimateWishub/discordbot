const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix} = require('./config.json');

client.on("ready", async () => {
    console.log('Dn.Bot is online!');
    client.user.setActivity("the deacon server", {type: "WATCHING"});
})

client.login(process.env.token);

client.on('message', async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    if (message.content.startsWith(`${prefix}hi`)) {
	    message.reply('Hello');
    } else if (message.content.startsWith(`${prefix}me`)) {
        message.channel.send(`Username: ${message.author.tag}`);
        message.channel.send(`Your ID: ${message.author.id}`)
    } else if (message.content.startsWith(`${prefix}suggest`)){
        suggestChannelID = message.channel.id;
        let suggestChannel = message.guild.channels.cache.find(channel => channel.id === suggestChannelID);
        let suggestTitle = message.content.split(" ").slice(1).join(" ")

        let embedsuggest = new Discord.MessageEmbed()
        .setTitle(`New suggestion`)
        .setColor('#23a5cd')
        .addFields(
		{ name: 'Suggestion:', value: suggestTitle, inline: true },
		{ name: 'Submitted by:', value: message.author.tag, inline: true },
	)
        .setFooter('If you agree thumbs up. If not then thumbs down.')
        .setThumbnail(message.author.displayAvatarURL())
        let msgEmbed = await suggestChannel.send(embedsuggest);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    } else if (message.content.startsWith(`${prefix}help`)) {
        helpChannelID = message.channel.id;
        let helpChannel = message.guild.channels.cache.find(channel => channel.id === helpChannelID);

        let embedhelp = new Discord.MessageEmbed()
        .setTitle(`Commands`)
        .setColor('#f4aea4')
        .addFields(
		{ name: '.hi', value: `I will say hi back`, inline: true },
		{ name: '.me', value: `I'll send you tag and user ID`, inline: false },
		{ name: '.suggest <whatever suggestion>', value: `I'll mark your suggestion`, inline: false },
		{ name: '.help', value: `Shows a list of my commands`, inline: false },
	)
        .setFooter('Use the suggestions command in the #suggestions channel and everything else in this channel')
        let msgEmbed = await helpChannel.send(embedhelp);
    }

});