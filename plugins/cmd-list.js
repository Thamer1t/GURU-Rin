//import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    conn.reply(m.chat, `
*قائمة الاوامر*

▢ *تنويه:* اذا الامر بكتابه *عريضة* معناها محظور

──────────────────
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(bloqueado) ${key}` : key} : ${value.text}`).join('\n')}

`.trim(), null, {
        mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    })
}


handler.help = ['listcmd']
handler.tags = ['للمالك']
handler.command = ['قائمة-اوامر']

export default handler
