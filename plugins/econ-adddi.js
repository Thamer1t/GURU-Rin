//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ منشن اليوزر'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ اكتب عدد  *الألماس* الي بتضيفه'
    if (isNaN(txt)) throw '🔢 أرقام فقط'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ الحد الأدنى   *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *💎 تمت الاضافة*
┌──────────────
▢ *المجموع:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ استلمتe \n\n *+${dmt}* أالماسة`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['اقتصاد']
handler.command = ['اضافة-الماس'] 
handler.owner = true

export default handler

