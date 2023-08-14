let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = 'Guru'
  let wm = 'Asliguru'

let lgocraft = `
█▀▀▀▀█▀▀▀█▀▀▀▀█
  طاولة الصناعة
█▄▄▄▄█▄▄▄█▄▄▄▄█`

  let caption = `
▧ معول ⛏️
▧ سيف ⚔️
▧ سنارة 🎣
*❏ الوصفة*
▧ معول ⛏️
〉 10 خشب
〉 5 حجر
〉 5 حديد
〉 20 خيط
▧ Sword ⚔️
〉 10 خشب
〉 15 حديد
▧ Fishingrod 🎣
〉 10 خشب
〉 2 حديد
〉 20 خيط
▧ Armor 🥼
〉 30 حديد
〉 1 زمرّد
〉 5 ألماس
▧ بطاقة بنكية 💳
〉3 زمرّد
〉6 ألماس
〉10k نقود
`

  try {
    if (/صنع|صناعة/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'معول':
          if (user.pickaxe > 0) return m.reply('عندك معول!')
            if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return conn.sendMessage(m.chat, { text: `ماعندك موارد😬!\nعشان تصنع معول تحتاج : \n10 خشب🪵 \n5 حديد⛓\n20 خيط🕸️\n5 حجر 🪨`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 5
            user.rock -= 5
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].pickaxe += 1
            user.pickaxedurability = 40
            conn.sendMessage(m.chat, { text: "تمت صناعة المعول 🔨", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
          case 'سيف':
          if (user.sword > 0) return m.reply(' عندك سيف!')
            if(user.wood < 10 || user.iron < 15) return conn.sendMessage(m.chat, { text: `ماعندك موارد كافية!\nعشان تصنع لك سيف تحتاج :\n10 خشب🪵\n15 حديد⛓️`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 15
            global.db.data.users[m.sender].sword += 1
            user.sworddurability = 40
            conn.sendMessage(m.chat, { text: "تمت صناعة السيف🗡️", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
          case 'سنارة':
          if (user.fishingrod > 0) return m.reply('عندك سنارة !')
            if(user.wood < 20 || user.iron < 5 || user.string < 20) return conn.sendMessage(m.chat, { text: `ماعندك موارد كافية!\nعشان تصنع سنارة تحتاج :\n10 خشب🪵\n5 حديد⛓\n20 خيط🕸️`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 2
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].fishingrod += 1
            user.fishingroddurability = 40
            conn.sendMessage(m.chat, { text: "تمت صناعة السنارة 🎣", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
          case 'درع':
          if (user.armor > 0) return m.reply(' عندك درع!')
            if(user.iron < 15 || user.emerald < 1 || user.diamond < 5) return conn.sendMessage(m.chat, { text: `ماعندك موارد كافية!\nعشان تصنع درع تحتاج :\n30 حديد ⛓️\n1 زمرّد ❇️\n5 ألماس 💎`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].emerald -= 1
            global.db.data.users[m.sender].iron -= 15
            global.db.data.users[m.sender].diamond -= 5
            global.db.data.users[m.sender].armor += 1
            user.armordurability = 50
            conn.sendMessage(m.chat, { text: "تمت صناعة الدرع 🥼", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
            case 'بطاقة':
          if (user.atm > 0) return m.reply('عندك بطاقة!')
            if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return conn.sendMessage(m.chat, { text: `ماعندك موارد كافية!\nصناعة البطاقة البنكيه يبيلها :\n10k نقود 💹\n3 زمرّد ❇️\n6 ألماس 💎`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].emerald -= 3
            global.db.data.users[m.sender].money -= 10000
            global.db.data.users[m.sender].diamond -= 6
            global.db.data.users[m.sender].atm += 1
            conn.sendMessage(m.chat, { text: "تمت صناعة البطاقة 💳", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
            default:
            return conn.sendMessage(m.chat, { text: lgocraft + caption, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
        }
      }
  } catch (e) {
    conn.reply(m.chat, 'فيه خطأ بالأمر، تأكد من كتابته صح!', m)
    if (DevMode) {
      m.reply(`*Error:* ${util.format(e)}`)
    }
  }
}
handler.help = ['crafting']
handler.tags = ['ترفيه']
handler.command = /^(صناعة)$/i


export default handler
