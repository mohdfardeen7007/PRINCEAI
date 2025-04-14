let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`͏⏱️̫ꓖ꯭𝗥̸̷̶𝗢̶̷࣯࣯֡𝗨̸̷ᷓ𝗣̷̸ֲ ░̷̸ : *${groupMetadata.subject}*\n\n💮 ̸̷̶ 𝗠̸̷̸̷𝗘̷̸̲̲̲𝗠⃫͇֣𝗕̸̷𝝣̷̸𝗥̶̸̷⃥ᯰᯨ : *${participants.length}*${text ? `\n⛩️̷̸⃨ 𝗠̸̷̸̷𝚵̸̷͇𝐒̷̶̲͠𝐒̷̶̲͠𝐀̸̷͞𝐆̸̸̷͋𝚵̸̷͇ : ${text}\n` : ''}\n\n⎯⎯   𝐓̸̷𝐀̷̸ׁׅ𝐆̸̸̷͋𝐋̸̸̷̲𝐈̸̷̲͟𝐒̷̶̲͠𝐓̸ ⎯⎯  ͏\n` + users.map(v => '🍥 ᪶ @' + v.replace(/@.+/, '')).join`\n` + '\n *❬ 🎥 ❭ ▭ׅ࣪▬ ࣪  𓈒  𝑵𝑒𝑣𝑒𝑟 𝑏𝑒 𝑎𝑓𝑟𝑎𝑖𝑑 𝑡𝑜 𝑓𝑎𝑖𝑙 𝑏𝑢𝑡 𝑏𝑒 𝑎𝑓𝑟𝑎𝑖𝑑 𝑛𝑜𝑡 𝑡𝑜 𝑇𝑟𝑦  𓈒  ▭ׅ࣪▬ 🕸️* ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
