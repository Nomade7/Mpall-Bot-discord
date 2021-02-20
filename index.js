const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const token = 'Token de ton bot';
 
client.on("ready", () => {
 
    client.user.setStatus("online");
 
    client.guilds.forEach(serv => {
        serv.channels.random().createInvite().then(invite => console.log(>${serv.name} | ${invite}))
        .catch(console.log(>${serv.name} | Entrain d'envoyer une invite... ));
    });
 
    var memberCount = client.users.size;
    var serverCount = client.guilds.size;
    console.log("--------------------------------------");
    console.log('Informations du bot:')
    console.log(Nom du bot: ${client.user.tag}!);
    console.log(Id du bot: ${client.user.id})
    console.log(Token: du bot: ${client.token})
    console.log("--------------------------------------");
    console.log('Information du client:')
    console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
    console.log('--------------------------------------')
});
 
     client.on("message", message => {
 
        if (message.content === "!mp" && message.author.id === '653610360288444428') {
            if (message.deletable) message.delete();
            message.guild.members.forEach(member => {
                member.send(Your text has been published in private message).catch(e => { });
            })
        }
 
    });
 
 
 
 
 
client.login(token)
