let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`.      ׅㅤׄㅤׅㅤׄᅠ⋱╲ㅤ֪    ⦙ㅤ֪ㅤ╱⋰ᅠׄᅠׅᅠׄᅠׅ
     ⏜⌒፝֟𝄄𝅦𝄄፝֟ᮬ࿙࿚ㅤ(╲ㅤ︵ㅤ╱)ㅤ࿙࿚፝֟𝄄𝅦𝄄ᮢ፝֟⌒⏜ *${groupMetadata.subject}  ּּ ︶۪۪۪֟፝᷼͝⏝ ׅ  ᩧ   ּ.  ⸽⦙᷼͝ᗣ⵿͠ᩘ⵿۪۪۪۪𝄄𝅦𝄄⵿ᩘ۪۪۪۪ᗣ᷼͝⦙⸽  ׅ     ᳞  ᩧ ⏝۪۪۪ׅ֟፝᷼͝︶ ׂ  ׅ*\n\n━ 🪻̸⃝ ✦𝚳ᥱ᧕𝗯ᥱ𐑩𝐬: *${participants.length}*${text ? `\n ▬᳢̅ ⃞⚜️ᩥ᪶ 𝐌𝐞𝐬𝐬𐐼ɠ𝐞: ${text}\n` : ''}\n\n⁔  ███  𝝩ᥲɡƖ𝛊ꨪ𝐬ʈ  ███  ⁔ ͏\n` + users.map(v => '▬᳢̅ ⃞ᩦؙ︩︪̆፝⚓᷒ㅤ ͟ ͟ ͟ ͟ @' + v.replace(/@.+/, '')).join`\n` + '\n *─  𝐋𝗂𝖿𝖾 𝗂𝗌𐓣𝗍 ꭑ𝖾α𐓣𝗍 𝗍ⱺ ᑲ𝖾 𝗋υ𝗌ɦ𝖾ᑯ 𝗍ɦ𝗋ⱺυ𝗀ɦ 𝐓α𝗄𝖾 𝗒ⱺυ𝗋 𝗍𝗂ꭑ𝖾 α𐓣ᑯ 𝖾𐓣𝗃ⱺ𝗒 𝗒ⱺυ𝗋𝗌𝖾ᥣ𝖿.* ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
