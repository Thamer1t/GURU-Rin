//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ منشن اليوزر'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ اكتب ال*XP* اللي بتضيفه'
  if (isNaN(txt)) throw ' 🔢 أرقام فقط'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ الحد الأدنى *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ تمت اضافة ال *XP =*
┌──────────────
▢  *المجموع:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ استلمت \n\n *+${xp} XP*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['اقتصاد']
handler.command = ['اضافة-اكسبي'] 
handler.owner = true

export default handler

