let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`.      ׅㅤׄㅤׅㅤׄᅠ⋱╲ㅤ֪    ⦙ㅤ֪ㅤ╱⋰ᅠׄᅠׅᅠׄᅠׅ
     ⏜⌒፝֟𝄄𝅦𝄄፝֟ᮬ࿙࿚ㅤ(╲ㅤ︵ㅤ╱)ㅤ࿙࿚፝֟𝄄𝅦𝄄ᮢ፝֟⌒⏜ 
*♡゚⃞⿵꯭█꯭█⃞꯭ ꯭֢֟፝🍒꯭֢ׅ֟፝𝐄ׂ𝕥ׅᩘ︩︪ᦅׂ𝕚𝅦ׅᥫׂᧉׅ⃨⃕𝘀ׂᩙ Гּ໋۪۫ᥝ๋⃨ࣼᦋᩤ𝗂᷒ᰰ𑂘᜔ֺּ︩︪۟ɬ   ꯭ׅ֢🍒꯭ׂׅ֢֟፝ ⃞꯭██꯭⿵♡゚⃞*     

      ּּ   ︶۪۪۪֟፝᷼͝⏝ ׅ  ᩧ   ּ.  ⸽⦙᷼͝ᗣ⵿͠ᩘ⵿۪۪۪۪𝄄𝅦𝄄⵿ᩘ۪۪۪۪ᗣ᷼͝⦙⸽  ׅ     ᳞  ᩧ ⏝۪۪۪ׅ֟፝᷼͝︶ ׂ  ׅ \n\n♡゚⃞⿵꯭█꯭█⃞꯭ ꯭֢֟፝🍒꯭֢   ׅ֟፝𝐄ׂ𝕥ׅᩘ︩︪ᦅׂ𝕚𝅦ׅᥫׂᧉׅ⃨⃕𝘀ׂᩙ  ꯭ׅ֢🍒꯭ׂׅ֢֟፝ ⃞꯭██꯭⿵♡゚⃞ ͏\n` + users.map(v => '໋ ᜔ִ۫𑁯੭ ᮫໋۪࣭  𐔌⃘𝅦֟፝͜͡͞🍒ᩙ̸̷⃘᳟― @' + v.replace(/@.+/, '')).join`\n` + '\n *─  𝐋𝗂𝖿𝖾 𝗂𝗌𐓣𝗍 ꭑ𝖾α𐓣𝗍 𝗍ⱺ ᑲ𝖾 𝗋υ𝗌ɦ𝖾ᑯ 𝗍ɦ𝗋ⱺυ𝗀ɦ 𝐓α𝗄𝖾 𝗒ⱺυ𝗋 𝗍𝗂ꭑ𝖾 α𐓣ᑯ 𝖾𐓣𝗃ⱺ𝗒 𝗒ⱺυ𝗋𝗌𝖾ᥣ𝖿.* ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
