let handler = async (m, { conn, text, participants, groupMetadata }) => {
  let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)

  let winter = `
╔═══════❄️•❅•❄️═══════╗
        𝑾𝒊𝒏𝒕𝒆𝒓 𝑺𝒆𝒂𝒔𝒐𝒏 ☃️
     𝑪𝒐𝒍𝒅 𝑫𝒂𝒚𝒔, 𝑾𝒂𝒓𝒎 𝑽𝒊𝒃𝒆𝒔
╚═══════❄️•❅•❄️═══════╝

🧊 *Group:* ${groupMetadata.subject}
🧊 *Members:* ${participants.length}
${text ? `🧊 *Message:* ${text}\n` : ""}

🌨️ *Snowflake Mentions* 🌨️
───────────────────────
${users.map(v => `• @${v.split("@")[0]}`).join("\n")}
───────────────────────

❄️ “Snowflakes fall… but memories stay.” ❄️
  `.trim()

  m.reply(winter, null, { mentions: users })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.desc = 'Winter Theme TagAll'
handler.admin = true
handler.group = true

export default handler
