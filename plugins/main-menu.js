import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Karachi').format('HH')
let wib = moment.tz('Asia/Karachi').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = (thumb)
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = ` ||   𝐅𝖾ᥣ𝗂𝗑   ||   

 ִ۫ ꯭𓈒🧺 *𝕯ᥱ𝗍ᥲіᥣs*  ꯭𓈒🧺
│ *𝐑𝖾ρᥣ𝗒 𝐖𝗂𝗍ɦ 𝐓ɦ𝖾 𝐍υꭑᑲ𝖾𝗋*
│ *𝐓ⱺ 𝐆𝖾𝗍 𝐓ɦ𝖾 𝐑𝖾𝗌ρ𝖾𝖼𝗍𝖾ᑯ 𝐌𝖾𐓣υ*
╰───────⳹
╭───────⳹
│ *1.* 𝐁ⱺ𝗍 𝐌𝖾𐓣υ 
│ *2.* 𝐎ω𐓣𝖾𝗋 𝐌𝖾𐓣υ 
│ *3.* 𝐆𝗋ⱺυρ 𝐌𝖾𐓣υ 
│ *4.* 𝐅υ𐓣 𝐌𝖾𐓣υ 
│ *5.* 𝐑𝖾α𝖼𝗍𝗂ⱺ𐓣 𝐌𝖾𐓣υ 
│ *6.* 𝐃ⱺω𐓣ᥣⱺαᑯ 𝐌𝖾𐓣υ 
│ *7.* 𝐆αꭑ𝖾 𝐌𝖾𐓣υ 
│ *8.* 𝐋ⱺ𝗀ⱺ 𝐌𝖾𐓣υ 
│ *9.* 𝐒𝗍𝗂𝖼𝗄𝖾𝗋 𝐌𝖾𐓣υ 
│ *10.* 𝐀υᑯ𝗂ⱺ 𝐌𝖾𐓣υ 
│ *11.* 𝐍𝖾ω𝗌 𝐌𝖾𐓣υ 
│ *12.* 𝐄𝖼ⱺ𐓣ⱺꭑ𝗒 𝐌𝖾𐓣υ 
│ *13.* 𝐀𐓣𝗂ꭑ𝖾 𝐌𝖾𐓣υ 
│ *14.* 𝐍𝗌𝖿ω 𝐌𝖾𐓣υ 
│ *15.* 𝐓ⱺⱺᥣ𝗌 𝐌𝖾𐓣υ 
│ *16.* 𝐀𝗂 𝐌𝖾𐓣υ 
│ *17.* 𝐑𝖾ᥣ𝗂𝗀𝗂ⱺ𐓣 𝐌𝖾𐓣υ
│ *18.* 𝐏ᥣυ𝗀𝗂𐓣 𝐌𝖾𐓣υ 
╰───────⳹

╭━━━⊱『 *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ* 』⊱━━━╮
│◈
│◈
│◈   .ғᴀᴄᴇʙᴏᴏᴋ <ᴜʀʟ>
│◈   .ɢᴅʀɪᴠᴇ <ᴜʀʟ>
│◈   .ɢɪᴛᴄʟᴏɴᴇ <ᴜʀʟ>
│◈   .ɪɢsᴛᴀʟᴋ
│◈   .ɪɴsᴛᴀɢʀᴀᴍ
│◈   .ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>
│◈   .ᴍᴇɢᴀ
│◈   .ᴍᴏᴅᴀᴘᴋ
│◈   .ᴘʟᴀʏ <ϙᴜᴇʀʏ>
│◈   .ᴘʟᴀʏʏ <ᴛᴇxᴛ>
│◈   .ᴠɪᴅᴇᴏ <ᴛᴇxᴛ>
│◈   .ᴛɪᴋᴛᴏᴋ <ᴜʀʟ>
│◈   .ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
│◈   .ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>
│◈   .ʏᴛᴀ <ᴜʀʟ>
│◈   .ʏᴛᴅʟ <ᴜʀʟ>
│◈   .ʏᴛᴠ <ᴜʀʟ>
│◈   .ʏᴛᴍᴘ3 <ᴜʀʟ>
│◈   .ʏᴛsᴇᴀʀᴄʜ <ϙᴜᴇʀʏ>
│◈   .ʏᴛᴍᴘ4 <ʏᴛ-ʟɪɴᴋ>
│◈   .ᴡᴀʟʟᴘᴀᴘᴇʀ <ϙᴜᴇʀʏ>
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯

  
╭━━━━⊱『 *ɢʀᴏᴜᴘ* 』⊱━━━━╮
│◈
│◈
│◈   .ɢᴇᴛʙɪᴏ <@ᴛᴀɢ/ʀᴇᴘʟʏ>  Ⓛ
│◈   .ᴀɴɪᴍᴇϙᴜᴏᴛᴇ
│◈   .Sᴇᴛᴅᴇsᴄ <ᴛᴇxᴛ>
│◈   .sᴇᴛɴᴀᴍᴇ <ᴛᴇxᴛ>
│◈   .ᴀᴅᴅ
│◈   .ᴅᴇʟᴇᴛᴇ
│◈   .ᴅᴇʟᴡᴀʀɴ @ᴜsᴇʀ
│◈   .ᴅᴇᴍᴏᴛᴇ (@ᴛᴀɢ)
│◈   .ɪɴғᴏɢᴘ
│◈   .ʜɪᴅᴇᴛᴀɢ
│◈   .ɪɴᴠɪᴛᴇ <923xxx>
│◈   .ᴋɪᴄᴋ @ᴜsᴇʀ
│◈   .ʟɪɴᴋ
│◈   .ᴘᴏʟʟ ϙᴜᴇsᴛɪᴏɴ|ᴏᴘᴛɪᴏɴ|ᴏᴘᴛɪᴏɴ
│◈   .ᴘʀᴏғɪʟᴇ
│◈   .ᴘʀᴏᴍᴏᴛᴇ
│◈   .ʀᴇsᴇᴛʟɪɴᴋ
│◈   .sᴇᴛʙʏᴇ <ᴛᴇxᴛ>
│◈   .ɢʀᴏᴜᴘ *ᴏᴘᴇɴ/ᴄʟᴏsᴇ*
│◈   .sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>
│◈   .sɪᴍᴜʟᴀᴛᴇ <ᴇᴠᴇɴᴛ> @ᴜsᴇʀ
│◈   .sᴛᴀғғ
│◈   .ᴛᴀɢᴀʟʟ
│◈   .ᴛᴏᴛᴀɢ
│◈   .ᴡᴀʀɴ @ᴜsᴇʀ
│◈   .ᴡᴀʀɴs
│◈   .ᴍᴀɪɴ
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯
  
  
╭━━━━⊱『 *ᴏᴡɴᴇʀ* 』⊱━━━━╮
│◈
│◈
│◈   .ᴀᴅᴅᴘʀᴇᴍ <@ᴛᴀɢ>
│◈   .ᴀᴅᴅᴏᴡɴᴇʀ @ᴜsᴇʀ
│◈   .ᴀʟʟᴏᴡ <@ᴛᴀɢ>
│◈   .HEROKU
│◈   .ʙᴀɴ @ᴜsᴇʀ
│◈   .ʙᴀɴᴄʜᴀᴛ
│◈   .ᴛx
│◈   .ʙʀᴏᴀᴅᴄᴀsᴛɢʀᴏᴜᴘ <ᴛᴇxᴛ>
│◈   .ʙᴄɢᴄ <ᴛᴇxᴛ>
│◈   .ᴄʟᴇᴀʀᴛᴍᴘ
│◈   .ᴅᴇʟᴇxᴘɪʀᴇᴅ
│◈   .ᴅᴇʟᴘʀᴇᴍ @ᴜsᴇʀ
│◈   .ʀᴇᴍᴏᴠᴇᴏᴡɴᴇʀ @ᴜsᴇʀ
│◈   .sᴇᴛᴘᴘʙᴏᴛғᴜʟʟ
│◈   .ɢᴇᴛᴘʟᴜɢɪɴ <ɴᴀᴍᴇ ғɪʟᴇ>
│◈   .ɢᴇᴛғɪʟᴇ <ɴᴀᴍᴇ ғɪʟᴇ>
│◈   .ᴊᴏɪɴ <ᴄʜᴀᴛ.ᴡʜᴀᴛsᴀᴘᴘ.ᴄᴏᴍ> <ᴅɪᴀs>
│◈   .ʀᴇsᴇᴛ <92xxx>
│◈   .ʀᴇsᴇᴛᴘʀᴇғɪx
│◈   .ʀᴇsᴛᴀʀᴛ
│◈   .sᴇᴛᴘʀᴇғɪx [sʏᴍʙᴏʟ]
│◈   .ᴜɴʙᴀɴ @ᴜsᴇʀ
│◈   .ᴜɴʙᴀɴᴄʜᴀᴛ
│◈   .ᴄᴏɴғɪɢ
│◈   .ʟɪsᴛʙᴀɴ
│◈   .ᴅᴇʟᴇᴛᴇᴘʟᴜɢɪɴ <ɴᴀᴍᴇ>
│◈   .ᴘʟᴜɢɪɴs
│◈   .ɪɴsᴛᴀʟʟ <Gɪsᴛ URL>
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯

╭━━━━⊱『 *ᴛᴏᴏʟs* 』⊱━━━━╮
│◈
│◈
│◈   .ɴᴏᴡᴀ
│◈   .ϙʀ <ᴛᴇxᴛ>
│◈   .ϙʀᴄᴏᴅᴇ <ᴛᴇxᴛ>
│◈   .sᴛʏʟᴇ <ᴋᴇʏ> <ᴛᴇxᴛ>
│◈   .ᴡᴇᴀᴛʜᴇʀ *<ᴘʟᴀᴄᴇ>*
│◈   .ᴅᴇʜᴀᴢᴇ
│◈   .ʀᴇᴄᴏʟᴏʀ
│◈   .ʜᴅʀ
│◈   .ʟᴇɴɢᴛʜ <ᴀᴍᴏᴜɴᴛ>
│◈   .ᴛɪɴʏᴜʀʟ <ʟɪɴᴋ>
│◈   .sʜᴏʀᴛᴇɴ <ʟɪɴᴋ>
│◈   .ᴛᴇᴍᴘᴍᴀɪʟ
│◈   .sʜᴀᴢᴀᴍ
│◈   .ᴄᴀʟ <ᴇϙᴜᴀᴛɪᴏɴ>
│◈   .ᴄᴀʀʙᴏɴ <ᴄᴏᴅᴇ>
│◈   .ᴅᴇғɪɴᴇ <ᴡᴏʀᴅ>
│◈   .ᴇʟᴇᴍᴇɴᴛ
│◈   .ɢᴏᴏɢʟᴇ
│◈   .ɪᴛᴜɴᴇs
│◈   .ʟʏʀɪᴄs
│◈   .ɪᴍᴅʙ
│◈   .ᴄᴏᴜʀsᴇ
│◈   .ʀᴀɴᴅᴏᴍᴄᴏᴜʀsᴇ
│◈   .ʀᴇᴀᴅᴍᴏʀᴇ <ᴛᴇxᴛ1>|<ᴛᴇxᴛ2>
│◈   .ʀᴇᴀᴅᴠᴏ
│◈   .ʀᴇᴍᴏᴠᴇʙɢ
│◈   .ss <ᴜʀʟ>
│◈   .ssғ <ᴜʀʟ>
│◈   .sᴜʙʀᴇᴅᴅɪᴛ
│◈   .ᴛᴇʟᴇsᴛɪᴄᴋᴇʀ  Ⓛ
│◈   .ᴛᴏᴜʀʟ
│◈   .ᴛʀᴀɴsʟᴀᴛᴇ <ʟᴀɴɢ> <ᴛᴇxᴛ>
│◈   .ᴛʀᴜᴇ
│◈   .ᴛᴛs <ʟᴀɴɢ> <ᴛᴀsᴋ>
│◈   .ᴡᴀ
│◈   .ᴡɪᴋɪᴘᴇᴅɪᴀ
│◈
╰━━━━━━━━━━━━━━━━━╯

  
╭━━━━⊱『 *AI* 』⊱━━━━╮
│◈
│◈
│◈  .ʙɪɴɢ
│◈  .ᴅᴀʟʟᴇ
│◈  .ɢᴘᴛ
│◈  .ᴛᴏᴀɴɪᴍᴇ
│◈  .ᴛᴏᴄᴀʀᴛᴏᴏɴ
│◈  .ᴀɪ
│◈  .ʙᴀʀᴅ
│◈  .ᴀʟᴇxᴀ
│◈  .ɢᴘᴛ2
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯
  
╭━━━━⊱『 *ʀᴇʟɪɢɪᴏɴ* 』⊱━━━╮
│◈
│◈ .ϙᴜʀᴀɴᴍᴇɴᴜ ғᴏʀ ɢᴇᴛᴛɪɴɢ ɴᴜᴍʙᴇʀ
│◈ .ϙᴜʀᴀɴ [sᴜʀᴀʜ_ɴᴜᴍʙᴇʀ|sᴜʀᴀʜ_ɴᴀᴍᴇ]
│◈
╰━━━━━━━━━━━━━━━━━╯


 ╭━━⊱• *sᴛᴜᴅʏᴍᴇɴᴜ* •⊱━━╮
│◈
│◈
│◈   .ϙᴜʀᴀɴᴍᴇɴᴜ
│◈   .sᴜʀᴀʜ 36  
│◈   .ɢᴘᴛ
│◈   .ɢᴘᴛ2    
│◈   .ʙɪɴɢ  
│◈   .ʙᴀʀᴅ 
│◈   .ϙᴜᴏᴛᴇ  
│◈   .ᴀɪsᴇᴀʀᴄʜ 
│◈   .ᴅᴇғɪɴᴇ
│◈   .ᴇʟᴇᴍᴇɴᴛ
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯
  
  
╭━━━━⊱『 *Bᴏᴛ Mᴇɴᴜ* 』⊱━━━━╮
│◈
│◈
│◈   .ᴘɪɴɢ
│◈   .ʀᴜɴᴛɪᴍᴇ
│◈   .sᴄʀɪᴘᴛ
│◈   .sᴇʀᴠᴇʀ
│◈   .ʙʟᴏᴄᴋʟɪsᴛ
│◈   .ᴀʟɪᴠᴇ
│◈   .ɪɴғᴏ
│◈   .ᴏᴡɴᴇʀ
│◈   .ᴛᴏᴛᴀʟғᴇᴀᴛᴜʀᴇ
│◈   .ʟɪsᴛ
│◈   .ᴄʀɪsᴛɪᴀɴᴏʀᴏɴᴀʟᴅᴏ
│◈   .ᴄʀ7
│◈   .ᴘᴘᴄᴏᴜᴘʟᴇ 
│◈   .ᴘᴘᴄᴘ
│◈   .ᴘɪɴᴛᴇʀᴇsᴛ
│◈   .ᴍʏsɴ
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯

  
╭━━━━⊱『 *ʀᴇᴀᴄᴛɪᴏɴ* 』⊱━━━━╮
│◈
│◈
│◈   .ʙᴜʟʟʏ @ᴛᴀɢ
│◈   .ᴄᴜᴅᴅʟᴇ @ᴛᴀɢ
│◈   .ᴄʀʏ @ᴛᴀɢ
│◈   .ʜᴜɢ @ᴛᴀɢ
│◈   .ᴀᴡᴏᴏ @ᴛᴀɢ
│◈   .ᴋɪss @ᴛᴀɢ
│◈   .ʟɪᴄᴋ @ᴛᴀɢ
│◈   .ᴘᴀᴛ @ᴛᴀɢ
│◈   .sᴍᴜɢ @ᴛᴀɢ
│◈   .ʙᴏɴᴋ @ᴛᴀɢ
│◈   .ʏᴇᴛ @ᴛᴀɢ
│◈   .ʙʟᴜsʜ @ᴛᴀɢ
│◈   .sᴍɪʟᴇ @ᴛᴀɢ
│◈   .ᴡᴀᴠᴇ @ᴛᴀɢ
│◈   .ʜɪɢʜғɪᴠᴇ @ᴛᴀɢ
│◈   .ʜᴀɴᴅʜᴏʟᴅ @ᴛᴀɢ
│◈   .ɴᴏᴍ @ᴛᴀɢ
│◈   .ʙɪᴛᴇ @ᴛᴀɢ
│◈   .ɢʟᴏᴍᴘ @ᴛᴀɢ
│◈   .sʟᴀᴘ @ᴛᴀɢ
│◈   .ᴋɪʟʟ @ᴛᴀɢ
│◈   .ʜᴀᴘᴘʏ @ᴛᴀɢ
│◈   .ᴡɪɴᴋ @ᴛᴀɢ
│◈   .ᴘᴏᴋᴇ @ᴛᴀɢ
│◈   .ᴅᴀɴᴄᴇ @ᴛᴀɢ
│◈   .ᴄʀɪɴɢᴇ @ᴛᴀɢ
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯
  
  
╭━━━━⊱『 *ғᴜɴ* 』⊱━━━━╮
│◈
│◈
│◈   .ᴀғᴋ <ʀᴇᴀsᴏɴ>
│◈   .ᴛᴏᴍᴘ3
│◈   .ᴛᴏᴀᴠ
│◈   .ʙᴏᴛ
│◈   .ᴄʜᴀʀᴀᴄᴛᴇʀ @ᴛᴀɢ
│◈   .ᴅᴀʀᴇ
│◈   .ғʟɪʀᴛ
│◈   .ɢᴀʏ @ᴜsᴇʀ
│◈   .ᴘɪᴄᴋᴜᴘʟɪɴᴇ
│◈   .ϙᴜᴇsᴛɪᴏɴ
│◈   .sʜᴀʏᴀʀɪ
│◈   .sʜɪᴘ
│◈   .ʏᴏᴍᴀᴍᴀᴊᴏᴋᴇ
│◈   .ᴛʀᴜᴛʜ
│◈   .ᴡᴀsᴛᴇ @ᴜsᴇʀ
│◈   .ɪᴍᴀɢᴇ
│◈   .ᴍᴇᴍᴇ
│◈   .ϙᴜᴏᴛᴇ
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯

 
╭━━━━⊱『 *ɢᴀᴍᴇ* 』⊱━━━━╮
│◈
│◈
│◈   .sʟᴏᴛ <ᴀᴍᴏᴜɴᴛ>
│◈   .ᴄʜᴇss [ғʀᴏᴍ ᴛᴏ]
│◈   .ᴄʜᴇss ᴅᴇʟᴇᴛᴇ
│◈   .ᴄʜᴇss ᴊᴏɪɴ
│◈   .ᴄʜᴇss sᴛᴀʀᴛ
│◈   .ᴅᴇʟᴛᴛᴛ
│◈   .ɢᴜᴇssғʟᴀɢ
│◈   .Mᴀᴛʜs <ᴍᴏᴅᴇs>
│◈   .ᴘᴘᴛ <ʀᴏᴄᴋ/ᴘᴀᴘᴇʀ/sᴄɪssᴏʀs>
│◈   .ᴛɪᴄᴛᴀᴄᴛᴏᴇ <ᴛᴀɢ ɴᴜᴍʙᴇʀ>
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯

  
╭━━━━⊱『 *ᴍᴀᴋᴇʀ* 』⊱━━━━╮
│◈
│◈
│◈   .ʙʟᴜʀ
│◈   .ᴅɪғᴜᴍɪɴᴀʀ2
│◈   .ʜᴏʀɴʏᴄᴀʀᴅ
│◈   .ʜᴏʀɴʏʟɪᴄᴇɴsᴇ
│◈   .ɢғx1
│◈   .ɢғx2
│◈   .ɢғx3
│◈   .ɢғx4
│◈   .ɢғx5
│◈   .ɢғx6
│◈   .ɢғx7
│◈   .ɢғx8
│◈   .ɢғx9
│◈   .ɢғx10
│◈   .ɢғx11
│◈   .ɢғx12
│◈   .sɪᴍᴘᴄᴀʀᴅ
│◈   .ɪᴛssᴏsᴛᴜᴘɪᴅ
│◈   .ɪss
│◈   .sᴛᴜᴘɪᴅ
│◈   .ᴛᴡᴇᴇᴛ <ᴄᴏᴍᴍᴇɴᴛ>
│◈   .ʟᴏʟɪᴄᴏɴ
│◈   .ʏᴛᴄᴏᴍᴍᴇɴᴛ <ᴄᴏᴍᴍᴇɴᴛ>
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯


╭━━━━⊱『 *sᴛɪᴄᴋᴇʀ* 』⊱━━━━╮
│◈
│◈ 
│◈   .ᴇᴍᴏᴊɪᴍɪx <ᴇᴍᴏᴊɪ+ᴇᴍᴏᴊɪ>
│◈   .ɢᴇᴛsᴛɪᴄᴋᴇʀ
│◈   .sᴍᴀᴋᴇʀ
│◈   .sᴛɪᴄᴋᴇʀᴡɪᴛʜᴍᴇᴍᴇ (ᴄᴀᴘᴛɪᴏɴ|ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ)
│◈   .sᴡᴍᴇᴍᴇ <ᴜʀʟ>
│◈   .sᴡᴍ(ᴄᴀᴘᴛɪᴏɴ|ʀᴇᴘʟʏ ᴍᴇᴅɪᴀ)
│◈   .sғᴜʟʟ
│◈   .ᴛᴏɪᴍɢ <sᴛɪᴄᴋᴇʀ>
│◈   .ᴛᴏᴠɪᴅ
│◈   .ᴛʀɪɢɢᴇʀ <@ᴜsᴇʀ>
│◈   .ᴛᴛᴘ
│◈   .ᴛᴛᴘ2
│◈   .ᴛᴛᴘ3
│◈   .ᴛᴛᴘ4
│◈   .ᴛᴛᴘ5
│◈   .ᴀᴛᴛᴘ
│◈   .ᴀᴛᴛᴘ2
│◈   .ᴀᴛᴛᴘ3
│◈   .ᴛᴀᴋᴇ <ɴᴀᴍᴇ>|<ᴀᴜᴛʜᴏʀ>
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯

 
╭━━━━⊱『 *ᴀᴜᴅɪᴏ* 』⊱━━━━╮
│◈
│◈
│◈   .ʙᴀss [ᴠɴ]
│◈   .ʙʟᴏᴡɴ [ᴠɴ]
│◈   .ᴅᴇᴇᴘ [ᴠɴ]
│◈   .ᴇᴀʀʀᴀᴘᴇ [ᴠɴ]
│◈   .ғᴀsᴛ [ᴠɴ]
│◈   .ғᴀᴛ [ᴠɴ]
│◈   .ɴɪɢʜᴛᴄᴏʀᴇ [ᴠɴ]
│◈   .ʀᴇᴠᴇʀsᴇ [ᴠɴ]
│◈   .ʀᴏʙᴏᴛ [ᴠɴ]
│◈   .sʟᴏᴡ [ᴠɴ]
│◈   .sᴍᴏᴏᴛʜ [ᴠɴ]
│◈   .ᴛᴜᴘᴀɪ [ᴠɴ]
│◈
│◈
╰━━━━━━━━━━━━━━━━━╯

  
💌𝘗𝘙𝘐𝘕𝘊𝘌-𝘉𝘖𝘛-𝘔𝘋💌   
`


    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false)
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu', 'help','h','commands'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Karachi').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
     }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
    const quotes = [
      "I'm not lazy, I'm just on my energy saving mode.",
      "Life is short, smile while you still have teeth.",
      "I may be a bad influence, but darn I am fun!",
      "I'm on a whiskey diet. I've lost three days already.",
      "Why don't some couples go to the gym? Because some relationships don't work out.",
      "I told my wife she should embrace her mistakes... She gave me a hug.",
      "I'm great at multitasking. I can waste time, be unproductive, and procrastinate all at once.",
      "You know you're getting old when you stoop to tie your shoelaces and wonder what else you could do while you're down there.",
      "I'm so good at sleeping, I can do it with my eyes closed.",
      "If you think nobody cares if you’re alive, try missing a couple of payments.",
      "I used to think I was indecisive, but now I'm not so sure.",
      "If you can't convince them, confuse them.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "I'm not clumsy, I'm just on a mission to test gravity.",
      "I told my wife she should do more push-ups. She said, 'I could do a hundred!' So I counted to ten and stopped.",
      "Life is like a box of chocolates; it doesn't last long if you're hungry.",
      "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
      "Why do they call it beauty sleep when you wake up looking like a troll?",
      "I don't always lose my phone, but when I do, it's always on silent.",
      "My bed is a magical place where I suddenly remember everything I was supposed to do.",
      "I love the sound you make when you shut up.",
      "I'm not arguing, I'm just explaining why I'm right.",
      "I'm not a complete idiot, some parts are missing.",
      "When life gives you lemons, squirt someone in the eye.",
      "I don't need anger management. You just need to stop making me angry.",
      "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
      "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
      "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
      "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together.",
      "The early bird can have the worm because worms are gross and mornings are stupid.",
      "If life gives you lemons, make lemonade. Then find someone whose life has given them vodka and have a party!",
      "The road to success is always under construction.",
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
      "Some people just need a high-five. In the face. With a chair.",
      "I'm not saying I'm perfect, but I'm pretty close.",
      "A day without sunshine is like, you know, night.",
      "The best way to predict the future is to create it.",
      "If you can't be a good example, then you'll just have to be a horrible warning.",
      "I don't know why I keep hitting the escape button. I'm just trying to get out of here.",
      "I'm not lazy. I'm on energy-saving mode.",
      "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
      "I don't have a bad handwriting, I have my own font.",
      "I'm not clumsy. It's just the floor hates me, the table and chairs are bullies, and the walls get in my way.",
      "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
      "I'm not saying I'm Wonder Woman. I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
      "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
      "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
      "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together."
];
