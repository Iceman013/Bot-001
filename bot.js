var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready',function(evt){
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.joinVoiceChannel(496791209788964874);
var Commands = ['sorry','com2','com3']
var Responses = ['It is totally fine. I forgive you.','res2','res3']
var b = "$"
var a = 0
var c = 0
var d = 0
var e = 0
var A = " "
var myHelp = ["Iceman13"]
var roleList = ['Create Instant Invite','Kick Members','Ban Members','Administrator','Manage Channels','Manage Server','Add Reactions','View Audit Log','Priority Speaker','Error 512','View Channels','Send Messages','Send TTS Messages','Manage Messages','Embed Links','Attach Files','Read Message History','Mention Everyone','Use External Emojis','Error 524288','Connect','Speak','Mute Members','Deafen Members','Use Members','Use Voice Activity','Change Nickname','Manage Nicknames','Manage Roles','Manage Webhooks','Manage Emojis']
var data = {
"1":
    {
        "id": "486985623161274378",
        "pt": 186,
        "dt": 11,
        "items": 0,
        "cg": 2,
        "ug": 1,
        "rg": 1,
        "eg": 0,
        "mg": 0,
        "lg": 0,
        "fg": 0,
    },
"2":
    {
        "id": "485628261494292505",
        "pt": 88,
        "dt": 11,
        "items": 0,
        "cg": 0,
        "ug": 0,
        "rg": 0,
        "eg": 1,
        "mg": 0,
        "lg": 0,
        "fg": 0,
    },
"3":
    {
        "id": "393586279964475393",
        "pt": 217,
        "dt": 11,
        "items": 0,
        "cg": 0,
        "ug": 0,
        "rg": 0,
        "eg": 0,
        "mg": 0,
        "lg": 1,
        "fg": 0,
    },
"4":
    {
        "id": "336507246227881984",
        "pt": 0,
        "dt": 0,
        "items": 0,
        "cg": 0,
        "ug": 0,
        "rg": 0,
        "eg": 0,
        "mg": 0,
        "lg": 0,
        "fg": 0,
    },
"5":
    {
        "id": "193104123506196481",
        "pt": 0,
        "dt": 0,
        "items": 0,
        "cg": 0,
        "ug": 0,
        "rg": 0,
        "eg": 0,
        "mg": 0,
        "lg": 0,
        "fg": 0,
    },
"6":
    {
        "id": "458809225120972800",
        "pt": 0,
        "dt": 0,
        "items": 0,
        "cg": 0,
        "ug": 0,
        "rg": 0,
        "eg": 0,
        "mg": 0,
        "lg": 0,
        "fg": 0,
    },
"7":
    {
        "id": "194966921362407424",
        "pt": 0,
        "dt": 0,
        "items": 0,
        "cg": 0,
        "ug": 0,
        "rg": 0,
        "eg": 0,
        "mg": 0,
        "lg": 0,
        "fg": 0,
    },
"8":
    {
        "id": "495705429150793739",
        "pt": 0,
        "dt": 0,
        "items": 0,
        "cg": 0,
        "ug": 0,
        "rg": 0,
        "eg": 0,
        "mg": 0,
        "lg": 0,
        "fg": 0,
    },
"9":
    {
        "id": "496000252290138122",
        "pt": 0,
        "dt": 0,
        "items": 0,
        "cg": 0,
        "ug": 0,
        "rg": 0,
        "eg": 0,
        "mg": 0,
        "lg": 0,
        "fg": 0,
    }
}
var users = []
var points = []
var thisDay = []
var hold = []
var common = []
var uncommon = []
var rare = []
var epic = []
var mythic = []
var legendary = []
var fabled = []
var i = 1;
while (i < 10){
    users[users.length] = data[i.toString()]["id"]
    i = i + 1
}
users = ["486985623161274378","485628261494292505","393586279964475393","336507246227881984","193104123506196481","458809225120972800","194966921362407424","495705429150793739","496000252290138122","393083960084922368"]
points = [1417,713,1106,3,0,71,0,0,0,198]
thisDay = [2,1,30,2,16,18,16,16,16,2]
common = [35,1,1,24,0,5,0,0,0,0]
uncommon = [19,0,4,8,0,2,0,0,0,0]
rare = [4,0,0,4,0,1,0,0,0,0]
epic = [1,1,2,5,0,2,0,0,0,0]
mythic = [2,0,2,2,0,0,0,0,0,0]
legendary = [1,0,1,2,0,0,0,0,0,0]
fabled = [1,0,0,5,0,0,0,0,0,0]
var cc = [8,0,0,18,0,1,0,0,0,0]
var ch = [6,0,0,11,0,7,0,0,0,1]
var ct = [4,0,0,9,0,1,0,0,0,1]
var uc = [3,0,0,14,0,0,0,0,0,0]
var uh = [7,0,1,16,0,1,0,0,0,0]
var ut = [3,0,1,7,0,1,0,0,0,0]
var rc = [2,0,0,5,0,2,0,0,0,0]
var rh = [0,0,0,4,0,0,0,0,0,0]
var rt = [1,0,0,1,0,1,0,0,0,0]
var ec = [1,0,0,4,0,0,0,0,0,0]
var eh = [2,0,0,3,0,0,0,0,0,0]
var et = [1,0,0,3,0,0,0,0,0,0]
var mc = [0,0,0,1,0,0,0,0,0,0]
var mh = [1,0,0,4,0,0,0,0,0,0]
var mt = [0,0,0,0,0,0,0,0,0,0]
var lc = [0,0,0,0,0,0,0,0,0,0]
var lh = [0,0,0,1,0,0,0,0,0,0]
var lt = [0,0,0,0,0,0,0,0,0,0]
var fc = [0,0,0,3,0,0,0,0,0,0]
var fh = [0,0,0,0,0,0,0,0,0,0]
var ft = [1,0,0,1,0,0,0,0,0,0]
var caves = [2,1,1,1,1,1,1,1,1,1]
var unlocked = [7,2,4,5,0,1,0,0,0,1]
var streak = [2,1,1,2,1,1,1,1,1,1]
var time = [0,0,0,0,0,0,0,0,0,0,0,0,0]
var bio = ["I code goods.","none","we are going to be in the office you use","none","none","none","none","none","none","none"]
var timeStamp = [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()]

var userSongs = ["Weird Al Ebay"]

var WYR = ["know when you were going to die, or when all the people around you are going to die","be able to read minds, or send messages by thinking","be good looking but unaware of it, or be ugly and think you are good looking","make friends easily but like none of them, or like most people that won't become friends with you","have really good jokes but not understand humor, or think all jokes are hillarious but rarely here any","hear the same voice no matter who speaks, or speak random voices every time you talk","understand every language but not speak it, or speak every language but not understand it","constantly move homes to new locations, or never travel on vaction","see the future from all viewpoints and be blind, or see like you do now","understand animals, or be able to speak to animals","transform into any animal except a human at will, or only be a human","have all drink containers with holes in the bottom, or have no tap water and only bottled water","have your hands stick to any surface, or be insanely slippery"]

var noU = ["<:NoU:505886092642222091>","I'm rubber. You're glue. Bounces off me but sticks to you.","Ohhhhh! Call the medic cause you just got burned.","I know you are, but what am I?","Fingers your way."]

var songs = ["Billy Joel - Longest Time","1: Billy Joel - The Entertainer","1: Billy Joel - The River Of Dreams","1: Billy Joel - Uptown Girl","1: Billy Joel - Allentown","1: Billy Joel - Downeaster Alexa","1: Billy Joel - Inocent Man","Billy Joel - Goodnight Saigon","Billy Joel - We Didn't Start The Fire","Billy Joel - Piano Man","1: Weird Al Yankovic - Like a Surgeon","1: Weird Al Yankovic - Mission Statement","1: Weird Al Yankovic - Couch Potato","Weird Al Yankovic - White And Nerdy","Weird Al Yankovic - Word Crimes","1: Weird Al Yankovic - Another Tatoo","1: Weird Al Yankovic - The Saga Begins","Weird Al Yankovic - Tacky","1: Weird Al Yankovic - Ebay","Weird Al Yankovic - Handy","Weird Al Yankovic - Foil","Weird Al Yankovic - Living With A Hernia","Billy Joel - Matter Of Trust","Billy Joel - It's Still Rock And Roll To Me","1: Owl City - Fireflies","1: Weird Al Yankovic - First World Problems","Billy Joel - Pressure","Weird Al Yankovic - Amish Paradise","Billy Joel - Movin' Out","Billy Joel - New York State Of Mind","Billy Joel - This Is The Time","1: Billy Joel - I Go To Extremes","Billy Joel - Tell Her About It","Billy Joel - Keeping The Faith","Billy Joel - Captain Jack","1: Billy Joel - The Stranger","Billy Joel - Scenes From An Italian Resturant"]

var Jokes = ["My wife and I were happy for 20 years. Then, we met.","My goal is to live forever. So far so good.","People always laughed when I said I wanted to be a comedian. Well, nobody is laughing now.","My parents said I wouldn't get anywhere due to my procrastination. I told them, just you wait.","I bought gift wrap for my brother. When it was wrapped, I told them to wrap it in a different color so he would know when to stop.","My wife told me to stop impersonating a flamingo. I had to put my foot down.","If a person with multiple personalities threatens suicide, is it a hostage situation?","If Europe uses Euros, should Africa use Afros?","If time is money, is an ATM a time machine?","I'm writing a book. So far, I've got the page numbers done.","Everywhere is walking distance if you have the time.","Isn't a room always room temperature?","Don't tell jokes to a kleptomaniac. They take things literally.","I think all people that think they can read minds are idiots. You already knew that though.","An invisible man goes to the doctor's office. The nurse says, I'm afraid the doctor can't see you now.","Never get in an argument with an idiot. They'll bring you down to their level and beat you with experience.","Why is it called common knowledge if it is not that common?","If you punch yourself in the face and it really hurts, are you really strong or really weak? You're really stupid.","I went into a bookstore and asked the lady where the self-help section was. She said if she told me, it would defeat the purpose.","I went to a general store. They wouldn't let me buy anything specific.","I went to a torist booth and asked about people that were there a year ago.","If at first you don't succeed, skydiving isn't for you.","Whenever I think of the past, it brings back so many memories.","I don't like country music, but I don't mean to denigrate those who do. For those that like country music, denigrate means put down.","Everyone has photographic memory. Some just don't have film.","Old people always poke me at weddings and say that I am next. I started doing that to them at funerals.","All those who beleive in psychokinesis, raise my hand.","Ever noticed that it is a penny for your thoughts, yet your thoughts are your two cents? Someone is making apenny on the deal.","Right now, I'm having amnesia and deja vu at the same time. I feel like I've forgotten this before.","I think it is wrong that only one company makes monopoly.","What do you get when you cross a joke with a rhetorical question?","If you think that nobody cares about you, try missing a few payments.","How do you tell when you're out of invisible ink?","I went to a museum once that had the arms and heads of the statues from other museums.","I went to a place that said they served breakfast at any time. I orderd french toast during the renissance.","Hard work pays off in the future. Laziness pays off now.","The early bird gets the worm, but the second mouse gets the cheese.","I almost had a psychic girlfriend, but she left me before we met.","If everything seems to be going well, you must have overlooked something.","A clear concience is usually a sign of a bad memory.","I'm against picketing, but I don't know how to show it.","I don't have a girlfriend, but I have a friend who would be really mad if I said that.","I haven't slept for ten days because that would be to long.","I imagine that the inside of a cleaning bottle is really clean.","I saw a girl on the news that was born blind. The reporter said she didn't know the meaning of the word can't. I thought, that is sad. She can't see and she doesn't get simple contractions.","I like escalators. They can't break. They just become stairs.","I bought a seven dollar pen because I always lose my pens. I'm so sick of not caring.","I couldn't get my brakes fixed, so I just made my horn louder.","I have a vest. I my arms were cut off, it would be a jacket."]
var Mentions = ["bret","neha","chain ","whip ","Bot 001","jon","john"]
var MentResp = ["<@!486985623161274378>, you were mentioned in this message.","I heard it from a friend whooo . . . heard it from a friend whoooooo . . . heard it from another you've been messing around.","Chains and whips excite me.","Chains and whips excite me.","```md\nHello. I am Bot 001\n===================\nI am here to uhhh . . .\nWell, I have games and stuff.\n# try $help\nThis will show you my many features and how to get started.\nJust ping me for information.\n```","You mentioned that weird Yo-Yo kid.","You mentioned that weird Yo-Yo kid."]

var joins = ["485628261494292505","393586279964475393","486985623161274378"]
var active = [-1,-1,1]
var yn = ["on","error","off"]
var direct = [1,1,1]
var oO = ["public","error","private"]

var advice = ["430480264678998047","485628261494292505","486985623161274378"]

var art = ["Make me art. DM :bust_in_silhouette: The Creator :bust_in_silhouette: the art. Then he might add it."]

var pollUsers = []
var pollOn = false
var pollResults = []
var creator = 0
var pollQ = " "
var B = -1

var players = []
var start = 0
var each = [0,0,0]
var number = ["0","1","2","3"]
var played = []
var guesses = []
var correct = [0,0,0]
var win = []
var amount = 0

var begin = 0

var present = -1

var shakey = ["I wasn't paying attention","More details please","Only one way to find out","Why would you go there?","Why did you ask me?","Maybe","Definate maybe","I am not old enough to hear this","You know this","I think so","I promised never to reveal that","You cannot break me","Slip a twenty into the USB port and I'll tell you","I swore to never real that","As my dying words, it is . . .","Probably","Sure","The boys back at NASA told me yes","Yes","I've run the calculations and it is a yes","You bet","Probably not","Nah","Don't tell anyone, but no","No","No. Just no","**NO**. How dare you even suggest that!"]

var rank = ["<:rankC:511656106007724053>","<:rankU:511656106121101316>","<:rankR:511656106309976065>","<:rankE:511656106523885568>","<:rankM:511656106184146945>","<a:rankL:511656106485874689>","<a:rankF:511656106456645642>","<a:RankG:511726738418696212>"]
var circles = ["<:CircC:511656106024501279>","<:CircU:511656105785688085>","<:CircR:511726444032950281>","<:eCircleGem:512053375068536882>","<:mCircleGem:512053388704350209>","<a:lCircleGem:512053438507515924>","<a:CircF:512080871331725322>"]
var hearts = ["<:HeartC:511656106058055692>","<:uHeartGem:512070622105436170>","<:HeartR:511662408524234784>","<:HeartE:511726443743543318>","<:mHeartGem:512055342696497161>","<a:lHeartGem:512055356050898975>","<a:HeartF:511656106037215243>"]
var tears = ["<:cTearGem:512053323688443907>","<:uTearGem:512070600190066688>","<:rTearGem:512070664828747786>","<:TearE:511656106431348766>","<:mTearGem:512070714904543234>","<a:TearL:512080873152053260>","<a:TearF:512080871428194338>"]
var caveIn = ["Cit Rine Dig Site","Unack I.T. Rock Quarry","Roobie Cave","Ema Reld Quarry","Munes Tone Caverns","Lap Izlazil E. Abandoned Gem Mine","Flor I.T. Volcanic Research Facilities","Gar Net Secret Underground Mine"]

var advert = ["Buy my stuff","Buy it now","Get it while it is hot","Solves all your problems","Call 867 - 5309 today","It is solar powered","DVD format today only","Ages 12 and under","Extra kick for when you need it","Fire made easy"]

var richDudes = ["Blubering Bob's Burger Barn","Bill's Burrito Shack","Lincoln's Ice Cream Bar","Louie's Magic Elixir","Dave's Killer Bread","Fred's Flashlights","Slick Ed's Special Tapes","Mike's Maid Service","Pete's Solutions","Easy Fire Starters Inc."]

var product = [":hamburger: Burgers :hamburger:",":burrito: Burritos :burrito:",":ice_cream: Ice Cream :ice_cream:",":champagne_glass: Elixir :champagne_glass:",":french_bread: Bread :french_bread:",":flashlight: Flashlights :flashlight:",":dancer: Special Videos :dancer:",":girl: Maids :girl:",":syringe: Problem solvers :syringe:",":dvd: My Mix Tape :dvd:"]

var games = ["with the laws of physics","god","with the Space Time Continuum"]
var streams = ["every Despcatio"]
var hearings = ["the cries of orphans"]
var videos = ["you sleep"]

