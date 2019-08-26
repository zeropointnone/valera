//dependensies 
const Discord = require('discord.js');
const {prefix, token} = require ('./config.json');
const client = new Discord.Client();
//login
client.login(token);
//initialization message
client.once('ready',()=>{console.log('Valera online!')})



//ping reply
client.on('message', message => { 
console.log(message.content);
if (message.content === 'ping') {message.reply('Pong!');}})

//Borderlands countdown
client.on('message', message => { 
var deadline = new Date("Sep 13, 2019 19:00:00").getTime(); 
var now = new Date().getTime(); 
var t = deadline - now; 
var d = Math.floor(t / (1000 * 60 * 60 * 24)); 
var h = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var s = Math.floor((t % (1000 * 60)) / 1000); 
if(message.content.startsWith(`${prefix}СколькоДоБорды`)){message.channel.send(d + ' Дней ' + h+ ' Часов ' + m + ' Минут ' + s + ' Секунд');}})



//display help
client.on('message',message => { 
    var help = "СколькоДоБорды, ping, time"
    if(message.content.startsWith(`${prefix}help`)){message.channel.send(help);}})

//display current time
client.on('message',message => { 
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
if(message.content.startsWith(`${prefix}time`)){message.channel.send(dateTime);}})

