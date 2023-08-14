const xpperdiamond = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^الى-الماس/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperdiamond * count) {
    global.db.data.users[m.sender].exp -= xpperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `
┌─「 *تم الاستبدال* 」
‣ *الكمية* : + ${count}💎 
‣ *المستعمل* : -${xpperdiamond * count} XP
└──────────────`, m)
  } else conn.reply(m.chat, `❎ ماعندك اكس بي كافي لتحويله الى *${count}* الماس💎\n\nتقدر تجمع اكس بي من الأالعاب والاقتصاد*`, m)
}
handler.help = ['الى-الماس', 'الى-الماس-كامل']
handler.tags = ['اقتصاد']
handler.command = ['الى-الماس', 'الى-الماس-كامل'] 

handler.disabled = false

export default handler
