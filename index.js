const Discord = require ('discord.js')
const    client = new Discord.Client();




var prefix ="=/"


client.login("NzI5ODIyMjIwNDczMzM1ODY5.XwSBPQ.gJopaJwbiXbT7uHSchC0Jyrnhak")

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("/help our l'aide !")
});

 client.on('message', message => { 
 

})