var tries = 0
var reading = "on https://www.coolmathgames.com/"
var laying = Math.floor(Math.random()*20) + 10
var activate = 0
bot.on('message', function (user, userID, channelID, message, evt, typing, embed){
    if (activate == 0){
        bot.setPresence({
            game: {
                type: 0,
                name: "on https://www.coolmathgames.com/"}})
        activate = 1
    }
    if (!bot.directMessages[channelID]) {
        serverID = bot.channels[channelID].guild_id;
        channel = bot.channels[channelID];
        member = bot.servers[serverID].members["495703108912021545"];
    }
    if (message.substring(0, 7) == b + "setBio" && users.includes(userID)){
        a = -1
        while (userID != users[a]){
           a = a + 1
        }
        timeStamp[a] = new Date()
        bio[a] = message.substring(8, message.length)
        bot.sendMessage({
            to: channelID,
            message: ":card_box: Your bio has been updated. :card_box:"})
    }
    if (message.substring(0, 4) == b + "bio"){
        var biol = userID
        if (message.length == 23){
            biol = message.substring(5, 23)
        }
        if (message.length == 26){
            biol = message.substring(7, 25)
        }
        if (users.includes(biol)){
            a = -1
            while (biol != users[a]){
                a = a + 1
            }
            var blipBlap = bio[a]
            bot.sendMessage({
                to: channelID,
                embed: {
                    author: {
                        name: bot.fixMessage("<@" + biol + ">").substring(1, bot.fixMessage("<@" + biol + ">").length) + "'s Custom Bio",
                        icon_url: 'https://cdn.discordapp.com/avatars/' + biol + '/' + bot.users[biol].avatar + '.png?size=32'},
                    title: blipBlap,
                    color: 3050971,
                    timestamp: timeStamp[a],
                    footer: {
                        icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
                        text: "Last updated:"}}})
        }
    }
    if (message.substring(0, 4) == b + "rps" && users.includes(userID)){
        a = -1
        while (users[a] != userID){
            a = a + 1
        }
        if (points[a] >= message.substring(7, message.length) && message.substring(7, message.length) >= 1){
            var rps = [":page_facing_up:",":new_moon:",":scissors:"]
            var RPS = ["Paper","Rock","Scissors"]
            var rockMaybe = Math.floor(Math.random()*3)
            var paperMaybe = 0
            if (message.substring(5, 6) == "p"){
                paperMaybe = 0
            }
            if (message.substring(5, 6) == "r"){
                paperMaybe = 1
            }
            if (message.substring(5, 6) == "s"){
                paperMaybe = 2
            }
            var scissorsMaybe = 1
            rockMaybe = ((rockMaybe - 1)*(-1)) + 1
            if ((paperMaybe == 2 && rockMaybe == 1) || (paperMaybe == 1 && rockMaybe == 0) || (paperMaybe == 0 && rockMaybe == 2)){
                scissorsMaybe = 0
            }
            if (paperMaybe == rockMaybe){
                scissorsMaybe = 2
            }
            var wingding = [":cry: You Loose :cry:",":tada: You Win :tada:","You tied"]
            var dingwing = ["You have lost ","You have won ","You kept your "]
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Rock Paper Scissors Battle",
                    color: 16**(2*(paperMaybe + 1)) - 1,
                    fields: [
                        {
                            name: "Your Choice",
                            value: rps[paperMaybe] + " " + RPS[paperMaybe] + " " + rps[paperMaybe],
                        },
                        {
                            name: "My Choice",
                            value: rps[rockMaybe] + " " + RPS[rockMaybe] + " " + rps[rockMaybe],
                        }]}
           }, function(err, res) {
               bot.sendMessage({
                   to: channelID,
                   message: wingding[scissorsMaybe] + " You bet " + Math.floor(message.substring(7, message.length)) + " " + wingding[scissorsMaybe] + "\n" + dingwing[scissorsMaybe] + Math.floor(message.substring(7, message.length)) + " gems."})
           })
           if (scissorsMaybe == 0){
               points[a] = points[a] - Math.floor(message.substring(7, message.length))
           }
           if (scissorsMaybe == 1){
               points[a] = points[a] + Math.floor(message.substring(7, message.length))
           }
        }
    }
    if (message.substring(0, 5) == b + "play"){
        var typio = Math.floor(Math.random()*4)
        if (typio == 0){
            var blipBlap = Math.floor(Math.random()*games.length)
            bot.setPresence({
                game: {
                    type: typio,
                    name: games[blipBlap]}})
        }
        if (typio == 1){
            var blipBlap = Math.floor(Math.random()*streams.length)
            bot.setPresence({
                game: {
                    type: typio,
                    name: streams[blipBlap]}})
        }
        if (typio == 2){
            var blipBlap = Math.floor(Math.random()*hearings.length)
            bot.setPresence({
                game: {
                    type: typio,
                    name: hearings[blipBlap]}})
        }
        if (typio == 3){
            var blipBlap = Math.floor(Math.random()*videos.length)
            bot.setPresence({
                game: {
                    type: typio,
                    name: videos[blipBlap]}})
        }
        bot.sendMessage({
            to: channelID,
            message: ":satellite: Request sent :satellite:"})
    }
    if (message.substring(0, 6) == b + "watch" && users.includes(userID)){
        adio = Math.floor(Math.random()*advert.length)
        thisTime = new Date();
            let thisHour = (thisTime.getHours() - 5);
                let thisDate = thisTime.getDate();
                let thisMinute = thisTime.getMinutes()
            let thisSecond = thisTime.getSeconds()
       a = -1
       while (users[a] != userID){
           a = a + 1
       }
       if ((thisSecond + 60*thisMinute + thisHour*3600 + thisDate*24*60*60) - time[a] >= 10){
           points[a] = points[a] + 2
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: richDudes[adio],
                    color: 16777216*adio/advert.length,
                    fields: [
                        {
                            name: product[adio],
                            value: advert[adio]}]}
           }, function(err, res) {
               bot.sendMessage({
                   to: channelID,
                   message: ":gem: You have gained 2 gems " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + " :gem:",
                   typing: true})
           })
       }
       if ((thisSecond + 60*thisMinute + thisHour*3600 + thisDate*24*60*60) - time[a] < 10){
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: richDudes[adio],
                    color: 16777216*adio/advert.length,
                    fields: [
                        {
                            name: product[adio],
                            value: advert[adio]}]}
           }, function(err, res) {
               var madBro = (thisSecond + 60*thisMinute + thisHour*3600 + thisDate*24*60*60) - time[a] + 10
               bot.sendMessage({
                   to: channelID,
                   message: ":hourglass: You were early by " + madBro + " seconds. Wait 10 seconds to try again. :hourglass_flowing_sand:",
                   typing: true})
           })
       }
       time[a] = thisSecond + 60*thisMinute + thisHour*3600 + thisDate*24*60*60
    }
    var spelunk = ["c","u","r","e","m","l","f","g"]
    if (message.substring(0, 7) == b + "travel" && users.includes(userID) && spelunk.includes(message.substring(8, 9))){
        a = -1
        while (userID != users[a]){
            a = a + 1
        }
        c = -1
        while (spelunk[c] != message.substring(8, 9)){
            c = c + 1
        }
        if (c == 0 && unlocked[a] >= 1){
            caves[a] = 0
            bot.sendMessage({
                to: channelID,
                message: "You have now moved to " + caveIn[0]})
        }
        if (c == 1 && unlocked[a] >= 2){
            caves[a] = 1
            bot.sendMessage({
                to: channelID,
                message: "You have now moved to " + caveIn[1]})
        }
        if (c == 2 && unlocked[a] >= 4){
            caves[a] = 2
            bot.sendMessage({
                to: channelID,
                message: "You have now moved to " + caveIn[2]})
        }
        if (c == 3 && unlocked[a] >= 8){
            caves[a] = 3
            bot.sendMessage({
                to: channelID,
                message: "You have now moved to " + caveIn[3]})
        }
        if (c == 4 && unlocked[a] >= 16){
            caves[a] = 4
            bot.sendMessage({
                to: channelID,
                message: "You have now moved to " + caveIn[4]})
        }
        if (c == 5 && unlocked[a] >= 32){
            caves[a] = 5
            bot.sendMessage({
                to: channelID,
                message: "You have now moved to " + caveIn[5]})
        }
        if (c == 6 && unlocked[a] >= 64){
            caves[a] = 6
            bot.sendMessage({
                to: channelID,
                message: "You have now moved to " + caveIn[6]})
        }
        if (c == 7 && unlocked[a] >= 128){
            caves[a] = 7
            bot.sendMessage({
                to: channelID,
                message: "You have now moved to " + caveIn[7]})
        }
    }
    if (message.substring(0, 5) == b + "busy" && userID == "486985623161274378"){
        bot.sendMessage({
            to: channelID,
            message: "Don't mess with me child. I'm busy."})
        bot.setPresence({
            status: "dnd"
        })
    }
    if (message.substring(0, 6) == b + "ready" && userID == "486985623161274378"){
        bot.sendMessage({
            to: channelID,
            message: "Play my games.\n.\n.\n. Is anyone there? Cause no one is playing my games."})
        bot.setPresence({
            status: "online"
        })
    }
    if (message.substring(0, 6) == b + "bored" && userID == "486985623161274378"){
        bot.sendMessage({
            to: channelID,
            message: "I'm bored and alone. So . . . Just another day for me."})
        bot.setPresence({
            status: "idle"
        })
    }
    if (message.substring(0, 10) == b + "subscribe" && users.includes(userID) == true){
        bot.sendMessage({
            to: channelID,
            message: "I'm sorry " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + ", but you have already subscribed to this bot."})
    }
    if (message.substring(0, 10) == b + "subscribe" && users.includes(userID) == false && bot.servers[serverID].members[userID].bot == false){
        users[users.length] = userID
        points[points.length] = 0
        thisDay[thisDay.length] = 0
        common[common.length] = 0
        uncommon[uncommon.length] = 0
        rare[rare.length] = 0
        epic[epic.length] = 0
        mythic[mythic.length] = 0
        legendary[legendary.length] = 0
        fabled[fabled.length] = 0
        cc[cc.length] = 0
        ch[ch.length] = 0
        ct[ct.length] = 0
        uc[uc.length] = 0
        uh[uh.length] = 0
        ut[ut.length] = 0
        rc[rc.length] = 0
        rh[rh.length] = 0
        rt[rt.length] = 0
        ec[ec.length] = 0
        eh[eh.length] = 0
        et[et.length] = 0
        mc[mc.length] = 0
        mh[mh.length] = 0
        mt[mt.length] = 0
        lc[lc.length] = 0
        lh[lh.length] = 0
        lt[lt.length] = 0
        fc[fc.length] = 0
        fh[fh.length] = 0
        ft[ft.length] = 0
        caves[caves.length] = 1
        unlocked[unlocked.length] = 0
        streak[streak.length] = 0
        console.log(userID + " joined today. He/she is called " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + ".")
        bot.sendMessage({
            to: channelID,
            message: ":tada: Congratulations " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + ", you are now a member! Try " + b + "help for games to play and ways to get gems. :tada:"})
    }
    if (message.substring(0, 7) == b + "rename" && message.length == 7){
        present = 0
        bot.sendMessage({
            to: channelID,
            message: ":satellite_orbital: Your request has been sent. Check to see how many servers I am in. :satellite_orbital:"})
        bot.setPresence({
            game: {
                type: 0,
                name: "in " + Object.keys(bot.servers).length + " servers. Say " + b + "help"
            }
        })
    }
    if (message.substring(0, 8) == b + "rename " && userID == "486985623161274378" && message.length > 7){
        reading = message.substring(8, message.length)
        bot.sendMessage({
            to: channelID,
            message: ":satellite_orbital: Your request has been sent. :satellite_orbital:"})
        bot.setPresence({
            game: {
                type: 0,
                name: reading
            }
        })
    }
    if (message.substring(0, 8) == b + "rename1" && userID == "486985623161274378" && message.length > 8){
        reading = message.substring(9, message.length)
        bot.sendMessage({
            to: channelID,
            message: ":satellite_orbital: Your request has been sent. :satellite_orbital:"})
        bot.setPresence({
            game: {
                type: 2,
                name: reading
            }
        })
    }
    if (message.substring(0, 8) == b + "rename2" && userID == "486985623161274378" && message.length > 8){
        reading = message.substring(9, message.length)
        bot.sendMessage({
            to: channelID,
            message: ":satellite_orbital: Your request has been sent. :satellite_orbital:"})
        bot.setPresence({
            game: {
                type: 3,
                name: reading
            }
        })
    }
    if (message.substring(0, 8) == b + "rename3" && userID == "486985623161274378" && message.length > 8){
        reading = message.substring(9, message.length)
        bot.sendMessage({
            to: channelID,
            message: ":satellite_orbital: Your request has been sent. :satellite_orbital:"})
        bot.setPresence({
            game: {
                type: 1,
                name: reading
            }
        })
    }
    if (message.substring(0, 6) == b + "caves" && users.includes(userID)){
        a = -1
        while (users[a] != userID){
            a = a + 1
        }
        var caverna = ":lock:"
        var cavernb = ":lock:"
        var cavernc = ":lock:"
        var cavernd = ":lock:"
        var caverne = ":lock:"
        var cavernf = ":lock:"
        var caverng = ":lock:"
        var cavernh = ":lock:"
        if (unlocked[a] >= 1){
            caverna = ":unlock:"
        }
        if (unlocked[a] >= 2){
            cavernb = ":unlock:"
        }
        if (unlocked[a] >= 4){
            cavernc = ":unlock:"
        }
        if (unlocked[a] >= 8){
            cavernd = ":unlock:"
        }
        if (unlocked[a] >= 16){
            caverne = ":unlock:"
        }
        if (unlocked[a] >= 32){
            cavernf = ":unlock:"
        }
        if (unlocked[a] >= 64){
            caverng = ":unlock:"
        }
        if (unlocked[a] >= 128){
            cavernh = ":unlock:"
        }
        bot.sendMessage({
            to: channelID,
            embed: {
                title: "Your Available Mines",
                color: 3050971,
                fields: [
                    {
                        name: "Use " + b + "daily to get a streak and unlock more.",
                        value: rank[0] + caverna + rank[1] + cavernb + rank[2] + cavernc + rank[3] + cavernd + "\n" + rank[4] + caverne + rank[5] + cavernf + rank[6] + caverng + rank[7] + cavernh}]}})
    }
    if (message.substring(0, 7) == b + "pickup" && users.includes(userID)){
        a = -1
        while (users[a] != userID){
            a = a + 1
        }
        if (points[a] == 0) {
            bot.sendMessage({
                to: channelID,
                message: bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + ", you are out of :gem: s. Try to earn more to play again."})
        }
    }
    if (message.substring(0, 7) == b + "pickup" && users.includes(userID)){
        a = -1
        while (users[a] != userID){
            a = a + 1
        }
        var pick = Math.floor(Math.random()*(2*laying - tries))
        if (points[a] >= 1){
            points[a] = points[a] - 1
            if (pick == 1){
                points[a] = points[a] + laying
                tries = 0
                bot.sendMessage({
                    to: channelID,
                    message: ":tada: You have successfully collected " + laying + " :gem: s."})
                laying = Math.floor(Math.random()*20) + 10
            }
            if (pick != 1){
                tries = tries + 1
                bot.sendMessage({
                    to: channelID,
                    message: "You failed to get the " + laying + " :gem: s."})
            }
        }
    }
    if (message.substring(0, 5) == b + "give" && users.includes(userID)){
        a = -1
        while (users[a] != userID) {
            a = a + 1
        }
        var give = 0
        var receive = -1
        if (message.substring(6, 7) == "<" && users.includes(message.substring(8, 26))) {
            receive = -1
            while (users[receive] != message.substring(8, 26)){
                receive = receive + 1
            }
            if (points[a] >= message.substring(27, message.length) && message.substring(27, message.length) == Math.floor(message.substring(27, message.length)) && message.substring(27, message.length) >= 1) {
                give = parseInt(message.substring(27, message.length))
                points[a] = points[a] - give
                points[receive] = points[receive] + give
            }
        }
        if (message.substring(6, 7) != "<" && users.includes(message.substring(6, 24))) {
            receive = -1
            while (users[receive] != message.substring(6, 24)){
                receive = receive + 1
            }
            if (points[a] >= message.substring(25, message.length) && message.substring(25, message.length) == Math.floor(message.substring(25, message.length)) && message.substring(25, message.length) >= 1) {
                give = parseInt(message.substring(25, message.length))
                points[a] = points[a] - give
                points[receive] = points[receive] + give
            }
        }
        bot.sendMessage({
            to: channelID,
            message: bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + ", you gave " + give + " :gem: to " + bot.fixMessage("<@" + users[receive] + ">").substring(1, bot.fixMessage("<@" + users[receive] + ">").length) + "."})
    }
    if (message.substring(0, 5) == b + "sell" && users.includes(userID)){
        a = -1
        while (users[a] != userID){
            a = a + 1
        }
        var gain = 0
        if (message.substring(6, 7) == "c" && parseInt(message.substring(8, message.length)) <= common[a]){
            common[a] = common[a] - parseInt(message.substring(8, message.length))
            gain = parseInt(message.substring(8, message.length))
        }
        if (message.substring(6, 7) == "u" && parseInt(message.substring(8, message.length)) <= uncommon[a]){
            uncommon[a] = uncommon[a] - parseInt(message.substring(8, message.length))
            gain = 2*parseInt(message.substring(8, message.length))
        }
        if (message.substring(6, 7) == "r" && parseInt(message.substring(8, message.length)) <= rare[a]){
            rare[a] = rare[a] - parseInt(message.substring(8, message.length))
            gain = 4*parseInt(message.substring(8, message.length))
        }
        if (message.substring(6, 7) == "e" && parseInt(message.substring(8, message.length)) <= epic[a]){
            epic[a] = epic[a] - parseInt(message.substring(8, message.length))
            gain = 8*parseInt(message.substring(8, message.length))
        }
        if (message.substring(6, 7) == "m" && parseInt(message.substring(8, message.length)) <= mythic[a]){
            mythic[a] = mythic[a] - parseInt(message.substring(8, message.length))
            gain = 16*parseInt(message.substring(8, message.length))
        }
        if (message.substring(6, 7) == "l" && parseInt(message.substring(8, message.length)) <= legendary[a]){
            legendary[a] = legendary[a] - parseInt(message.substring(8, message.length))
            gain = 32*parseInt(message.substring(8, message.length))
        }
        if (message.substring(6, 7) == "f" && parseInt(message.substring(8, message.length)) <= fabled[a]){
            fabled[a] = fabled[a] - parseInt(message.substring(8, message.length))
            gain = 64*parseInt(message.substring(8, message.length))
        }
        points[a] = points[a] + parseInt(gain)
        bot.sendMessage({
            to: channelID,
            message: "You sold " + message.substring(10, message.length) + " special gems for " + parseInt(gain) + " :gem:s."})
    }
    if (message.substring(0, 4) == b + "inv" && users.includes(userID) == false){
        bot.sendMessage({
            to: channelID,
            message: "You are not a member. Register."})
    }
    if (message.substring(0, 4) == b + "inv" && users.includes(userID)){
        a = 0
        while (a < users.length) {
            if (users[a] == userID) {
                var inventoryA = rank[0] + " : " + common[a] + " <:CGem:510851968433127456>" + "   " + cc[a] + circles[0] + "   " + ch[a] + hearts[0] + "   " + ct[a] + tears[0] +"\n" + rank[1] + " : " + uncommon[a] + " <:UGem:511656106443931685>" + "   " + uc[a] + circles[1] + "   " + uh[a] + hearts[1] + "   " + ut[a] + tears[1] +"\n" + rank[2] + " : " + rare[a] + " <:RGem:510851969045495810>" + "   " + rc[a] + circles[2] + "   " + rh[a] + hearts[2] + "   " + rt[a] + tears[2]
                var inventoryB = rank[3] + " : " + epic[a] + " <:EGem:510851968768671757>" + "   " + ec[a] + circles[3] + "   " + eh[a] + hearts[3] + "   " + et[a] + tears[3] +"\n" + rank[4] + " : " + mythic[a] + " <:MGem:510851969364000768>" + "   " + mc[a] + circles[4] + "   " + mh[a] + hearts[4] + "   " + mt[a] + tears[4] +"\n" + rank[5] + " : " + legendary[a] + " <a:LGem:510851971784114216>" + "   " + lc[a] + circles[5] + "   " + lh[a] + hearts[5] + "   " + lt[a] + tears[5] +"\n" + rank[6] + " : " + fabled[a] + " <a:FGem:510851971125739561>" + "   " + fc[a] + circles[6] + "   " + fh[a] + hearts[6] + "   " + ft[a] + tears[6]
                bot.sendMessage({
                    to: channelID,
                    message: inventoryA
                }, function(err, res) {
                    bot.sendMessage({
                        to: channelID,
                        message: inventoryB})
                })
            }
            a = a + 1
        }
    }
    if (message.substring(0, 5) == b + "mine" && users.includes(userID) == false){
        bot.sendMessage({
            to: channelID,
            message: "You are not a member. Register."})
    }
    if (message.substring(0, 5) == b + "mine" && users.includes(userID)){
        a = 0
        var pay = 0
        while (a < users.length) {
            if (users[a] == userID && points[a] >= 5 && caves[a] == 1) {
                pay = 1
                points[a] = points[a] - 5
                var randGem = Math.random()
                var winGem = 0
                if (randGem > 0.5) {
                    winGem = 1
                }
                if (randGem > 0.75) {
                    winGem = 2
                }
                if (randGem > 0.825) {
                    winGem = 3
                }
                if (randGem > 0.9375) {
                    winGem = 4
                }
                if (randGem > 0.96875) {
                    winGem = 5
                }
                if (randGem > 0.984375) {
                    winGem = 6
                }
                var shapeType = Math.random()
                var shape = 1
                if (shapeType > 0.31){
                    shape = 2
                }
                if (shapeType > 0.58){
                    shape = 3
                }
                if (shapeType > 0.81) {
                    shape = 4
                }
                if (winGem == 0) {
                    if (shape == 1) {
                        common[a] = common[a] + 1
                    }
                    if (shape == 2) {
                        cc[a] = cc[a] + 1
                    }
                    if (shape == 3) {
                        ch[a] = ch[a] + 1
                    }
                    if (shape == 4) {
                        ct[a] = ct[a] + 1
                    }
                }
                if (winGem == 1) {
                    if (shape == 1) {
                        uncommon[a] = uncommon[a] + 1
                    }
                    if (shape == 2) {
                        uc[a] = uc[a] + 1
                    }
                    if (shape == 3) {
                        uh[a] = uh[a] + 1
                    }
                    if (shape == 4) {
                        ut[a] = ut[a] + 1
                    }
                }
                if (winGem == 2) {
                    if (shape == 1) {
                        rare[a] = rare[a] + 1
                    }
                    if (shape == 2) {
                        rc[a] = rc[a] + 1
                    }
                    if (shape == 3) {
                        rh[a] = rh[a] + 1
                    }
                    if (shape == 4) {
                        rt[a] = rt[a] + 1
                    }
                }
                if (winGem == 3) {
                    if (shape == 1) {
                        epic[a] = epic[a] + 1
                    }
                    if (shape == 2) {
                        ec[a] = ec[a] + 1
                    }
                    if (shape == 3) {
                        eh[a] = eh[a] + 1
                    }
                    if (shape == 4) {
                        et[a] = et[a] + 1
                    }
                }
                if (winGem == 4) {
                    if (shape == 1) {
                        mythic[a] = mythic[a] + 1
                    }
                    if (shape == 2) {
                        mc[a] = mc[a] + 1
                    }
                    if (shape == 3) {
                        mh[a] = mh[a] + 1
                    }
                    if (shape == 4) {
                        mt[a] = mt[a] + 1
                    }
                }
                if (winGem == 5) {
                    if (shape == 1) {
                        legendary[a] = legendary[a] + 1
                    }
                    if (shape == 2) {
                        lc[a] = lc[a] + 1
                    }
                    if (shape == 3) {
                        lh[a] = lh[a] + 1
                    }
                    if (shape == 4) {
                        lt[a] = lt[a] + 1
                    }
                }
                if (winGem == 6) {
                    if (shape == 1) {
                        fabled[a] = fabled[a] + 1
                    }
                    if (shape == 2) {
                        fc[a] = fc[a] + 1
                    }
                    if (shape == 3) {
                        fh[a] = fh[a] + 1
                    }
                    if (shape == 4) {
                        ft[a] = ft[a] + 1
                    }
                }
                var mine = ["<:CGem:510851968433127456>","<:UGem:511656106443931685>","<:RGem:510851969045495810>","<:EGem:510851968768671757>","<:MGem:510851969364000768>","<a:LGem:510851971784114216>","<a:FGem:510851971125739561>"]
                if (shape == 1){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 5 :gem: to mine and won a " + mine[winGem]})
                }
                if (shape == 2){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 5 :gem: to mine and won a " + circles[winGem]})
                }
                if (shape == 3){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 5 :gem: to mine and won a " + hearts[winGem]})
                }
                if (shape == 4){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 5 :gem: to mine and won a " + tears[winGem]})
                }
            }
            if (users[a] == userID && points[a] >= 6 && caves[a] == 2) {
                pay = 1
                points[a] = points[a] - 6
                var randGem = Math.random()**(1/2)
                var winGem = 0
                if (randGem > 0.5) {
                    winGem = 1
                }
                if (randGem > 0.75) {
                    winGem = 2
                }
                if (randGem > 0.825) {
                    winGem = 3
                }
                if (randGem > 0.9375) {
                    winGem = 4
                }
                if (randGem > 0.96875) {
                    winGem = 5
                }
                if (randGem > 0.984375) {
                    winGem = 6
                }
                var shapeType = Math.random()**(1/2)
                var shape = 1
                if (shapeType > 0.31){
                    shape = 2
                }
                if (shapeType > 0.58){
                    shape = 3
                }
                if (shapeType > 0.81) {
                    shape = 4
                }
                if (winGem == 0) {
                    if (shape == 1) {
                        common[a] = common[a] + 1
                    }
                    if (shape == 2) {
                        cc[a] = cc[a] + 1
                    }
                    if (shape == 3) {
                        ch[a] = ch[a] + 1
                    }
                    if (shape == 4) {
                        ct[a] = ct[a] + 1
                    }
                }
                if (winGem == 1) {
                    if (shape == 1) {
                        uncommon[a] = uncommon[a] + 1
                    }
                    if (shape == 2) {
                        uc[a] = uc[a] + 1
                    }
                    if (shape == 3) {
                        uh[a] = uh[a] + 1
                    }
                    if (shape == 4) {
                        ut[a] = ut[a] + 1
                    }
                }
                if (winGem == 2) {
                    if (shape == 1) {
                        rare[a] = rare[a] + 1
                    }
                    if (shape == 2) {
                        rc[a] = rc[a] + 1
                    }
                    if (shape == 3) {
                        rh[a] = rh[a] + 1
                    }
                    if (shape == 4) {
                        rt[a] = rt[a] + 1
                    }
                }
                if (winGem == 3) {
                    if (shape == 1) {
                        epic[a] = epic[a] + 1
                    }
                    if (shape == 2) {
                        ec[a] = ec[a] + 1
                    }
                    if (shape == 3) {
                        eh[a] = eh[a] + 1
                    }
                    if (shape == 4) {
                        et[a] = et[a] + 1
                    }
                }
                if (winGem == 4) {
                    if (shape == 1) {
                        mythic[a] = mythic[a] + 1
                    }
                    if (shape == 2) {
                        mc[a] = mc[a] + 1
                    }
                    if (shape == 3) {
                        mh[a] = mh[a] + 1
                    }
                    if (shape == 4) {
                        mt[a] = mt[a] + 1
                    }
                }
                if (winGem == 5) {
                    if (shape == 1) {
                        legendary[a] = legendary[a] + 1
                    }
                    if (shape == 2) {
                        lc[a] = lc[a] + 1
                    }
                    if (shape == 3) {
                        lh[a] = lh[a] + 1
                    }
                    if (shape == 4) {
                        lt[a] = lt[a] + 1
                    }
                }
                if (winGem == 6) {
                    if (shape == 1) {
                        fabled[a] = fabled[a] + 1
                    }
                    if (shape == 2) {
                        fc[a] = fc[a] + 1
                    }
                    if (shape == 3) {
                        fh[a] = fh[a] + 1
                    }
                    if (shape == 4) {
                        ft[a] = ft[a] + 1
                    }
                }
                var mine = ["<:CGem:510851968433127456>","<:UGem:511656106443931685>","<:RGem:510851969045495810>","<:EGem:510851968768671757>","<:MGem:510851969364000768>","<a:LGem:510851971784114216>","<a:FGem:510851971125739561>"]
                if (shape == 1){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 6 :gem: to mine and won a " + mine[winGem]})
                }
                if (shape == 2){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 6 :gem: to mine and won a " + circles[winGem]})
                }
                if (shape == 3){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 6 :gem: to mine and won a " + hearts[winGem]})
                }
                if (shape == 4){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 6 :gem: to mine and won a " + tears[winGem]})
                }
            }
            if (users[a] == userID && points[a] >= 7 && caves[a] == 4) {
                pay = 1
                points[a] = points[a] - 7
                var randGem = Math.random()**(1/3)
                var winGem = 0
                if (randGem > 0.5) {
                    winGem = 1
                }
                if (randGem > 0.75) {
                    winGem = 2
                }
                if (randGem > 0.825) {
                    winGem = 3
                }
                if (randGem > 0.9375) {
                    winGem = 4
                }
                if (randGem > 0.96875) {
                    winGem = 5
                }
                if (randGem > 0.984375) {
                    winGem = 6
                }
                var shapeType = Math.random()**(1/3)
                var shape = 1
                if (shapeType > 0.31){
                    shape = 2
                }
                if (shapeType > 0.58){
                    shape = 3
                }
                if (shapeType > 0.81) {
                    shape = 4
                }
                if (winGem == 0) {
                    if (shape == 1) {
                        common[a] = common[a] + 1
                    }
                    if (shape == 2) {
                        cc[a] = cc[a] + 1
                    }
                    if (shape == 3) {
                        ch[a] = ch[a] + 1
                    }
                    if (shape == 4) {
                        ct[a] = ct[a] + 1
                    }
                }
                if (winGem == 1) {
                    if (shape == 1) {
                        uncommon[a] = uncommon[a] + 1
                    }
                    if (shape == 2) {
                        uc[a] = uc[a] + 1
                    }
                    if (shape == 3) {
                        uh[a] = uh[a] + 1
                    }
                    if (shape == 4) {
                        ut[a] = ut[a] + 1
                    }
                }
                if (winGem == 2) {
                    if (shape == 1) {
                        rare[a] = rare[a] + 1
                    }
                    if (shape == 2) {
                        rc[a] = rc[a] + 1
                    }
                    if (shape == 3) {
                        rh[a] = rh[a] + 1
                    }
                    if (shape == 4) {
                        rt[a] = rt[a] + 1
                    }
                }
                if (winGem == 3) {
                    if (shape == 1) {
                        epic[a] = epic[a] + 1
                    }
                    if (shape == 2) {
                        ec[a] = ec[a] + 1
                    }
                    if (shape == 3) {
                        eh[a] = eh[a] + 1
                    }
                    if (shape == 4) {
                        et[a] = et[a] + 1
                    }
                }
                if (winGem == 4) {
                    if (shape == 1) {
                        mythic[a] = mythic[a] + 1
                    }
                    if (shape == 2) {
                        mc[a] = mc[a] + 1
                    }
                    if (shape == 3) {
                        mh[a] = mh[a] + 1
                    }
                    if (shape == 4) {
                        mt[a] = mt[a] + 1
                    }
                }
                if (winGem == 5) {
                    if (shape == 1) {
                        legendary[a] = legendary[a] + 1
                    }
                    if (shape == 2) {
                        lc[a] = lc[a] + 1
                    }
                    if (shape == 3) {
                        lh[a] = lh[a] + 1
                    }
                    if (shape == 4) {
                        lt[a] = lt[a] + 1
                    }
                }
                if (winGem == 6) {
                    if (shape == 1) {
                        fabled[a] = fabled[a] + 1
                    }
                    if (shape == 2) {
                        fc[a] = fc[a] + 1
                    }
                    if (shape == 3) {
                        fh[a] = fh[a] + 1
                    }
                    if (shape == 4) {
                        ft[a] = ft[a] + 1
                    }
                }
                var mine = ["<:CGem:510851968433127456>","<:UGem:511656106443931685>","<:RGem:510851969045495810>","<:EGem:510851968768671757>","<:MGem:510851969364000768>","<a:LGem:510851971784114216>","<a:FGem:510851971125739561>"]
                if (shape == 1){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 7 :gem: to mine and won a " + mine[winGem]})
                }
                if (shape == 2){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 7 :gem: to mine and won a " + circles[winGem]})
                }
                if (shape == 3){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 7 :gem: to mine and won a " + hearts[winGem]})
                }
                if (shape == 4){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 7 :gem: to mine and won a " + tears[winGem]})
                }
            }
            if (users[a] == userID && points[a] >= 8 && caves[a] == 8) {
                pay = 1
                points[a] = points[a] - 8
                var randGem = Math.random()**(1/4)
                var winGem = 0
                if (randGem > 0.5) {
                    winGem = 1
                }
                if (randGem > 0.75) {
                    winGem = 2
                }
                if (randGem > 0.825) {
                    winGem = 3
                }
                if (randGem > 0.9375) {
                    winGem = 4
                }
                if (randGem > 0.96875) {
                    winGem = 5
                }
                if (randGem > 0.984375) {
                    winGem = 6
                }
                var shapeType = Math.random()**(1/4)
                var shape = 1
                if (shapeType > 0.31){
                    shape = 2
                }
                if (shapeType > 0.58){
                    shape = 3
                }
                if (shapeType > 0.81) {
                    shape = 4
                }
                if (winGem == 0) {
                    if (shape == 1) {
                        common[a] = common[a] + 1
                    }
                    if (shape == 2) {
                        cc[a] = cc[a] + 1
                    }
                    if (shape == 3) {
                        ch[a] = ch[a] + 1
                    }
                    if (shape == 4) {
                        ct[a] = ct[a] + 1
                    }
                }
                if (winGem == 1) {
                    if (shape == 1) {
                        uncommon[a] = uncommon[a] + 1
                    }
                    if (shape == 2) {
                        uc[a] = uc[a] + 1
                    }
                    if (shape == 3) {
                        uh[a] = uh[a] + 1
                    }
                    if (shape == 4) {
                        ut[a] = ut[a] + 1
                    }
                }
                if (winGem == 2) {
                    if (shape == 1) {
                        rare[a] = rare[a] + 1
                    }
                    if (shape == 2) {
                        rc[a] = rc[a] + 1
                    }
                    if (shape == 3) {
                        rh[a] = rh[a] + 1
                    }
                    if (shape == 4) {
                        rt[a] = rt[a] + 1
                    }
                }
                if (winGem == 3) {
                    if (shape == 1) {
                        epic[a] = epic[a] + 1
                    }
                    if (shape == 2) {
                        ec[a] = ec[a] + 1
                    }
                    if (shape == 3) {
                        eh[a] = eh[a] + 1
                    }
                    if (shape == 4) {
                        et[a] = et[a] + 1
                    }
                }
                if (winGem == 4) {
                    if (shape == 1) {
                        mythic[a] = mythic[a] + 1
                    }
                    if (shape == 2) {
                        mc[a] = mc[a] + 1
                    }
                    if (shape == 3) {
                        mh[a] = mh[a] + 1
                    }
                    if (shape == 4) {
                        mt[a] = mt[a] + 1
                    }
                }
                if (winGem == 5) {
                    if (shape == 1) {
                        legendary[a] = legendary[a] + 1
                    }
                    if (shape == 2) {
                        lc[a] = lc[a] + 1
                    }
                    if (shape == 3) {
                        lh[a] = lh[a] + 1
                    }
                    if (shape == 4) {
                        lt[a] = lt[a] + 1
                    }
                }
                if (winGem == 6) {
                    if (shape == 1) {
                        fabled[a] = fabled[a] + 1
                    }
                    if (shape == 2) {
                        fc[a] = fc[a] + 1
                    }
                    if (shape == 3) {
                        fh[a] = fh[a] + 1
                    }
                    if (shape == 4) {
                        ft[a] = ft[a] + 1
                    }
                }
                var mine = ["<:CGem:510851968433127456>","<:UGem:511656106443931685>","<:RGem:510851969045495810>","<:EGem:510851968768671757>","<:MGem:510851969364000768>","<a:LGem:510851971784114216>","<a:FGem:510851971125739561>"]
                if (shape == 1){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 8 :gem: to mine and won a " + mine[winGem]})
                }
                if (shape == 2){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 8 :gem: to mine and won a " + circles[winGem]})
                }
                if (shape == 3){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 8 :gem: to mine and won a " + hearts[winGem]})
                }
                if (shape == 4){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 8 :gem: to mine and won a " + tears[winGem]})
                }
            }
            if (users[a] == userID && points[a] >= 9 && caves[a] == 16) {
                pay = 1
                points[a] = points[a] - 5
                var randGem = Math.random()**(1/5)
                var winGem = 0
                if (randGem > 0.5) {
                    winGem = 1
                }
                if (randGem > 0.75) {
                    winGem = 2
                }
                if (randGem > 0.825) {
                    winGem = 3
                }
                if (randGem > 0.9375) {
                    winGem = 4
                }
                if (randGem > 0.96875) {
                    winGem = 5
                }
                if (randGem > 0.984375) {
                    winGem = 6
                }
                var shapeType = Math.random()**(1/5)
                var shape = 1
                if (shapeType > 0.31){
                    shape = 2
                }
                if (shapeType > 0.58){
                    shape = 3
                }
                if (shapeType > 0.81) {
                    shape = 4
                }
                if (winGem == 0) {
                    if (shape == 1) {
                        common[a] = common[a] + 1
                    }
                    if (shape == 2) {
                        cc[a] = cc[a] + 1
                    }
                    if (shape == 3) {
                        ch[a] = ch[a] + 1
                    }
                    if (shape == 4) {
                        ct[a] = ct[a] + 1
                    }
                }
                if (winGem == 1) {
                    if (shape == 1) {
                        uncommon[a] = uncommon[a] + 1
                    }
                    if (shape == 2) {
                        uc[a] = uc[a] + 1
                    }
                    if (shape == 3) {
                        uh[a] = uh[a] + 1
                    }
                    if (shape == 4) {
                        ut[a] = ut[a] + 1
                    }
                }
                if (winGem == 2) {
                    if (shape == 1) {
                        rare[a] = rare[a] + 1
                    }
                    if (shape == 2) {
                        rc[a] = rc[a] + 1
                    }
                    if (shape == 3) {
                        rh[a] = rh[a] + 1
                    }
                    if (shape == 4) {
                        rt[a] = rt[a] + 1
                    }
                }
                if (winGem == 3) {
                    if (shape == 1) {
                        epic[a] = epic[a] + 1
                    }
                    if (shape == 2) {
                        ec[a] = ec[a] + 1
                    }
                    if (shape == 3) {
                        eh[a] = eh[a] + 1
                    }
                    if (shape == 4) {
                        et[a] = et[a] + 1
                    }
                }
                if (winGem == 4) {
                    if (shape == 1) {
                        mythic[a] = mythic[a] + 1
                    }
                    if (shape == 2) {
                        mc[a] = mc[a] + 1
                    }
                    if (shape == 3) {
                        mh[a] = mh[a] + 1
                    }
                    if (shape == 4) {
                        mt[a] = mt[a] + 1
                    }
                }
                if (winGem == 5) {
                    if (shape == 1) {
                        legendary[a] = legendary[a] + 1
                    }
                    if (shape == 2) {
                        lc[a] = lc[a] + 1
                    }
                    if (shape == 3) {
                        lh[a] = lh[a] + 1
                    }
                    if (shape == 4) {
                        lt[a] = lt[a] + 1
                    }
                }
                if (winGem == 6) {
                    if (shape == 1) {
                        fabled[a] = fabled[a] + 1
                    }
                    if (shape == 2) {
                        fc[a] = fc[a] + 1
                    }
                    if (shape == 3) {
                        fh[a] = fh[a] + 1
                    }
                    if (shape == 4) {
                        ft[a] = ft[a] + 1
                    }
                }
                var mine = ["<:CGem:510851968433127456>","<:UGem:511656106443931685>","<:RGem:510851969045495810>","<:EGem:510851968768671757>","<:MGem:510851969364000768>","<a:LGem:510851971784114216>","<a:FGem:510851971125739561>"]
                if (shape == 1){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 9 :gem: to mine and won a " + mine[winGem]})
                }
                if (shape == 2){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 9 :gem: to mine and won a " + circles[winGem]})
                }
                if (shape == 3){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 9 :gem: to mine and won a " + hearts[winGem]})
                }
                if (shape == 4){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 9 :gem: to mine and won a " + tears[winGem]})
                }
            }
            if (users[a] == userID && points[a] >= 10 && caves[a] == 32) {
                pay = 1
                points[a] = points[a] - 10
                var randGem = Math.random()**(1/6)
                var winGem = 0
                if (randGem > 0.5) {
                    winGem = 1
                }
                if (randGem > 0.75) {
                    winGem = 2
                }
                if (randGem > 0.825) {
                    winGem = 3
                }
                if (randGem > 0.9375) {
                    winGem = 4
                }
                if (randGem > 0.96875) {
                    winGem = 5
                }
                if (randGem > 0.984375) {
                    winGem = 6
                }
                var shapeType = Math.random()**(1/6)
                var shape = 1
                if (shapeType > 0.31){
                    shape = 2
                }
                if (shapeType > 0.58){
                    shape = 3
                }
                if (shapeType > 0.81) {
                    shape = 4
                }
                if (winGem == 0) {
                    if (shape == 1) {
                        common[a] = common[a] + 1
                    }
                    if (shape == 2) {
                        cc[a] = cc[a] + 1
                    }
                    if (shape == 3) {
                        ch[a] = ch[a] + 1
                    }
                    if (shape == 4) {
                        ct[a] = ct[a] + 1
                    }
                }
                if (winGem == 1) {
                    if (shape == 1) {
                        uncommon[a] = uncommon[a] + 1
                    }
                    if (shape == 2) {
                        uc[a] = uc[a] + 1
                    }
                    if (shape == 3) {
                        uh[a] = uh[a] + 1
                    }
                    if (shape == 4) {
                        ut[a] = ut[a] + 1
                    }
                }
                if (winGem == 2) {
                    if (shape == 1) {
                        rare[a] = rare[a] + 1
                    }
                    if (shape == 2) {
                        rc[a] = rc[a] + 1
                    }
                    if (shape == 3) {
                        rh[a] = rh[a] + 1
                    }
                    if (shape == 4) {
                        rt[a] = rt[a] + 1
                    }
                }
                if (winGem == 3) {
                    if (shape == 1) {
                        epic[a] = epic[a] + 1
                    }
                    if (shape == 2) {
                        ec[a] = ec[a] + 1
                    }
                    if (shape == 3) {
                        eh[a] = eh[a] + 1
                    }
                    if (shape == 4) {
                        et[a] = et[a] + 1
                    }
                }
                if (winGem == 4) {
                    if (shape == 1) {
                        mythic[a] = mythic[a] + 1
                    }
                    if (shape == 2) {
                        mc[a] = mc[a] + 1
                    }
                    if (shape == 3) {
                        mh[a] = mh[a] + 1
                    }
                    if (shape == 4) {
                        mt[a] = mt[a] + 1
                    }
                }
                if (winGem == 5) {
                    if (shape == 1) {
                        legendary[a] = legendary[a] + 1
                    }
                    if (shape == 2) {
                        lc[a] = lc[a] + 1
                    }
                    if (shape == 3) {
                        lh[a] = lh[a] + 1
                    }
                    if (shape == 4) {
                        lt[a] = lt[a] + 1
                    }
                }
                if (winGem == 6) {
                    if (shape == 1) {
                        fabled[a] = fabled[a] + 1
                    }
                    if (shape == 2) {
                        fc[a] = fc[a] + 1
                    }
                    if (shape == 3) {
                        fh[a] = fh[a] + 1
                    }
                    if (shape == 4) {
                        ft[a] = ft[a] + 1
                    }
                }
                var mine = ["<:CGem:510851968433127456>","<:UGem:511656106443931685>","<:RGem:510851969045495810>","<:EGem:510851968768671757>","<:MGem:510851969364000768>","<a:LGem:510851971784114216>","<a:FGem:510851971125739561>"]
                if (shape == 1){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 10 :gem: to mine and won a " + mine[winGem]})
                }
                if (shape == 2){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 10 :gem: to mine and won a " + circles[winGem]})
                }
                if (shape == 3){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 10 :gem: to mine and won a " + hearts[winGem]})
                }
                if (shape == 4){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 10 :gem: to mine and won a " + tears[winGem]})
                }
            }
            if (users[a] == userID && points[a] >= 11 && caves[a] == 64) {
                pay = 1
                points[a] = points[a] - 11
                var randGem = Math.random()**(1/7)
                var winGem = 0
                if (randGem > 0.5) {
                    winGem = 1
                }
                if (randGem > 0.75) {
                    winGem = 2
                }
                if (randGem > 0.825) {
                    winGem = 3
                }
                if (randGem > 0.9375) {
                    winGem = 4
                }
                if (randGem > 0.96875) {
                    winGem = 5
                }
                if (randGem > 0.984375) {
                    winGem = 6
                }
                var shapeType = Math.random()**(1/7)
                var shape = 1
                if (shapeType > 0.31){
                    shape = 2
                }
                if (shapeType > 0.58){
                    shape = 3
                }
                if (shapeType > 0.81) {
                    shape = 4
                }
                if (winGem == 0) {
                    if (shape == 1) {
                        common[a] = common[a] + 1
                    }
                    if (shape == 2) {
                        cc[a] = cc[a] + 1
                    }
                    if (shape == 3) {
                        ch[a] = ch[a] + 1
                    }
                    if (shape == 4) {
                        ct[a] = ct[a] + 1
                    }
                }
                if (winGem == 1) {
                    if (shape == 1) {
                        uncommon[a] = uncommon[a] + 1
                    }
                    if (shape == 2) {
                        uc[a] = uc[a] + 1
                    }
                    if (shape == 3) {
                        uh[a] = uh[a] + 1
                    }
                    if (shape == 4) {
                        ut[a] = ut[a] + 1
                    }
                }
                if (winGem == 2) {
                    if (shape == 1) {
                        rare[a] = rare[a] + 1
                    }
                    if (shape == 2) {
                        rc[a] = rc[a] + 1
                    }
                    if (shape == 3) {
                        rh[a] = rh[a] + 1
                    }
                    if (shape == 4) {
                        rt[a] = rt[a] + 1
                    }
                }
                if (winGem == 3) {
                    if (shape == 1) {
                        epic[a] = epic[a] + 1
                    }
                    if (shape == 2) {
                        ec[a] = ec[a] + 1
                    }
                    if (shape == 3) {
                        eh[a] = eh[a] + 1
                    }
                    if (shape == 4) {
                        et[a] = et[a] + 1
                    }
                }
                if (winGem == 4) {
                    if (shape == 1) {
                        mythic[a] = mythic[a] + 1
                    }
                    if (shape == 2) {
                        mc[a] = mc[a] + 1
                    }
                    if (shape == 3) {
                        mh[a] = mh[a] + 1
                    }
                    if (shape == 4) {
                        mt[a] = mt[a] + 1
                    }
                }
                if (winGem == 5) {
                    if (shape == 1) {
                        legendary[a] = legendary[a] + 1
                    }
                    if (shape == 2) {
                        lc[a] = lc[a] + 1
                    }
                    if (shape == 3) {
                        lh[a] = lh[a] + 1
                    }
                    if (shape == 4) {
                        lt[a] = lt[a] + 1
                    }
                }
                if (winGem == 6) {
                    if (shape == 1) {
                        fabled[a] = fabled[a] + 1
                    }
                    if (shape == 2) {
                        fc[a] = fc[a] + 1
                    }
                    if (shape == 3) {
                        fh[a] = fh[a] + 1
                    }
                    if (shape == 4) {
                        ft[a] = ft[a] + 1
                    }
                }
                var mine = ["<:CGem:510851968433127456>","<:UGem:511656106443931685>","<:RGem:510851969045495810>","<:EGem:510851968768671757>","<:MGem:510851969364000768>","<a:LGem:510851971784114216>","<a:FGem:510851971125739561>"]
                if (shape == 1){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 11 :gem: to mine and won a " + mine[winGem]})
                }
                if (shape == 2){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 11 :gem: to mine and won a " + circles[winGem]})
                }
                if (shape == 3){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 11 :gem: to mine and won a " + hearts[winGem]})
                }
                if (shape == 4){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 11 :gem: to mine and won a " + tears[winGem]})
                }
            }
            if (users[a] == userID && points[a] >= 12 && caves[a] == 128) {
                pay = 1
                points[a] = points[a] - 5
                var randGem = Math.random()**(1/8)
                var winGem = 0
                if (randGem > 0.5) {
                    winGem = 1
                }
                if (randGem > 0.75) {
                    winGem = 2
                }
                if (randGem > 0.825) {
                    winGem = 3
                }
                if (randGem > 0.9375) {
                    winGem = 4
                }
                if (randGem > 0.96875) {
                    winGem = 5
                }
                if (randGem > 0.984375) {
                    winGem = 6
                }
                var shapeType = Math.random()**(1/8)
                var shape = 1
                if (shapeType > 0.31){
                    shape = 2
                }
                if (shapeType > 0.58){
                    shape = 3
                }
                if (shapeType > 0.81) {
                    shape = 4
                }
                if (winGem == 0) {
                    if (shape == 1) {
                        common[a] = common[a] + 1
                    }
                    if (shape == 2) {
                        cc[a] = cc[a] + 1
                    }
                    if (shape == 3) {
                        ch[a] = ch[a] + 1
                    }
                    if (shape == 4) {
                        ct[a] = ct[a] + 1
                    }
                }
                if (winGem == 1) {
                    if (shape == 1) {
                        uncommon[a] = uncommon[a] + 1
                    }
                    if (shape == 2) {
                        uc[a] = uc[a] + 1
                    }
                    if (shape == 3) {
                        uh[a] = uh[a] + 1
                    }
                    if (shape == 4) {
                        ut[a] = ut[a] + 1
                    }
                }
                if (winGem == 2) {
                    if (shape == 1) {
                        rare[a] = rare[a] + 1
                    }
                    if (shape == 2) {
                        rc[a] = rc[a] + 1
                    }
                    if (shape == 3) {
                        rh[a] = rh[a] + 1
                    }
                    if (shape == 4) {
                        rt[a] = rt[a] + 1
                    }
                }
                if (winGem == 3) {
                    if (shape == 1) {
                        epic[a] = epic[a] + 1
                    }
                    if (shape == 2) {
                        ec[a] = ec[a] + 1
                    }
                    if (shape == 3) {
                        eh[a] = eh[a] + 1
                    }
                    if (shape == 4) {
                        et[a] = et[a] + 1
                    }
                }
                if (winGem == 4) {
                    if (shape == 1) {
                        mythic[a] = mythic[a] + 1
                    }
                    if (shape == 2) {
                        mc[a] = mc[a] + 1
                    }
                    if (shape == 3) {
                        mh[a] = mh[a] + 1
                    }
                    if (shape == 4) {
                        mt[a] = mt[a] + 1
                    }
                }
                if (winGem == 5) {
                    if (shape == 1) {
                        legendary[a] = legendary[a] + 1
                    }
                    if (shape == 2) {
                        lc[a] = lc[a] + 1
                    }
                    if (shape == 3) {
                        lh[a] = lh[a] + 1
                    }
                    if (shape == 4) {
                        lt[a] = lt[a] + 1
                    }
                }
                if (winGem == 6) {
                    if (shape == 1) {
                        fabled[a] = fabled[a] + 1
                    }
                    if (shape == 2) {
                        fc[a] = fc[a] + 1
                    }
                    if (shape == 3) {
                        fh[a] = fh[a] + 1
                    }
                    if (shape == 4) {
                        ft[a] = ft[a] + 1
                    }
                }
                var mine = ["<:CGem:510851968433127456>","<:UGem:511656106443931685>","<:RGem:510851969045495810>","<:EGem:510851968768671757>","<:MGem:510851969364000768>","<a:LGem:510851971784114216>","<a:FGem:510851971125739561>"]
                if (shape == 1){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 12 :gem: to mine and won a " + mine[winGem]})
                }
                if (shape == 2){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 12 :gem: to mine and won a " + circles[winGem]})
                }
                if (shape == 3){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 12 :gem: to mine and won a " + hearts[winGem]})
                }
                if (shape == 4){
                    bot.sendMessage({
                        to: channelID,
                        message: ":pick: You spent 12 :gem: to mine and won a " + tears[winGem]})
                }
            }
            a = a + 1
        }
    }
    if (message.substring(0, 6) == b + "daily" && users.includes(userID)) {
        thisTime = new Date();
            let thisHour = (thisTime.getHours() - 5);
                let thisDate = thisTime.getDate();
                let thisMinute = thisTime.getMinutes()
            let thisSecond = thisTime.getSeconds()
        a = 0
        var dayCash = 0
        var bonus = Math.floor(Math.random()*40) + 80
        while (a < users.length) {
            if (users[a] == userID) {
                if (thisDay[a] == thisTime.getDate()) {
                    bot.sendMessage({
                        to: channelID,
                        message: ":stopwatch: " + bot.fixMessage("<@" + users[a] + ">").substring(1, bot.fixMessage("<@" + users[a] + ">").length) + ", you will have to wait for tomorrow to get more gems. :stopwatch:"})
                }
                if (thisDay[a] != thisTime.getDate()) {
                    var lazyVar = 0
                    if (thisDay[a] + 1 == thisTime.getDate() || thisDay[a] - 30 == thisTime.getDate() || thisDay[a] - 29 == thisTime.getDate()) {
                        streak[a] = streak[a] + 1
                    }
                    if (thisDay[a] + 1 != thisTime.getDate()) {
                        streak[a] = 1
                    }
                    if (streak[a] > unlocked[a]){
                        unlocked[a] = streak[a]
                        lazyVar = 1
                    }
                    thisDay[a] = thisTime.getDate()
                    points[a] = points[a] + bonus + Math.floor(Math.random()*streak[a])
                    bonus = bonus + Math.floor(Math.random()*streak[a])
                    var extra = ""
                    if (unlocked[a] == 1 && lazyVar == 1){
                        extra = "\n:key: You unlocked a new cave. You can now access the **" + caveIn[0] + "**. :key:"
                    }
                    if (unlocked[a] == 2 && lazyVar == 1){
                        extra = "\n:key: You unlocked a new cave. You can now access the **" + caveIn[1] + "**. :key:"
                    }
                    if (unlocked[a] == 4 && lazyVar == 1){
                        extra = "\n:key: You unlocked a new cave. You can now access the **" + caveIn[2] + "**. :key:"
                    }
                    if (unlocked[a] == 8 && lazyVar == 1){
                        extra = "\n:key: You unlocked a new cave. You can now access the **" + caveIn[3] + "**. :key:"
                    }
                    if (unlocked[a] == 16 && lazyVar == 1){
                        extra = "\n:key: You unlocked a new cave. You can now access the **" + caveIn[4] + "**. :key:"
                    }
                    if (unlocked[a] == 32 && lazyVar == 1){
                        extra = "\n:key: You unlocked a new cave. You can now access the **" + caveIn[5] + "**. :key:"
                    }
                    if (unlocked[a] == 64 && lazyVar == 1){
                        extra = "\n:key: You unlocked a new cave. You can now access the **" + caveIn[6] + "**. :key:"
                    }
                    if (unlocked[a] == 128 && lazyVar == 1){
                        extra = "\n:key: You unlocked a new cave. You can now access the **" + caveIn[7] + "**. :key:"
                    }
                    bot.sendMessage({
                        to: channelID,
                        message: bot.fixMessage("<@" + users[a] + ">").substring(1, bot.fixMessage("<@" + users[a] + ">").length) + ", you have recieved :gem: " + bonus.toString() + " :gem: bonus gems.\n:tada: Congratulations. You are on a " + streak[a] + " day streak. Come back tomorrow for more. :tada:" + extra})
                }
            }
            a = a + 1
        }
    }
    if (message.substring(0, 4) == b + "top" && users.includes(userID)) {
        var top = Math.max.apply(null, points)
        a = 0
        var tops = ""
        var topper = 0
        while (a < points.length) {
            if (points[a] == top) {
                topper = topper + 1
                tops = tops + "\n:first_place: " + bot.fixMessage("<@" + users[a] + ">").substring(1, bot.fixMessage("<@" + users[a] + ">").length) + "\nGems: **" + top.toString() + "**"
            }
            a = a + 1
        }
        if (topper > 1) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Top B-Bucks",
                    color: 60000,
                    fields: [
                        {
                            name: "The current leaders are:",
                            value: tops}]}})
        }
        if (topper == 1) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Top Gems",
                    color: 1234567,
                    fields: [
                        {
                            name: "The current leader is:",
                            value: tops}]}})
        }
    }
    if ((message.substring(0, 5) == b + "cash" || message.substring(0, 6) == b + "money" || message.substring(0, 6) == b + "bucks" || message.substring(0, 9) == b + "currency" || message.substring(0, 8) == b + "balance") && users.includes(userID)) {
        a = -1
        while (users[a] != userID) {
            a = a + 1
        }
        if (users[a] == userID) {
            bot.sendMessage({
                to: channelID,
                message: ":gem: **| " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + "**, you have **" + points[a] + " gems.**"})
        }
    }
    if (players.length < 3 && players.includes(userID) && message == b + "join" && users.includes(userID)) {
        bot.sendMessage({
            to: channelID,
            message: "I'm sorry " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + " but you have already joined this round."})
    }
    if (players.length == 3 && message == b + "join" && users.includes(userID)) {
        bot.sendMessage({
            to: channelID,
            message: "I'm sorry " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + " but enough people have already joined this round. Be quick next round. To play, simply say **" + b + "join**"})
    }
    if (message == b + "join" && users.includes(userID) == false) {
        bot.sendMessage({
            to: channelID,
            message: "I'm sorry " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + " but you are not a registered member. Please contact the owner or a member of this program to find out how to play."})
    }
    if (players.length < 3 && players.includes(userID) == false && message == b + "join" && users.includes(userID)) {
        bot.sendMessage({
            to: channelID,
            message: "You have successfully joined this round."})
        players[players.length] = userID
    }
    if (message.substring(0, 7) == b + "played" && users.includes(userID) == false) {
        bot.sendMessage({
            to: channelID,
            message: "I'm sorry " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + " but you are not a registered member. Please contact the owner or a member of this program to find out how to play."})
    }
    if (message.substring(0, 7) == b + "played" && users.includes(userID)) {
        if (played.length == 0) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Trust Game",
                    color: 3050971,
                    fields: [
                        {
                            name: "Played",
                            value: ":negative_squared_cross_mark: " + bot.fixMessage("<@" + players[0] + ">").substring(1, bot.fixMessage("<@" + players[0] + ">").length) + "\n:negative_squared_cross_mark: " + bot.fixMessage("<@" + players[1] + ">").substring(1, bot.fixMessage("<@" + players[1] + ">").length) + "\n:negative_squared_cross_mark: " + bot.fixMessage("<@" + players[2] + ">").substring(1, bot.fixMessage("<@" + players[2] + ">").length)}]}})
        }
        if (played.length == 1 && played.includes(players[0])) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Trust Game",
                    color: 3050971,
                    fields: [
                        {
                            name: "Played",
                            value: ":white_check_mark: " + bot.fixMessage("<@" + players[0] + ">").substring(1, bot.fixMessage("<@" + players[0] + ">").length) + "\n:negative_squared_cross_mark: " + bot.fixMessage("<@" + players[1] + ">").substring(1, bot.fixMessage("<@" + players[1] + ">").length) + "\n:negative_squared_cross_mark: " + bot.fixMessage("<@" + players[2] + ">").substring(1, bot.fixMessage("<@" + players[2] + ">").length)}]}})
        }
        if (played.length == 1 && played.includes(players[1])) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Trust Game",
                    color: 3050971,
                    fields: [
                        {
                            name: "Played",
                            value: ":negative_squared_cross_mark: " + bot.fixMessage("<@" + players[0] + ">").substring(1, bot.fixMessage("<@" + players[0] + ">").length) + "\n:white_check_mark: " + bot.fixMessage("<@" + players[1] + ">").substring(1, bot.fixMessage("<@" + players[1] + ">").length) + "\n:negative_squared_cross_mark: " + bot.fixMessage("<@" + players[2] + ">").substring(1, bot.fixMessage("<@" + players[2] + ">").length)}]}})
        }
        if (played.length == 1 && played.includes(players[2])) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Trust Game",
                    color: 3050971,
                    fields: [
                        {
                            name: "Played",
                            value: ":negative_squared_cross_mark: " + bot.fixMessage("<@" + players[0] + ">").substring(1, bot.fixMessage("<@" + players[0] + ">").length) + "\n:negative_squared_cross_mark: " + bot.fixMessage("<@" + players[1] + ">").substring(1, bot.fixMessage("<@" + players[1] + ">").length) + "\n:white_check_mark: " + bot.fixMessage("<@" + players[2] + ">").substring(1, bot.fixMessage("<@" + players[2] + ">").length)}]}})
        }
        if (played.length == 2 && played.includes(players[0]) == false) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Trust Game",
                    color: 3050971,
                    fields: [
                        {
                            name: "Played",
                            value: ":negative_squared_cross_mark: " + bot.fixMessage("<@" + players[0] + ">").substring(1, bot.fixMessage("<@" + players[0] + ">").length) + "\n:white_check_mark: " + bot.fixMessage("<@" + players[1] + ">").substring(1, bot.fixMessage("<@" + players[1] + ">").length) + "\n:white_check_mark: " + bot.fixMessage("<@" + players[2] + ">").substring(1, bot.fixMessage("<@" + players[2] + ">").length)}]}})
        }
        if (played.length == 2 && played.includes(players[1]) == false) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Trust Game",
                    color: 3050971,
                    fields: [
                        {
                            name: "Played",
                            value: ":white_check_mark: " + bot.fixMessage("<@" + players[0] + ">").substring(1, bot.fixMessage("<@" + players[0] + ">").length) + "\n:negative_squared_cross_mark: " + bot.fixMessage("<@" + players[1] + ">").substring(1, bot.fixMessage("<@" + players[1] + ">").length) + "\n:white_check_mark: " + bot.fixMessage("<@" + players[2] + ">").substring(1, bot.fixMessage("<@" + players[2] + ">").length)}]}})
        }
        if (played.length == 2 && played.includes(players[2]) == false) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Trust Game",
                    color: 3050971,
                    fields: [
                        {
                            name: "Played",
                            value: ":white_check_mark: " + bot.fixMessage("<@" + players[0] + ">").substring(1, bot.fixMessage("<@" + players[0] + ">").length) + "\n:white_check_mark: " + bot.fixMessage("<@" + players[1] + ">").substring(1, bot.fixMessage("<@" + played[1] + ">").length) + "\n:negative_squared_cross_mark: " + bot.fixMessage("<@" + players[2] + ">").substring(1, bot.fixMessage("<@" + players[2] + ">").length)}]}})
        }
        if (played.length == 3) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Trust Game",
                    color: 3050971,
                    fields: [
                        {
                            name: "Played",
                            value: ":white_check_mark: " + bot.fixMessage("<@" + played[0] + ">").substring(1, bot.fixMessage("<@" + played[0] + ">").length) + "\n:white_check_mark: " + bot.fixMessage("<@" + played[1] + ">").substring(1, bot.fixMessage("<@" + played[1] + ">").length) + "\n:white_check_mark: " + bot.fixMessage("<@" + played[2] + ">").substring(1, bot.fixMessage("<@" + played[2] + ">").length)}]}})
        }
    }
    if (message.substring(0, 8) == b + "players") {
        if (players.length == 0) {
            bot.sendMessage({
                to: channelID,
                message: "No one has joined this round yet. To join this round, simply say **" + b + "join**"})
        }
        if (players.length == 1) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Players",
                    color: 3050971,
                    fields: [
                        {
                            name: "The players in this round are:",
                            value: bot.fixMessage("<@" + players[0] + ">").substring(1, bot.fixMessage("<@" + players[0] + ">").length) }]}})
        }
        if (players.length == 2) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Players",
                    color: 3050971,
                    fields: [
                        {
                            name: "The players in this round are:",
                            value: bot.fixMessage("<@" + players[0] + ">").substring(1, bot.fixMessage("<@" + players[0] + ">").length) + "\n" + bot.fixMessage("<@" + players[1] + ">").substring(1, bot.fixMessage("<@" + players[1] + ">").length)}]}})
        }
        if (players.length == 3) {
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Players",
                    color: 3050971,
                    fields: [
                        {
                            name: "The players in this round are:",
                            value: bot.fixMessage("<@" + players[0] + ">").substring(1, bot.fixMessage("<@" + players[0] + ">").length) + "\n" + bot.fixMessage("<@" + players[1] + ">").substring(1, bot.fixMessage("<@" + players[1] + ">").length) + "\n" + bot.fixMessage("<@" + players[2] + ">").substring(1, bot.fixMessage("<@" + players[2] + ">").length)}]}})
        }
    }
    if (players.length == 3 && start == 0) {
        start = 1
        each = [number[Math.floor(Math.random()*2)],number[Math.floor(Math.random()*2)],number[Math.floor(Math.random()*2)]]
        bot.sendMessage({
            to: players[0],
            message: "You have received a " + number[each[0]] + ". Be honest or lie, but win. Please try."})
        bot.sendMessage({
            to: players[1],
            message: "You have received a " + number[each[1]] + ". Be honest or lie, but win. Please try."})
        bot.sendMessage({
            to: players[2],
            message: "You have received a " + number[each[2]] + ". Be honest or lie, but win. Please try."})
    }
    if (start == 1 && message.substring(0, 6) == b + "guess" && played.includes(userID) == true && players.includes(userID)) {
        bot.sendMessage({
            to: channelID,
            message: "You have already joined."})
    }
    if (start == 0 && message.substring(0, 6) == b + "guess" && played.includes(userID) == false && users.includes(userID)) {
        bot.sendMessage({
            to: channelID,
            message: "The game has not begun yet."})
    }
    if (start == 1 && message.substring(0, 6) == b + "guess" && users.includes(userID) == false) {
        bot.sendMessage({
            to: channelID,
            message: "You are not a registered member of this program. Ask the owner to find out how to join."})
    }
    if (start == 1 && message.substring(0, 6) == b + "guess" && played.includes(userID) == false && players.includes(userID) && (message.substring(7, 8) != "0" && message.substring(7, 8) != "1" && message.substring(7, 8) != "2" && message.substring(7, 8) != "3")) {
        bot.sendMessage({
            to: channelID,
            message: ":no_entry_sign: Invalid guess. Please try again with a valid guess. :no_entry_sign:"})
    }
    if (start == 1 && message.substring(0, 6) == b + "guess" && played.includes(userID) == false && players.includes(userID) && (message.substring(7, 8) == "0" || message.substring(7, 8) == "1" || message.substring(7, 8) == "2" || message.substring(7, 8) == "3")) {
        guesses[guesses.length] = parseInt(message.substring(7, 8))
        played[played.length] = userID
        bot.sendMessage({
            to: channelID,
            message: "You have guessed that there were " + guesses[guesses.length - 1] + " total 1s given out."})
    }
    if (start == 1 && guesses.length == 3) {
        start = 0
        bot.sendMessage({
            to: channelID,
            message: "The results are in."})
        if (guesses[0] != number[parseInt(each[0]) + parseInt(each[1]) + parseInt(each[2])]) {
            correct[0] = 0
            win[0] = played[0]
            bot.sendMessage({
                to: played[0],
                message: "You were wrong " + bot.fixMessage("<@" + played[0] + ">").substring(1, bot.fixMessage("<@" + played[0] + ">").length) + "."})
        }
        if (guesses[1] != number[parseInt(each[0]) + parseInt(each[1]) + parseInt(each[2])]) {
            correct[1] = 0
            win[win.length] = played[1]
            bot.sendMessage({
                to: played[1],
                message: "You were wrong " + bot.fixMessage("<@" + played[1] + ">").substring(1, bot.fixMessage("<@" + played[1] + ">").length) + "."})
        }
        if (guesses[2] != number[parseInt(each[0]) + parseInt(each[1]) + parseInt(each[2])]) {
            correct[2] = 0
            win[win.length] = played[2]
            bot.sendMessage({
                to: played[2],
                message: "You were wrong " + bot.fixMessage("<@" + played[2] + ">").substring(1, bot.fixMessage("<@" + played[2] + ">").length) + "."})
        }
        if (guesses[0] == number[parseInt(each[0]) + parseInt(each[1]) + parseInt(each[2])]) {
            correct[0] = 1
            win[0] = played[0]
            bot.sendMessage({
                to: played[0],
                message: ":tada: You were right " + bot.fixMessage("<@" + played[0] + ">").substring(1, bot.fixMessage("<@" + played[0] + ">").length) + ". :tada:"})
        }
        if (guesses[1] == number[parseInt(each[0]) + parseInt(each[1]) + parseInt(each[2])]) {
            correct[1] = 1
            win[win.length] = played[1]
            bot.sendMessage({
                to: played[1],
                message: ":tada: You were right " + bot.fixMessage("<@" + played[1] + ">").substring(1, bot.fixMessage("<@" + played[1] + ">").length) + ". :tada:"})
        }
        if (guesses[2] == number[parseInt(each[0]) + parseInt(each[1]) + parseInt(each[2])]) {
            correct[2] = 1
            win[win.length] = played[2]
            bot.sendMessage({
                to: played[2],
                message: ":tada: You were right " + bot.fixMessage("<@" + played[2] + ">").substring(1, bot.fixMessage("<@" + played[2] + ">").length) + ". :tada:"})
        }
        amount = 0
        if (win.length > 0) {
            amount = 6/(win.length)
        }
        a = 0
        var f = 0
        while (a < users.length) {
            f = 0
            while (f < win.length) {
                if (users[a] == win[f]) {
                    points[a] = points[a] + amount
                }
                f = f + 1
            }
            a = a + 1
        }
        played = []
        players = []
        win = []
        guesses = []
        correct = [0,0,0]
    }
    if (evt.d.mentions.length > 0) {
        if (evt.d.mentions[0].id == "393586279964475393") {
            bot.sendMessage({
                to: channelID,
                message: "OwO"});
        }
        if (evt.d.mentions[0].id == "495703108912021545" && userID != "495703108912021545") {
            bot.sendMessage({
                to: channelID,
                message: "```md\nI am Bot 001\n============\nThis is the information page.\n``````prolog\nPrefix: $\n  Help: $help\nFriend: yes\n    IQ: number 1 oh yeah\n```"});
        }
        if (evt.d.mentions[0].id == "193104123506196481") {
            bot.sendMessage({
                to: channelID,
                message: "Get ready for the <:catttt:505927745222475776>"});
        }
        if (evt.d.mentions[0].id == "485628261494292505") {
            bot.sendMessage({
                to: channelID,
                message: "I heard it from a friend whooo . . . heard it from a friend whoooooo . . . heard it from another you've been messing around."});
        }
        if (evt.d.mentions[0].id == "486985623161274378" && userID != "495703108912021545") {
            bot.sendMessage({
                to: channelID,
                message: "You mentioned my master."});
        }
    }
    if (joins.includes(userID)) {
        a = -1
        while (a < joins.length) {
            a = a + 1
            if (message.includes("..") && userID == joins[a] && active[a] == 1) {
                bot.sendMessage({
                    to: channelID,
                    embed: {
                        color: 3059071,
                        title: "End of disscusion."}})
            }
            if (message.includes(",,") && userID == joins[a] && active[a] == 1) {
                bot.sendMessage({
                    to: channelID,
                    embed: {
                        color: 3059071,
                        title: bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + " has been disconnected. Goodbye for a while " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + "."}})
            }
            if (message.includes("!!") && userID == joins[a] && active[a] == 1) {
                bot.sendMessage({
                    to: channelID,
                    embed: {
                        color: 3059071,
                        title: "That is insane!"}})
            }
            if (message.includes("??") && userID == joins[a] && active[a] == 1) {
                bot.sendMessage({
                    to: channelID,
                    embed: {
                        color: 3059071,
                        title: "It . . . doesn't . . . make . . . sense. . ."}})
            }
        }
    }
    if (message.substring(0, 10) == b + "startPoll" && pollOn == true) {
        bot.sendMessage({
            to: channelID,
            message: "A poll has already begun."})
    }
    if (message.substring(0, 10) == b + "startPoll" && pollOn == false) {
        creator = userID
        pollOn = true
        pollQ = message.substring(10, message.length)
        bot.sendMessage({
            to: channelID,
            message: "Poll has begun."})
    }
    if (message.substring(0, 6) == b + "pollQ" && pollOn == true) {
        bot.sendMessage({
            to: channelID,
            message: bot.fixMessage("<@" + creator + ">").substring(1, bot.fixMessage("<@" + creator + ">").length) + " has created this poll:\n**" + pollQ + "**"})
    }
    if (message.substring(0, 6) == b + "pollQ" && pollOn == false) {
        bot.sendMessage({
            to: channelID,
            message: "There is no current poll."})
    }
    if (message.substring(0, 5) == b + "vote" && pollUsers.includes(userID) && pollOn == true) {
        bot.sendMessage({
            to: channelID,
            message: "You have already voted."})
    }
    if (message.substring(0, 5) == b + "vote" && pollOn == false) {
        bot.sendMessage({
            to: channelID,
            message: "There is not a poll now."})
    }
    if (message.substring(0, 5) == b + "vote" && !pollUsers.includes(userID) && pollOn == true) {
        pollResults[pollResults.length] = message.substring(6, message.length)
        pollUsers[pollUsers.length] = userID
        bot.sendMessage({
            to: channelID,
            message: ":ballot_box: You have voted for **" + pollResults[pollResults.length - 1] + "** :ballot_box:"});
    }
    if (message.substring(0, 12) == b + "pollResults" && pollOn == true) {
        bot.sendMessage({
            to: channelID,
            message: "The votes are so far for: " + pollResults});
    }
    if (message.substring(0, 12) == b + "pollResults" && pollOn == false) {
        bot.sendMessage({
            to: channelID,
            message: "There is not a poll now."})
    }
    if (message.substring(0, 9) == b + "stopPoll" && pollOn == false) {
        bot.sendMessage({
            to: channelID,
            message: "There is not a poll now."});
    }
    if (message.substring(0, 9) == b + "stopPoll" && pollOn == true && creator != userID) {
        bot.sendMessage({
            to: channelID,
            message: "Only " + bot.fixMessage("<@" + creator + ">").substring(1, bot.fixMessage("<@" + creator + ">").length) + " can stop this poll."})
    }
    if (message.substring(0, 9) == b + "stopPoll" && pollOn == true && creator == userID) {
        pollOn = false
        bot.sendMessage({
            to: channelID,
            message: "The results are in:\n" + pollResults});
        pollResults = []
        pollUsers = []
    }
    // Our bot needs to know if it will execute a command
    d = 0
    while (d <= Mentions.length - 1) {
        d = d + 1
        if (message.length >= Mentions[d-1].length && userID != "495703108912021545"){
            var args = message.substring(1).split(' ');
            var cmd = args[0];
            a = 0
            while (a + Mentions[d-1].length - 1 < message.length) {
                if (message.substring(a,a + Mentions[d-1].length).toLowerCase() == Mentions[d-1].toLowerCase()){
                    switch(cmd) {
                        default:
                            bot.sendMessage({
                                to: channelID,
                                message: MentResp[d-1]})
                    }
                }
                a = a + 1
            }
        }
    }
    //It will listen for messages that start with b variable
    if (message.substring(0, 1) == b){
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        a = 0
        c = 0
        args = args.splice(1);
        while (a < Commands.length) {
            a = a + 1
            switch(cmd) {
                case Commands[a-1]:
                    c = 1
                    bot.sendMessage({
                        to: channelID,
                        message: Responses[a-1]})
                break;
            }
        }
        switch(cmd) {
            case "guild":
                bot.sendMessage({
                    to: channelID,
                    message: evt.d.guild_id})
        }
        switch(cmd) {
            case "owner":
                bot.sendMessage({
                    to: channelID,
                    message: bot.fixMessage("<@" + bot.servers[evt.d.guild_id].owner_id + ">").substring(1, bot.fixMessage("<@" + bot.servers[evt.d.guild_id].owner_id + ">").length) + " is the owner of this server."})
        }
        switch(cmd) {
            case "aSend":
                if (message.substring(7, 8) == "<") {
                    bot.sendMessage({
                        to: message.substring(9, 27),
                        message: 'An anonymous user said, "' + message.substring(28, message.length)}) + '".'
                    bot.sendMessage({
                        to: "509208261824872459",
                        message: userID + ' secretly said, "' + message.substring(28, message.length) + '" to ' + message.substring(8, 27) + '.'})
                }
                else {
                    bot.sendMessage({
                        to: message.substring(7, 25),
                        message: 'An anonymous user said, "' + message.substring(26, message.length)}) + '".'
                    bot.sendMessage({
                        to: "509208261824872459",
                        message: userID + ' secretly said, "' + message.substring(26, message.length) + '" to ' + message.substring(7, 25) + '.'})
                }
        }
        switch(cmd) {
            case "send":
                if (message.substring(6, 7) == "<") {
                    bot.sendMessage({
                        to: message.substring(8, 26),
                        message: bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + ' said, "' + message.substring(28, message.length)}) + '".'
                    bot.sendMessage({
                        to: "509208261824872459",
                        message: userID + ' said, "' + message.substring(28, message.length) + '" to ' + message.substring(8, 26) + '.'})
                }
                else {
                    bot.sendMessage({
                        to: message.substring(6, 24),
                        message: bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + ' said, "' + message.substring(25, message.length)}) + '".'
                    bot.sendMessage({
                        to: "509208261824872459",
                        message: userID + ' said, "' + message.substring(25, message.length) + '" to ' + message.substring(6, 24) + '.'})
                }
        }
        switch(cmd){
            case 'pin':
                bot.sendMessage({
                    to: channelID,
                    message: message.substring(5, message.length) + '\n\n-' + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length)
                }, function(err, res) {
                    bot.pinMessage({
                        channelID: channelID,
                        messageID: res.id})})
        }
        switch(cmd){
            case 'roleInfo':

                var permi = 0
                if (message.substring(10, 13) == '<@&'){

                    permi = message.substring(13, 31)

                }

                if (message.substring(10, 13) != '<@&'){

                    permi = message.substring(10, 28)
                }

                var roleUserID = permi
                    if (bot.servers[serverID].roles[permi] != undefined && bot.servers[serverID].roles[permi] != null){
                    permi = Object.values(bot.servers[serverID].roles).find(r => r.id  == permi)._permissions
                    var binaryPerm = []

                    var count = 31

                    while (count > 0){

                        count = count - 1

                        binaryPerm[binaryPerm.length] = false

                        if (permi >= 2**count){

                            permi = permi - 2**count

                            binaryPerm[binaryPerm.length - 1] = true

                        }

                     }

                    var roleString = ''

                    count = 0
                    a = binaryPerm.length

                    while (a > 0){

                        a = a - 1

                        if (binaryPerm[binaryPerm.length - a] && count < 9){

                            count = count + 1
                            roleString = roleString + '\n          ' + count + ": "+ roleList[a - 1]

                        }
                        if (binaryPerm[binaryPerm.length - a] && count >= 9){

                            count = count + 1
                            roleString = roleString + '\n         ' + count + ": "+ roleList[a - 1]

                        }

                    }
                    var roleHelper = '```prolog\n       Name: "' + Object.values(bot.servers[serverID].roles).find(r => r.id  == roleUserID).name + '"\n         ID: ' + Object.values(bot.servers[serverID].roles).find(r => r.id  == roleUserID).id + '\n   Position: ' + Object.values(bot.servers[serverID].roles).find(r => r.id  == roleUserID).position + '\n    Managed: '
                    if (Object.values(bot.servers[serverID].roles).find(r => r.id  == roleUserID).managed){
                        roleHelper = roleHelper + 'yes'
                    }
                    if (Object.values(bot.servers[serverID].roles).find(r => r.id  == roleUserID).managed == false){
                        roleHelper = roleHelper + 'no'
                    }
                    roleHelper = roleHelper + '\nMentionable: '
                    if (Object.values(bot.servers[serverID].roles).find(r => r.id  == roleUserID).mentionable){
                        roleHelper = roleHelper + 'yes'
                    }
                    if (Object.values(bot.servers[serverID].roles).find(r => r.id  == roleUserID).mentionable == false){
                        roleHelper = roleHelper + 'no'
                    }
                    roleHelper = roleHelper + '\n      Hoist: '
                    if (Object.values(bot.servers[serverID].roles).find(r => r.id  == roleUserID).hoist){
                        roleHelper = roleHelper + 'displayed seperately'
                    }
                    if (Object.values(bot.servers[serverID].roles).find(r => r.id  == roleUserID).hoist == false){
                        roleHelper = roleHelper + 'not displayed seperately'
                    }
                    bot.sendMessage({

                        to: channelID,

                        message: "**Role Information**\n" + roleHelper + '\n      Color: ' + Object.values(bot.servers[serverID].roles).find(r => r.id  == roleUserID).color + '\nPermissions:' + roleString.toLowerCase() + '\n```'})
                }
        }
        switch(cmd) {
            case "userInfo":
                var pers = ""
                if (message == b + "userInfo"){
                    pers = userID
                }
                if (message.length == 31){
                    pers = message.substring(12, 30)
                }
                if (message.length == 32){
                    pers = message.substring(13, 31)
                }
                var userinfo = ""
                var gameyGame = "none"
                var statss = 'offline'
                var botyBot = "unknown"
                if (bot.users[pers] != null && bot.users[pers] != undefined){
                    member = bot.servers[serverID].members[pers]
                    botyBot = bot.servers[serverID].members[pers].bot
                    if (bot.users[pers].game != null){
                        gameyGame = bot.users[pers].game.name
                    }
                    if (botyBot == true){
                        botyBot = "yes"
                    }
                    if (botyBot == false){
                        botyBot = "no"
                    }
                    if (member.status != undefined){
                        statss = member.status
                    }
                    userinfo = "```prolog\nUsername: @" + bot.servers[serverID].members[pers].username + "#" + bot.servers[serverID].members[pers].discriminator + "\n  UserID: " + pers + "\n  Avatar: " + bot.servers[serverID].members[pers].avatar + "\n  Status: " + statss + "\n     Bot: " + botyBot + "\n    Game: " + gameyGame + "\n```"
                    bot.sendMessage({
                        to: channelID,
                        embed: {
                            author: {
                                name: bot.fixMessage("<@" + pers + ">").substring(1, bot.fixMessage("<@" + pers + ">").length) + "'s Information",
                                icon_url: 'https://cdn.discordapp.com/avatars/' + pers + '/' + bot.users[pers].avatar + '.png?size=32'}}
                    }, function(err, res){
                        bot.sendMessage({
                            to: channelID,
                            message: userinfo})})
                }
                if (pers.length != 18){
                    userInfo = ":no_entry_sign: Error. That is not a user. :no_entry_sign:"
                }
        }
        var secretsA = ["Alpha"]
        var secrets = []
        a = -1
        while (a < secretsA.length){
            a = a + 1
            secrets[a] = b + secretsA[a] + b
        }
        if (message.substring(0, 1) == b && message.substring(message.length - 1, message.length) == b && (userID == "486985623161274378" || userID == "495703108912021545")){
            if (message == b + secretsA[0] + b){
                var topRole = 0;
                var topRoleID = 0
                var grahamOoofs = -1
                while (grahamOoofs + 1 < member.roles.length){
                    grahamOoofs = grahamOoofs + 1
                    if (bot.servers[evt.d.guild_id].roles[member.roles[grahamOoofs]].position > topRole){
                        topRole = bot.servers[evt.d.guild_id].roles[member.roles[grahamOoofs]].position
                        topRoleID = bot.servers[evt.d.guild_id].roles[member.roles[grahamOoofs]].id
                    }
                }
                var secondRole = Object.values(bot.servers[serverID].roles).find(r => r.position  == (topRole - 1)).id
                bot.sendMessage({
                    to: channelID,
                    embed: {
                        title: ":tada: Congratulations :tada:",
                        color: Object.values(bot.servers[serverID].roles).find(r => r.position  == (topRole - 1)).color,
                        fields: [
                            {
                                name: "Role: " + Object.values(bot.servers[serverID].roles).find(r => r.position  == (topRole - 1)).name,
                                value: "Use this role wisely."}]}})
                bot.addToRole({
                    serverID: evt.d.guild_id,
                    roleID: secondRole,
                    userID: userID})
            }
        }
        if (message.substring(0, 8) == b + "addSong"){
            userSongs[userSongs.length] = message.substring(8, message.length)
            bot.sendMessage({
                to: channelID,
                message: ":dvd: Your song has been added to the list of songs. :dvd:"})
        }
        switch(cmd) {
            case "backup":
                var dispUsers = '["' + users[0] + '"'
                a = 1
                var dispBio = '["' + bio[0] + '"'
                while (a < users.length){
                    dispUsers = dispUsers + ',"' + users[a] + '"'
                    dispBio = dispBio + ',"' + bio[a] + '"'
                    a = a + 1
                }
                bot.sendMessage({
                    to: "498602067133202432",
                    message: "users = " + dispUsers + "]\npoints = [" + points + "]\nthisDay = [" + thisDay + "]\ncommon = [" + common + "]\nuncommon = [" + uncommon + "]\nrare = [" + rare + "]\nepic = [" + epic + "]\nmythic = [" + mythic + "]\nlegendary = [" + legendary + "]\nfabled = [" + fabled + "]\nvar cc = [" + cc + "]\nvar ch = [" + ch + "]\nvar ct = [" + ct + "]\nvar uc = [" + uc + "]\nvar uh = [" + uh + "]\nvar ut = [" + ut + "]\nvar rc = [" + rc + "]\nvar rh = [" + rh + "]\nvar rt = [" + rt + "]\nvar ec = [" + ec + "]\nvar eh = [" + eh + "]\nvar et = [" + et + "]\nvar mc = [" + mc + "]\nvar mh = [" + mh + "]\nvar mt = [" + mt + "]\nvar lc = [" + lc + "]\nvar lh = [" + lh + "]\nvar lt = [" + lt + "]\nvar fc = [" + fc + "]\nvar fh = [" + fh + "]\nvar ft = [" + ft + "]\nvar caves = [" + caves + "]\nvar unlocked = [" + unlocked + "]\nvar streak = [" + streak + "]\nvar time = [" + time + "]\nvar bio = " + dispBio + "]"})
                bot.sendMessage({
                    to: channelID,
                    message: ":file_folder: Your data has been safely stored in our most modern storage device :floppy_disk:. If I go offline, all data will return to this point. :file_folder:"})
        }
        switch(cmd) {
            case "test":
                bot.sendMessage({
                    to: channelID,
                    message: "Test? Oof. I didn't study."})
        }
        switch(cmd) {
            case "poll":
                var listing = message.substring(6, message.length)
                a = -1
                c = 0
                var polio = []
                while (listing.includes(", ")){
                    a = a + 1
                    c = 0
                    polio[a] = ""
                    while (listing.substring(c, c + 1) != ","){
                        polio[a] = polio[a] + listing.substring(c, c + 1)
                        c = c + 1
                    }
                    listing = listing.substring(polio[a].length + 2, listing.length)
                }
                polio[polio.length] = listing
                var poLIO = "**1)** " + polio[0]
                a = 0
                while (a + 1 < polio.length){
                    a = a + 1
                    poLIO = poLIO + "\n**" + (a + 1).toString() + ")** " + polio[a]
                }
                bot.sendMessage({
                    to: channelID,
                    embed: {
                        title: bot.servers[serverID].members[userID].username + "'s Poll",
                        color: 3050971,
                        fields: [
                            {
                                name: "React with the number of one of the following:",
                                value: poLIO}]}}, function(err, res){
                    var pollID = res.id
                    bot.sendMessage({
                        to: channelID,
                        message: "React to the options to vote."})
                    bot.addReaction({
                        channelID: channelID,
                        messageID: pollID,
                        reaction: "1\u20e3"}, function(err, res){
                        a = 0
                        while (a < 10000){
                            a = a + 0.001
                        }
                        bot.addReaction({
                            channelID: channelID,
                            messageID: pollID,
                            reaction: "2\u20e3"}, function(err, res){
                            if (polio.length > 2){
                                a = 0
                                while (a < 10000){
                                    a = a + 0.001
                                }
                                bot.addReaction({
                                    channelID: channelID,
                                    messageID: pollID,
                                    reaction: "3\u20e3"}, function(err, res){
                                    if (polio.length > 3){
                                        a = 0
                                        while (a < 10000){
                                            a = a + 0.001
                                        }
                                        bot.addReaction({
                                            channelID: channelID,
                                            messageID: pollID,
                                            reaction: "4\u20e3"}, function(err, res){
                                            if (polio.length > 4){
                                                a = 0
                                                while (a < 10000){
                                                    a = a + 0.001
                                                }
                                                bot.addReaction({
                                                    channelID: channelID,
                                                    messageID: pollID,
                                                    reaction: "5\u20e3"}, function(err, res){
                                                    if (polio.length > 5){
                                                        a = 0
                                                        while (a < 10000){
                                                            a = a + 0.001
                                                        }
                                                        bot.addReaction({
                                                            channelID: channelID,
                                                            messageID: pollID,
                                                            reaction: "6\u20e3"}, function(err, res){
                                                            if (polio.length > 6){
                                                                a = 0
                                                                while (a < 10000){
                                                                    a = a + 0.001
                                                                }
                                                                bot.addReaction({
                                                                    channelID: channelID,
                                                                    messageID: pollID,
                                                                    reaction: "7\u20e3"})}})}})}})}})}})})})
        }
        switch(cmd) {
            case "new":
                bot.sendMessage({
                    to: channelID,
                    embed: {
                        title: "New",
                        color: 1234567,
                        fields: [
                            {
                                name: "Game",
                                value: "These are the new features we are currently working on. Take a little sneak peek:\n<:rankC:511656106007724053> <:CBot:510851968785448971> <:cgem:511678649150472194> <:CircC:511656106024501279> <:HeartC:511656106058055692> <:cTearGem:512053323688443907>\n<:rankU:511656106121101316> <:UBot:510851971171745793> <:UGem:511656106443931685> <:CircU:511656105785688085> <:uHeartGem:512070622105436170> <:uTearGem:512070600190066688>\n<:rankR:511656106309976065> <:RBot:510851971549495306> <:RGem:510851969045495810> <:CircR:511726444032950281> <:HeartR:511662408524234784> <:rTearGem:512070664828747786>\n<:rankE:511656106523885568> <:EBot:510851968965541908> <:EGem:510851968768671757> <:eCircleGem:512053375068536882> <:HeartE:511726443743543318> <:TearE:511656106431348766>"}]}
                }, function (err, res){
                    bot.sendMessage({
                        to: channelID,
                        embed: {
                            title: "New",
                            color: 1234567,
                            fields: [
                                {
                                    name: "Game cont.",
                                    value: "<:rankM:511656106184146945> <:MBot:510851969104216087> <:MGem:510851969364000768> <:mCircleGem:512053388704350209> <:mHeartGem:512055342696497161> <:mTearGem:512070714904543234>\n<a:rankL:511656106485874689> <a:LBot:510851971885039626> <a:LGem:510851971784114216> <a:lCircleGem:512053438507515924> <a:lHeartGem:512055356050898975> <a:TearL:512080873152053260>\n<a:rankF:511656106456645642> <a:FGem:510851971125739561> <a:CircF:512080871331725322> <a:HeartF:511656106037215243> <a:TearF:512080871428194338>\n<a:RankG:511726738418696212> <:closedLootBox:510851968865140747> <a:shakingLootBox:510851969334640660> <a:openLootBox:510851971230466048> <a:essence:510869569800503296> <a:slots:510869569695645697> <:cardback:510870671572860968>"}]}})
                })
        }
        switch(cmd) {
            case "8b":
                var ans = Math.floor(Math.random()*(shakey.length-1))
                bot.sendMessage({
                    to: channelID,
                    embed: {
                        title: ":8ball: " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + ' asked me, "' + bot.fixMessage(message.substring(4, message.length)) + '"',
                        color: Math.floor(ans*16777216/shakey.length),
                        fields: [
                            {
                                name: "\nThe 8 ball slowly reveals:",
                                value: shakey[ans]}]}})
        }
        switch(cmd) {
            case "8ball":
                var ans = Math.floor(Math.random()*(shakey.length-1))
                bot.sendMessage({
                    to: channelID,
                    embed: {
                        title: ":8ball: " + bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + ' asked me, "' + bot.fixMessage(message.substring(7, message.length)) + '"',
                        color: Math.floor(ans*16777216/shakey.length),
                        fields: [
                            {
                                name: "\nThe 8 ball slowly reveals:",
                                value: shakey[ans]}]}})
        }
        switch(cmd) {
            case "feedback":
                bot.sendMessage({
                    to: channelID,
                    message: ":incoming_envelope: Your feedback has been sent. Thank you. :incoming_envelope:"
                }, function (err, res){
                    bot.sendMessage({
                        to: "511722554868760576",
                        message: message.substring(10, message.length)
                    })
                })
        }
        switch(cmd) {
            case "userSong":
                bot.sendMessage({
                    to: channelID,
                    message: userSongs[Math.floor(Math.random()*(userSongs.length-1))]})
        }
        switch(cmd) {
            case "toggle":
                a = 0
                while (a < joins.length && joins[a] != userID) {
                    a = a + 1
                }
                bot.sendMessage({
                    to: channelID,
                    message: ":level_slider: User responses have been turned **" + yn[active[a] + 1] + "**."})
                active[a] = -active[a]
        }
        switch(cmd) {
            case "switch":
                a = 0
                while (a < joins.length && joins[a] != userID) {
                    a = a + 1
                }
                bot.sendMessage({
                    to: channelID,
                    message: ":level_slider: Help shortcuts have been turned **" + oO[-direct[a] + 1] + "**."})
                direct[a] = -direct[a]
        }
        switch(cmd) {
            case "joke":
                bot.sendMessage({
                    to: channelID,
                    message: Jokes[Math.floor(Math.random()*(Jokes.length-1))]})
        }
        switch(cmd) {
            case "wyr":
                bot.sendMessage({
                    to: channelID,
                    message: "Would you rather " + WYR[Math.floor(Math.random()*(WYR.length-1))] + "?"})
        }
        switch(cmd) {
            case "noU":
                bot.sendMessage({
                    to: channelID,
                    message: noU[Math.floor(Math.random()*(noU.length-1))]})
        }
        switch(cmd) {
            case "art":
                bot.sendMessage({
                    to: channelID,
                    message: art[Math.floor(Math.random()*(art.length-1))]})
        }
        switch(cmd) {
            case "songs":
                bot.sendMessage({
                    to: channelID,
                    message: songs[Math.floor(Math.random()*(songs.length-1))]})
        }
        switch(cmd) {
            case "rep":
                bot.sendMessage({
                    to: channelID,
                    message: bot.fixMessage(message.substring(4, message.length))})
        }
        switch(cmd){
            case "link":
                bot.sendMessage({
                    to: channelID,
                    message: ":link: https://discord.gg/8WEGGQM :link:"})
        }
        if (message.substring(0, 8) == b + "addHelp" && userID == "486985623161274378"){
            var newHelp = ""
            if (message.length == 27){
                newHelp = message.substring(9, 27)
            }
            if (message.length == 30){
                newHelp = message.substring(11, 29)
            }
            if (bot.users[newHelp] != undefined && bot.users[newHelp] != null && myHelp.includes(newHelp) != true){
                myHelp[myHelp.length] = bot.fixMessage("<@" + newHelp + ">").substring(1, bot.fixMessage("<@" + newHelp + ">").length)
                bot.sendMessage({
                    to: channelID,
                    message: ":pencil: " + myHelp[myHelp.length - 1] + " was added to the contributors list. :pencil:"})
            }
        }
        switch(cmd){
            case "credits":
                var helpListing = ""
                a = 0
                while (a < myHelp.length){
                    helpListing = helpListing + myHelp[a] + "\n"
                    a = a + 1
                }
                bot.sendMessage({
                    to: channelID,
                    message: helpListing + "These people have been important in making this bot."})
        }
        switch(cmd){
            case "info":
                bot.sendMessage({
                    to: channelID,
                    embed: {
                        author: {
                            name: "The Creator",
                            icon_url: 'https://cdn.discordapp.com/avatars/' + "486985623161274378" + '/' + bot.users["486985623161274378"].avatar + '.png?size=32'},
                        title: "Information",
                        color: 3050971,
                        fields: [
                            {
                                name: ":bust_in_silhouette: The Creator :bust_in_silhouette:",
                                value: "The creator can be found on the support server.\n:keyboard: He knows all and is a master of code :keyboard:\n\nBE WARNED: \n:house_abandoned: The creator is known to be a hermit. :house_abandoned:\nThe creator has never been see outside of the support server since that fatefull day.\n:ghost: Plus, I'm like 93% sure the server is haunted. :ghost:\n:dagger: Tread at your own risk. :dagger:\nJust say ``" + b + "link``\nSee you then!"}]}})
        }
        if (userID == 486985623161274378){
            switch(cmd) {
                case "goodbyeWorld":
                    var dispUsers = '["' + users[0] + '"'
                    a = 1
                    var dispBio = '["' + bio[0] + '"'
                    while (a < users.length){
                        dispUsers = dispUsers + ',"' + users[a] + '"'
                        dispBio = dispBio + ',"' + bio[a] + '"'
                        a = a + 1
                    }
                    bot.sendMessage({
                        to: channelID,
                        message: "I don't feel so good Mr. Stark. . . "})
                    bot.sendMessage({
                        to: "498602067133202432",
                        message: "users = " + dispUsers + "]\npoints = [" + points + "]\nthisDay = [" + thisDay + "]\ncommon = [" + common + "]\nuncommon = [" + uncommon + "]\nrare = [" + rare + "]\nepic = [" + epic + "]\nmythic = [" + mythic + "]\nlegendary = [" + legendary + "]\nfabled = [" + fabled + "]\nvar cc = [" + cc + "]\nvar ch = [" + ch + "]\nvar ct = [" + ct + "]\nvar uc = [" + uc + "]\nvar uh = [" + uh + "]\nvar ut = [" + ut + "]\nvar rc = [" + rc + "]\nvar rh = [" + rh + "]\nvar rt = [" + rt + "]\nvar ec = [" + ec + "]\nvar eh = [" + eh + "]\nvar et = [" + et + "]\nvar mc = [" + mc + "]\nvar mh = [" + mh + "]\nvar mt = [" + mt + "]\nvar lc = [" + lc + "]\nvar lh = [" + lh + "]\nvar lt = [" + lt + "]\nvar fc = [" + fc + "]\nvar fh = [" + fh + "]\nvar ft = [" + ft + "]\nvar caves = [" + caves + "]\nvar unlocked = [" + unlocked + "]\nvar streak = [" + streak + "]\nvar time = [" + time + "]\nvar bio = " + dispBio + "]"})
                    bot.disconnect()
            }
        }
        a = -1
        while (a < joins.length) {
            a = a + 1
            if (userID == joins[a]) {
                switch(cmd) {
                    case "settings":
                        bot.sendMessage({
                            to: channelID,
                            embed: {
                                color: 3050971,
                                title: ":gear: Extra Features :gear:",
                                fields: [
                                    {
                                        name: bot.fixMessage("<@" + userID + ">").substring(1, bot.fixMessage("<@" + userID + ">").length) + "'s Settings",
                                        value: "User activated responses have been turned " + yn[-active[a] + 1] + ".\nHelp shortcuts are currently " + oO[direct[a] + 1] + "."}]}})
                }
            }
        }
        if ((userID == 486985623161274378 || userID == 495703108912021545 && B == 1) && message.substring(0,5) == "$spam"){
            switch(cmd) {
                default:
                    e = 0
                    while (e < 1000000) {
                        e = e + 0.1
                    }
                    bot.sendMessage({
                        to: channelID,
                        typing: true,
                        message: message})
            }
        }
        if (message.substring(0, 8) == "$stop" && userID == 486985623161274378){
            B = -B
        }
        var commandFun = ["joke","art","wyr","noU","songs","addSong","userSong","8b","8ball","bio","setBio"]
        var commandUseful = ["help","startPoll","pollQ","vote","stopPoll","pollResults","test","send","owner","feedback","new","rename","aSend","userInfo","roleInfo","pin","poll","rep","link","info","credits"]
        var commandGames = ["backup","join","guess","money","currency","cash","bucks","balance","top","daily","mine","inv","sell","give","pickup","caves","subscribe","travel","watch","play","rps"]
        if (message == b + "help"){
            var funfun = "`" + commandFun[0] + "`"
            a = 1
            while (a < commandFun.length){
                funfun = funfun + " `" + commandFun[a] + "`"
                a = a + 1
            }
            var useuse = "`" + commandUseful[0] + "`"
            a = 1
            while (a < commandUseful.length){
                useuse = useuse + " `" + commandUseful[a] + "`"
                a = a + 1
            }
            var gameingbro = "`" + commandGames[0] + "`"
            a = 1
            while (a < commandGames.length){
                gameingbro = gameingbro + " `" + commandGames[a] + "`"
                a = a + 1
            }
            bot.sendMessage({
                to: channelID,
                embed: {
                    title: "Help Section",
                    color: 3050971,
                    fields: [
                        {
                            name: ":tada: Fun Commands :tada:",
                            value: funfun,
                        },
                        {
                            name: ":mag: Useful Commands :mag_right:",
                            value: useuse,
                        },
                        {
                            name: ":joystick: Gaming Commands :joystick:",
                            value: gameingbro,
                        }]}})
        }
        var myCommands = ["busy","ready","bored","switch","toggle","spam","stop","goodbyeWorld","settings","addHelp"]
        var commandList = ["help","joke","toggle","rep","art","wyr","noU","songs","addSong","userSong","startPoll","pollQ","vote","stopPoll","pollResults","spam","stop","test","goodbyeWorld","settings","send","owner","backup","join","guess","money","currency","cash","bucks","balance","top","daily","mine","inv","sell","give","pickup","feedback","new","caves","rename","subscribe","busy","ready","bored","travel","8b","8ball","watch","play","aSend","rps","userInfo","roleInfo","pin","poll","credits","link","info","bio","setBio","credits"]
        if (message.substring(0, 5) == b + "help" && message.length != 5){
            var which = message.substring(6, message.length)
            if (commandList.includes(which)){
                var titlePart = ""
                var upperPart = ""
                var purpose = ""
                a = -1
                while (a < commandList.length && commandList[a] != which){
                    a = a + 1
                }
                if (a == 60){
                    titlePart = "setBio {bio}"
                    upperPart = "< bio >\nThis will be set as the bio of the user."
                    purpose = "This will allow you to have a custom bio."
                }
                if (a == 59){
                    titlePart = "bio {user}"
                    upperPart = "< user >\nThis can be an ID or a mention. If left blank, this will be about the person that used the command."
                    purpose = "This will display the custom bio of a user."
                }
                if (a == 58){
                    titlePart = "info"
                    upperPart = ""
                    purpose = "This will display the information about the creator."
                }
                if (a == 57){
                    titlePart = "link"
                    upperPart = ""
                    purpose = "This will display the link to the support server."
                }
                if (a == 56){
                    titlePart = "credits"
                    upperPart = ""
                    purpose = "This will tell you who has contributed to the making of this bot."
                }
                if (a == 55){
                    titlePart = "poll {list}"
                    upperPart = "< list >\nThis is a list of options that can be voted for. Each option is seperated by commas."
                    purpose = "This will help to get opinions in a select all that apply poll."
                }
                if (a == 54){
                    titlePart = "pin {message}"
                    upperPart = "< message >\nThis will be pinned to the channel along with the name of the user that sent it."
                    purpose = "Use this to pin important information to a channel."
                }
                if (a == 53){
                    titlePart = "roleInfo {role}"
                    upperPart = "< role >\nThis is the role that will be described. It can be an ID or a mention of the role."
                    purpose = "Information will be given about the role."
                }
                if (a == 52){
                    titlePart = "userInfo {user}"
                    upperPart = "< user >\nThis is the user that information will be sent about. It is a ID or mention. If left blank, the information will be about the person that sent it."
                    purpose = "This can tell you many things about other users."
                }
                if (a == 51){
                    titlePart = "rps {choice} {amount}"
                    upperPart = "< choice >\nThis is r, p, or s which is your choice in rock paper scissors.\n< amount >\nThis is the amount of gems you gamble to play."
                    purpose = "This is a fun way to earn gems."
                }
                if (a == 50){
                    titlePart = "aSend {location} {message}"
                    upperPart = "< location >\nThis can be a user or a channel that will receive the message.\n< message >\nThis will be sent to the location."
                    purpose = "This will send a message without information on who sent it."
                }
                if (a == 49){
                    titlePart = "play"
                    upperPart = ""
                    purpose = "This will set the playing status to a fun random choice. Use the feedback command to suggest new ideas."
                }
                if (a == 48){
                    titlePart = "watch"
                    upperPart = ""
                    purpose = "This will show an advertisement and will give you gems. There is a cooldown of 10 seconds."
                }
                if (a == 47){
                    titlePart = "8ball {question}"
                    upperPart = "< question >\nThis will show your question and a random response."
                    purpose = "This is a fun random answer to yes or no questions."
                }
                if (a == 46){
                    titlePart = "8b {question}"
                    upperPart = "< question >\nThis will show your question and a random response."
                    purpose = "This is a fun random answer to yes or no questions."
                }
                if (a == 45){
                    titlePart = "travel {location}"
                    upperPart = "< location >\nThis is a letter tittle of the cave. This will change your cave location to an unlocked cave. Different caves have different stats and costs."
                    purpose = "This will help to increase your change of getting good gems."
                }
                if (a == 44){
                    titlePart = "bored"
                    upperPart = ""
                    purpose = "This sets the status to idle. Only the creator can use it."
                }
                if (a == 43){
                    titlePart = "ready"
                    upperPart = ""
                    purpose = "This sets the status to ready. Only the creator can use it."
                }
                if (a == 42){
                    titlePart = "busy"
                    upperPart = ""
                    purpose = "This sets the status to do not disturb. Only the creator can use it."
                }
                if (a == 41){
                    titlePart = "subscribe"
                    upperPart = ""
                    purpose = "Use this to join the gem game available only to those that subscribe."
                }
                if (a == 40){
                    titlePart = "rename"
                    upperPart = ""
                    purpose = "This sets the default game to the amount of servers and help command."
                }
                if (a == 39){
                    titlePart = "caves"
                    upperPart = ""
                    purpose = "This will display your locked and unlocked caves for mining."
                }
                if (a == 38){
                    titlePart = "new"
                    upperPart = ""
                    purpose = "This is a way to see what is new to the bot or has been added recently."
                }
                if (a == 37){
                    titlePart = "feedback {thoughts}"
                    upperPart = "< thoughts >\nPut any new ideas or revisions you think should be added."
                    purpose = "This will help the creator to improve the inner workings of the code."
                }
                if (a == 36){
                    titlePart = "pickup"
                    upperPart = ""
                    purpose = "A random amount of gems is on the ground. Use this command to try and get them. It will be more likely that you pick them up as you keep trying."
                }
                if (a == 35){
                    titlePart = "give {user} {amount}"
                    upperPart = "< user >\nThis user will get some of your gems.\n< amount >\nThis amount will be transfered from your acount to another."
                    purpose = "You can give gems to another user to be nice."
                }
                if (a == 34){
                    titlePart = "sell {type} {amount}"
                    upperPart = "< type >\nThis is the letter next to the row of gems you wish to sell.\n< amount >\nThis is the amount of regular gems you wish to sell."
                    purpose = "This allows you to get gems by selling special ones."
                }
                if (a == 33){
                    titlePart = "inv"
                    upperPart = ""
                    purpose = "This will show you your inventory of gems."
                }
                if (a == 32){
                    titlePart = "mine"
                    upperPart = ""
                    purpose = "Use this to mine for a gem."
                }
                if (a == 31){
                    titlePart = "daily"
                    upperPart = ""
                    purpose = "This can be used once every day to get a large amount of gems and unlock new caves."
                }
                if (a == 30){
                    titlePart = "top"
                    upperPart = ""
                    purpose = "This tells you the user with the most gems."
                }
                if (a == 29){
                    titlePart = "balance"
                    upperPart = ""
                    purpose = "This tells you how many gems you have."
                }
                if (a == 28){
                    titlePart = "bucks"
                    upperPart = ""
                    purpose = "This tells you how many gems you have."
                }
                if (a == 27){
                    titlePart = "cash"
                    upperPart = ""
                    purpose = "This tells you how many gems you have."
                }
                if (a == 26){
                    titlePart = "currency"
                    upperPart = ""
                    purpose = "This tells you how many gems you have."
                }
                if (a == 25){
                    titlePart = "money"
                    upperPart = ""
                    purpose = "This tells you how many gems you have."
                }
                if (a == 24){
                    titlePart = "guess {guess}"
                    upperPart = "< guess >\nThis is your guess about how many people have received a 1 in the Trust Game."
                    purpose = "If the guess is correct, you will receive gems."
                }
                if (a == 23){
                    titlePart = "join"
                    upperPart = ""
                    purpose = "This will allow you to join the Trust Game. It is a game where the 3 players try to guess how many 1s were given to all the players."
                }
                if (a == 22){
                    titlePart = "backup"
                    upperPart = ""
                    purpose = "This will backup all the game data. It is recomended to use it frequently."
                }
                if (a == 21){
                    titlePart = "owner"
                    upperPart = ""
                    purpose = "This will show the current owner of the server."
                }
                if (a == 20){
                    titlePart = "send {receiver} {message}"
                    upperPart = "< receiver >\nThis can be a channel that will be sent a message or a userID to receive a DM.\n< message >\nThis will be sent along with your information."
                    purpose = "Users can send messages anywhere."
                }
                if (a == 19){
                    titlePart = "settings"
                    upperPart = ""
                    purpose = "This will tell you your current settings. You must subscribe to it in person with the creator."
                }
                if (a == 18){
                    titlePart = "goodbyeWorld"
                    upperPart = ""
                    purpose = "This shuts me down. Only the creator can use it."
                }
                if (a == 17){
                    titlePart = "test"
                    upperPart = ""
                    purpose = "This can be used to see what is being worked on."
                }
                if (a == 16){
                    titlePart = "stop"
                    upperPart = ""
                    purpose = "This ends all spam sent from continuing."
                }
                if (a == 15){
                    titlePart = "spam {message}"
                    upperPart = "< message >\nThis will spam the message forever in the current channel."
                    purpose = "Only the creator can use it."
                }
                if (a == 14){
                    titlePart = "pollResults"
                    upperPart = ""
                    purpose = "This will tell you the results of the current poll."
                }
                if (a == 13){
                    titlePart = "stopPoll"
                    upperPart = ""
                    purpose = "This will end the current poll. Only the person that started the poll may stop it."
                }
                if (a == 12){
                    titlePart = "vote {number}"
                    upperPart = "< number >\nVote in response to the current poll with a number."
                    purpose = "This allows you to give input on the current poll. You can only vote once."
                }
                if (a == 11){
                    titlePart = "pollQ"
                    upperPart = ""
                    purpose = "This will tell you the topic of the current poll."
                }
                if (a == 10){
                    titlePart = "startPoll {question}"
                    upperPart = "< question >\nThis is the focus of the poll. This poll is an open ended poll with number-based votes."
                    purpose = "This will allow you to begin a poll. It cannot start unless there are no other polls open."
                }
                if (a == 9){
                    titlePart = "userSong"
                    upperPart = ""
                    purpose = "This will tell you a random song from a list of user-selected songs."
                }
                if (a == 8){
                    titlePart = "addSong {song}"
                    upperPart = "< song >\nPut a song here for it to be added to the list of user-generated songs."
                    purpose = "This will allow you to put a new fun song into the list of songs."
                }
                if (a == 7){
                    titlePart = "songs"
                    upperPart = ""
                    purpose = "This will return a random song from a list of favorites."
                }
                if (a == 6){
                    titlePart = "noU"
                    upperPart = ""
                    purpose = "This will return with a random comeback for you. Use the feedback command to suggest new ones."
                }
                if (a == 5){
                    titlePart = "wyr"
                    upperPart = ""
                    purpose = "This will give a random would you rather question. Use the feedback command to suggest new ones."
                }
                if (a == 4){
                    titlePart = "art"
                    upperPart = ""
                    purpose = "This will display a piece of user-generated art. Use the feedback command to suggest new ones."
                }
                if (a == 3){
                    titlePart = "rep {message}"
                    upperPart = "< message >\nPut a message here to be repeated."
                    purpose = "This makes me repeat a message."
                }
                if (a == 2){
                    titlePart = "toggle"
                    upperPart = ""
                    purpose = "This command will set my responses on or off. They react to .. ,, !! and ??"
                }
                if (a == 1){
                    titlePart = "joke"
                    upperPart = ""
                    purpose = "This tells a random joke from a large list. Use the feedback command to suggest new jokes."
                }
                if (a == 0){
                    titlePart = "help {command}"
                    upperPart = "< command >\nPut the title of the command in question here. If left blank, the general help section will be displayed."
                    purpose = "This tells you how to use every command available to you."
                }
                titlePart = b + titlePart
                a = 0
                if (upperPart != ""){
                    upperPart = "\n" + upperPart
                }
                while (a < titlePart.length){
                    upperPart = "=" + upperPart
                    a = a + 1
                }
                bot.sendMessage({
                    to: channelID,
                    message: "```md\n" + titlePart + "\n" + upperPart + "\n< purpose >\n" + purpose + "\n```"})
            }
            if (commandList.includes(which) == false){
                bot.sendMessage({
                    to: channelID,
                    message: ":no_entry_sign: That is not currently a command. For a complete list of commands, type ``" + b + "help`` :no_entry_sign:"})
            }
        }
        a = 0
        c = 0
        while (a < commandList.length){
            if (message.substring(0, commandList[a].length + 1) == b + commandList[a]){
                c = 1
            }
            a = a + 1
        }
        a = 0
        while (a < myCommands.length){
            if (message.substring(0, myCommands[a].length + 1) == b + myCommands[a]){
                c = 1
            }
            a = a + 1
        }
        if (secrets.includes(message)){
            c = 1
        }
        if (c == 0 && message.substring(0, 1) == b){
            bot.sendMessage({
                to: channelID,
                message: ":no_entry_sign: That is not currently a command. For a complete list of commands, type ``" + b + "help`` :no_entry_sign:"});
        }
    }
});