const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, config) => {

  let user = message.mentions.users.first() || message.author
  var balance = db.fetch(`money_${user.id}`);

  if(balance == null) balance = 0;


  let embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag}'s Balance`)
  .setDescription(`$${balance}`)
  .setColor("GREEN")
  

  message.channel.send(embed)
}