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
        let suggestDescription = message.content.split(",").slice(1).join(" ")

        let embedPoll = new Discord.MessageEmbed()
        .setTitle(suggestTitle)
        .setDescription(suggestDescription)
        .setColor('#23a5cd')
        .setAuthor(message.author.username)
        .setFooter('If you agree thumbs up. If not then thumbs down.')
        .setThumbnail(message.author.displayAvatarURL())
        let msgEmbed = await suggestChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    } 

});