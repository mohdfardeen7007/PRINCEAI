let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`𖥔𓈒 𓄱̸⃞🧂𝐆𐑩᭷ᥩp: *${groupMetadata.subject}*\n\n━ 🪻̸⃝ ✦𝚳ᥱ᧕𝗯ᥱ𐑩𝐬: *${participants.length}*${text ? `\n ▬᳢̅ ⃞⚜️ᩥ᪶ 𝐌𝐞𝐬𝐬𐐼ɠ𝐞: ${text}\n` : ''}\n\n⁔  ███  𝝩ᥲɡƖ𝛊ꨪ𝐬ʈ  ███  ⁔ ͏\n` + users.map(v => '▬᳢̅ ⃞ᩦؙ︩︪̆፝⚓᷒ㅤ ͟ ͟ ͟ ͟ @' + v.replace(/@.+/, '')).join`\n` + '\n *─        𝐌α𐓣𝗒 ⱺ𝖿 ᥣ𝗂𝖿𝖾𝗌 𝖿α𝗂ᥣυ𝗋𝖾𝗌 α𝗋𝖾 ρ𝖾ⱺρᥣ𝖾 ωɦⱺ ᑯ𝗂ᑯ 𐓣ⱺ𝗍 𝗋𝖾αᥣ𝗂ƶ𝖾 ɦⱺω 𝖼ᥣⱺ𝗌𝖾 𝗍ɦ𝖾𝗒 ω𝖾𝗋𝖾 𝗍ⱺ 𝗌υ𝖼𝖼𝖾𝗌𝗌 ωɦ𝖾𐓣 𝗍ɦ𝖾𝗒 𝗀𝗂𝗏𝖾 υρ.* ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
