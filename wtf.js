const Discord = require('discord.js');

const client = new Discord.Client();
const adminprefix = "g!";




client.on('message', message => {

   if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'bc')) {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

let BcList = new Discord.RichEmbed()

.setThumbnail(message.author.avatarURL)

.setAuthor(`محتوى الرساله ${args}`)

.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {

msg.react('📝')

.then(() => msg.react('✏'))

.then(() =>msg.react('📝'))

 

let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;

let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

 

let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });

let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });

 

 

EmbedBc.on("collect", r => {

 

message.channel.send(`**:thumbsup:  تم ارسال الرساله بنجاح**`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)

var bc = new

Discord.RichEmbed()

.setColor('RANDOM')

.setDescription(EmbedRep)

.setThumbnail(message.author.avatarURL)

m.send({ embed: bc })

msg.delete();

})

})

NormalBc.on("collect", r => {

  message.channel.send(`**:thumbsup:  تم ارسال الرساله بنجاح**`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)

m.send(NormalRep);

msg.delete();

})

})

})

}

});


////role bc
 var prefix = "g!" ;
   
   client.on('message' , message => {

  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "role-bc")) {
        if (!message.member.hasPermission('ADMINSTRATOR')) return message.reply(`**You Don't Have**  *ADMINSTRATOR*  **Permission **`).catch(console.error);
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنه رتبه معينه");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("يرجا كتابه اسم رتبه موجوده");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرساله :" + "\n" +
        "**" + `${args[1]}` + "**"
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
    }
});
client.login(process.env.BOT_TOKEN); 


 
