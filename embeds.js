const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('this is a test embed')
        .setURL('roblox.com')
}

module.exports.config = {
    name: "hi",
    description: "example of an embed.",
    usage: ".embed",
    accessableby: "Members",
    aliases: []
}