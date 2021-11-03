const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const config = require('./config.json')
const color = require("colors")
const setTitle = require('console-title');
const token = config.token;
 
client.on("ready", () => {
  
    client.guilds.cache.forEach(serv => {
        serv.channels.cache.random().createInvite().then(invite => console.log(`>${serv.name} | ${invite}`.green))
        .catch(console.log(`>${serv.name} | Entrain d'envoyer une invite...`.green ));
    });
 
	setTitle("MP All Coded By Nomade, Re coded By KASav")
    var memberCount = client.users.cache.size;
    var serverCount = client.guilds.cache.size;
	console.log("Fichier Original Codée Par Nomade: https://github.com/Nomade7".blue)
	console.log("Fichier mis à jour par KASsav: https://github.com/KASav1".blue)
    console.log("--------------------------------------".green);
    console.log('Informations du bot:'.green)
    console.log(`Nom du bot: ${client.user.tag}!`.green);
    console.log(`Id du bot: ${client.user.id}`.green)
    console.log(`Token du bot: ${client.token}`.red)
    console.log("--------------------------------------".green);
	console.log(`Utiliser la commande ${config.prefix}mp sur un serveur.`.green)
});
 
     client.on("message", message => {
 
        if (message.content === `${config.prefix}mp` && message.author.id === `${config.id}`) {
            if (message.deletable) message.delete();
            message.guild.members.forEach(member => {
                member.send(`${config.message}`).catch(e => { });
            })
        }
 
    });
 

client.login(token)
