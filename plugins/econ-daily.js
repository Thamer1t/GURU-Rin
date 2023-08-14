const rewards = {
  exp: 9999,
  money: 4999,
  potion: 5,
}
const cooldown = 86400000
let handler = async (m, {conn, isPrems }) => {
  let user = global.db.data.users[m.sender]
  let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `استلمت جائزتك اليومية! تعال بعد *${msToTime(time - new Date())}* `
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  m.reply(`
🎁 *الجائزة اليومية*

▢ *تم استلام:*
 ${text}`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['يومي', 'claim']
handler.tags = ['اقتصاد']
handler.command = /^(يومي|claim)$/i

handler.cooldown = cooldown

export default handler



function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " ساعة " + minutes + " دقيقة"
}
