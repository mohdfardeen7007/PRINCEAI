let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`𖥔𓈒 𓄱̸⃞🧂𝐆𐑩᭷ᥩp: *${groupMetadata.subject}*\n\n━ 🪻̸⃝ ✦𝚳ᥱ᧕𝗯ᥱ𐑩𝐬: *${participants.length}*${text ? `\n ▬᳢̅ ⃞⚜️ᩥ᪶ 𝐌𝐞𝐬𝐬𐐼ɠ𝐞: ${text}\n` : ''}\n\n⁔  ███  𝝩ᥲɡƖ𝛊ꨪ𝐬ʈ  ███  ⁔ ͏\n` + users.map(v => '▬᳢̅ ⃞ᩦؙ︩︪̆፝⚓᷒ㅤ ͟ ͟ ͟ ͟ @' + v.replace(/@.+/, '')).join`\n` + '\n *─   https://chat.whatsapp.com/LOcqAvx03ElCpEoFy2zxdP* ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
