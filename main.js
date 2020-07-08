const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix} = require('./config.json');

const role = guild.roles.cache.find(role => role.name === 'Deacon');
const member = message.mentions.members.first();
member.roles.add(role);

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
    } if(message.author.bot) return;
    if(message.content.indexOf(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(message.content.startsWith(`${prefix}play`)) {
        if(!args[0]) return;
        let url = args.join(" ");
        if(!url.match(/(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/)) return message.channel.send("Please provide a valid Youtube link!");

        let serverQueue = queue.get(message.guild.id);
        let vc = message.member.voice;

        if(!vc) return message.channel.send("You are not in a voice channel!");

        if(!vc.channel.permissionsFor(client.user).has('CONNECT') || !vc.channel.permissionsFor(client.user).has('SPEAK')) return message.channel.send("I do not have permission!");

        let songinfo = await ytdl.getInfo(url);
        let song = {
            title: songinfo.title,
            url: songinfo.video_url
        }

        if(!serverQueue) {
            let queueConst = {
                textChannel: message.channel,
                voiceChannel: vc.channel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };

            queue.set(message.guild.id, queueConst);
            queueConst.songs.push(song);

            try {
                let connection = await vc.channel.join();
                queueConst.connection = connection
                playSong(message.guild, queueConst.songs[0])
            } catch (error) {
                console.log(error);
                queue.delete(message.guild.id);
                return message.channel.send("There was an error playing the song! Error: " + error);
            }
        } else {
            serverQueue.songs.push(song);
            return message.channel.send(`${song.title} has been added to the queue!`)
        }
    }
});

/**
 * 
 * @param {Discord.Guild} guild 
 * @param {Object} song 
 */
async function playSong(guild, song) {
    let serverQueue = queue.get(guild.id);

    if(!song){
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url)).on('end', () => {
        serverQueue.songs.shift();
        playSong(guild, serverQueue.songs[0]);
    })
    .on('error', () => {
        console.log(error)
    })

    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}