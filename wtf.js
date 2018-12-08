const Discord = require('discord.js');

const client = new Discord.Client();
const adminprefix = "g!";
/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661



client.on('message', message => {

   if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'bc')) {/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661


if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661


if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661


let BcList = new Discord.RichEmbed()/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661


.setThumbnail(message.author.avatarURL)

.setAuthor(`محتوى الرساله ${args}`)

.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

msg.react('📝')/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

.then(() => msg.react('✏'))/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

.then(() =>msg.react('📝'))/////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
 

let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

 ////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

 

 

EmbedBc.on("collect", r => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

 

message.channel.send(`**:thumbsup:  تم ارسال الرساله بنجاح**`).then(m => m.delete(5000));////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

message.guild.members.forEach(m => {

let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

var bc = new

Discord.RichEmbed()////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

.setColor('RANDOM')
////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
.setDescription(EmbedRep)

.setThumbnail(message.author.avatarURL)
////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
m.send({ embed: bc })////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

msg.delete();////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

})////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

})

NormalBc.on("collect", r => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

  message.channel.send(`**:thumbsup:  تم ارسال الرساله بنجاح**`).then(m => m.delete(5000));

message.guild.members.forEach(m => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

m.send(NormalRep);////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
msg.delete();////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

})////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

})////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

})////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

}////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

});////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661


////role bc
 var prefix = "g!" ;////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
   
   client.on('message' , message => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "role-bc")) {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        if (!message.member.hasPermission('ADMINSTRATOR')) return message.reply(`**You Don't Have**  *ADMINSTRATOR*  **Permission **`).catch(console.error);
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("**:question:قم بمنشنه رتبه معينه **");////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        return;
    }////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661

      if(args[0] == "@everyone") {
        message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء**`);////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        message.guild.members.forEach(mi => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
          );
        });////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        return;
      }
          var role = message.mentions.roles.first();////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
            if(!role) {
              message.reply("**يرجا كتابه اسم رتبه موجوده**");////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        sa.send(
          "**Message:scroll: **" + "\n" +
        "**" + `${args[1]}` + "**"
          );////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
        });////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو**`);////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
    }
});////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661
client.login(process.env.BOT_TOKEN); ////////////////////////////By:- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661


 
