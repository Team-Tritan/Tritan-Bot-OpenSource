"use strict";

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "poker",
  description: "Play poker with a friend in a voice channel!",
  category: "Fun",
  usage: "(prefix)poker",
  async execute(message, args) {
    let client = message.client;

    if (!message.member.voice.channelId) {
      let bigpenis = new MessageEmbed()
        .setAuthor({
          name: `${message.client.config.embeds.authorName}`,
          iconURL: `${message.client.config.embeds.authorIcon}`
        })
        .setTitle(":x: | You need to join a voice channel first!")
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp()
        .setColor(message.client.config.embeds.embed_color);
      return message.channel.send({ embeds: [bigpenis] });
    }

    if (message.member.voice.channelId) {
      client.discordTogether
        .createTogetherCode(message.member.voice.channelId, "poker")
        .then(async (invite) => {
          let daddydick = new MessageEmbed()
            .setAuthor({
              name: `${message.client.config.embeds.authorName}`,
              iconURL: `${message.client.config.embeds.authorIcon}`
            })

            .setThumbnail(message.author.displayAvatarURL())
            .setTitle("Play Poker Together!")
            .setDescription(
              `With this command, you can play poker together with friends in a voice channel!\n\n[**Click here to join!**](${invite.code})\n\n Please note that this only works on desktop devices at this time.`
            )
            .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor(message.client.config.embeds.embed_color);
          return message.channel.send({ embeds: [daddydick] });
        });
    }
  }
};
