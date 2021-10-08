const {Client, WebhookClient} = require("discord.js");
const db = require("quick.db");
const config = require("../config.json");

module.exports.run = async (client, message, args, config) => {
    if(message.author.id != "275419902381260802") return message.channel.send("You dont have permission to use this command.");

    const webhookClient = new WebhookClient(
        config.webhookid,
        config.webhooktoken
    );
const msg = args.join(' ')

        

    webhookClient.send(msg)
    

}