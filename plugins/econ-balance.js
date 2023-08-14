
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ ماعندي لك معلومات! شكلك جدد عالبوت، اذا كسبت اشياء راح تنضاف تلقائيا`
    conn.reply(m.chat, `
┌───⊷ *الغنائم* ⊶
▢ *📌الرقم* : _@${who.split('@')[0]}_
▢ *💎الألماس* : _${user.diamond}_
▢ *💎الذهب* : _${user.gold}_
▢ *💎الأحجار* : _${user.rock}_
▢ *💎الزمرّد* : _${user.emerald}_
▢ *💎الرانك* : _${user.role}_
▢ *💎الصحة* : _${user.health}_
▢ *💎الخشب* : _${user.wood}_
▢ *💎الجرعات* : _${user.potion}_
▢ *💎الحديد* : _${user.iron}_
▢ *💎النقود* : _${user.money}_
▢ *⬆️نقاط الخبرة* : _Total ${user.exp}_
└──────────────

*ملاحظة :* 
تقدر تشتري 💎 الماس باستخدام الأوامر*
❏ *${usedPrefix}الى-الماس* <الكمية>
❏ *${usedPrefix}الى-الماس-كامل*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['اقتصاد']
handler.command = ['غنائم', 'محفظة', 'الماس', 'ذهب'] 

export default handler
