let handler = async (m, { conn, command, args }) => {
  let type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  let htki = '––––––『'
  let htka = '』––––––'
  
  //----------HARGA
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  let hpetfood = 950

  let caption = `
🐈 • *قطة:* 
➞ ${hcat} عملة حيوان أليف🔖
🐕 • *كلب:*
➞ ${hdog} عملة حيوان أليف🔖
🐎 • *حصان:* 
➞ ${hhorse} عملة حيوان أليف🔖
🦊 • *ثعلب:* 
➞ ${hfox} عملة حيوان أليف🔖
🍖 • *طعام حيوانات:*
➞ ${hpetfood} نقود 💹
- - - - - - - - - - - - - - - - - - - - -
${htki} القدرة ${htka}
➞ 🐈 • قطة :
- تزيد الصحة بنسبة 5% / لكل مستوى عند استخدام *.علاج*
➞ 🐕 • كلب :
- قريبًا...
➞ 🐎 • حصان :
- قريبًا...
➞ 🦊 • ثعلب :
- قريبًا...
`

  try {
    if (/petshop/i.test(command)) {
      switch (type) {
        case 'cat':
          if (user.cat > 0) return m.reply('تملكها بالفعل!')
          if (user.pet < hcat) return m.reply(`عملات الحيوان الأليف خاصتك غير كافية !`)
          global.db.data.users[m.sender].pet -= hcat
          global.db.data.users[m.sender].cat += 1
          conn.sendMessage(m.chat, { text: `*${htki} حيوان جديد !${htka}*\n\n🎉 لقد اشتريت *قطة*`, quoted: m })
          break
        case 'dog':
          if (user.dog > 0) return m.reply('تملكه بالفعل!!')
          if (user.pet < hdog) return m.reply(`عملات الحيوان الأليف خاصتك غير كافية !`)
          global.db.data.users[m.sender].pet -= hdog
          global.db.data.users[m.sender].dog += 1
          conn.sendMessage(m.chat, { text: `*${htki} حيوان جديد !${htka}*\n\n🎉 لقد اشتريت *كلب*`, quoted: m })
          break
        case 'fox':
          if (user.fox > 0) return m.reply('تملكه بالفعل!!')
          if (user.pet < hfox) return m.reply(`عملات الحيوان الأليف خاصتك غير كافية !`)
          global.db.data.users[m.sender].pet -= hfox
          global.db.data.users[m.sender].fox += 1
          conn.sendMessage(m.chat, { text: `*${htki} حيوان جديد !${htka}*\n\n🎉 لقد اشتريت *ثعلب*`, quoted: m })
          break
        case 'horse':
          if (user.horse > 0) return m.reply('تملكه بالفعل!')
          if (user.pet < hhorse) return m.reply(`عملات الحيوان الأليف خاصتك غير كافية !`)
          global.db.data.users[m.sender].pet -= hhorse
          global.db.data.users[m.sender].horse += 1
          conn.sendMessage(m.chat, { text: `*${htki} حيوان جديد !${htka}*\n\n🎉 لقد اشتريت *حصان*`, quoted: m })
          break
        case 'petfood':
          if (global.db.data.users[m.sender].money >= hpetfood) {
            global.db.data.users[m.sender].petFood += 1
            global.db.data.users[m.sender].money -= hpetfood
            conn.sendMessage(m.chat, { text: `*${htki} شراء ${htka}*\n\nلقد اشتريت *1* طعام حيوانات ب *${hpetfood}* عمله!`, quoted: m })
          } else {
            conn.sendMessage(m.chat, { text: `نقودك غير كافية لشراء طعام حيوانات!!`, quoted: m })
          }
          break
        default:
          conn.sendMessage(m.chat, { text: `*${htki} متجر الحيوانات الأليفة ${htka}*\n\n${caption}` }, { quoted: m })
          break
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['petshop']
handler.tags = ['ار بي جي']
handler.command = /^(متجر-الحيوانات)/i

export default handler
