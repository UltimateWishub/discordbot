const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("hello")
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: ".hi",
    accessableby: "members",
    aliases: ['']
}