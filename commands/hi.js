const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    return message.reply("Hello")
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: ".hi"
}