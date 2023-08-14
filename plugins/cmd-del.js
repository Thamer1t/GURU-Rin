//import db from '../lib/database.js'

let handler = async (m, { text }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `✳️ اكتب اامر اللي بتحذفه`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw `✳️ ماتقدر تحذف الامر`
    delete sticker[hash]
    m.reply(`✅ تم حذف الأمر`)
}


handler.help = ['cmd'].map(v => 'del' + v + ' <text>')
handler.tags = ['للمالك']
handler.command = ['حذف-امر']
handler.owner = true

export default handler
