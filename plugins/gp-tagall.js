let handler = async (m, { conn, text, participants, groupMetadata }) => {
  let users = participants
    .map(u => u.id)
    .filter(v => v !== conn.user.jid)

  let title = "𝚃𝚊𝚐𝚊𝚕𝚕 𝙼𝚎𝚖𝚋𝚎𝚛𝚜"
  let gname = `𝐆𝗋ⱺυρ: ${groupMetadata.subject}`
  let msg = text ? `𝐌𝖾𝗌𝗌α𝗀𝖾: ${text}` : ""
  let count = `𝐌𝖾ꭑᑲ𝖾𝗋𝗌: ${participants.length}`

  let anime = `
╔══════════════════════════╗
     🌸 *ＡＮＩＭＥ  ＴＡＧＡＬＬ* 🌸
╚══════════════════════════╝

┏━━━━━━━━━━━━━━━━━━━━━━┓
┃ ✨ *${title}* ✨
┃ 🏮 ${gname}
┃ 🧧 ${count}
${text ? `┃ 🌸 ${msg}` : ""}
┗━━━━━━━━━━━━━━━━━━━━━━┛

🌸 *Kawaii Mention List* 🌸
${users.map(v => "💮 @" + v.replace(/@.+/, "")).join("\n")}

✦────────────────────────✦
        🌸 𝑨𝒏𝒊𝒎𝒆 𝑷𝒐𝒘𝒆𝒓 𝑨𝒄𝒕𝒊𝒗𝒆 🌸
✦────────────────────────✦
  `.trim()

  m.reply(anime, null, { mentions: users })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true
handler.desc = "Anime-style fancy TagAll"

export default handler
