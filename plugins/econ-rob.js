
let ro = 3000
let handler = async (m, { conn, usedPrefix, command}) => {
    let time = global.db.data.users[m.sender].lastrob + 7200000
    if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `⏱️¡ولد! انتظر *${msToTime(time - new Date())}* عشان تسرق مرة ثانيه`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `✳️ منشن احد تسرقه`
    if (!(who in global.db.data.users)) throw `✳️ ماحصلته بقاعدة البيانات، شكله جديد عالبوت اصبر لين يجمع بعدين ازرفه`
    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * ro)
    if (users.exp < rob) return m.reply(`🔖 @${who.split`@`[0]} لديه اقل من *${ro} xp*\nلاتزرف من الضعيفين دور اللي قدك":`, null, { mentions: [who] })    
   global.db.data.users[m.sender].exp += rob
   global.db.data.users[who].exp -= rob
  
    m.reply(`
  ‣ تمت سرقة *${rob} XP* a @${who.split`@`[0]}
  `, null, { mentions: [who] })
    global.db.data.users[m.sender].lastrob = new Date * 1
  }

  handler.help = ['سرقة']
  handler.tags = ['اقتصاد']
  handler.command = ['سرقة', 'rob']
  
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
  
