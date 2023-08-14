let handler = async (m, { conn, args, usedPrefix }) => {
    let htki = '––––––『'
  let htka = '』––––––'
	let info = `*➞ مثال:* ${usedPrefix}اطعام قطة
   
- - - - - - - - - - - - - - - - - - - - - - - - - 
${htki} قائمة الحيوانات الأليفة ${htka}
🐈 • قطة
🐕 • كلب
🦊 • ثعلب
🐎 • حصان`
let pesan = pickRandom(['^_^', ' ^-^', '...', 'ᴜ~u', ' ^-^'])
    let type = (args[0] || '').toLowerCase()
    let emo = (type == 'ثعلب' ? '🦊':'' || type == 'قطة' ? '🐈':'' || type == 'كلب' ? '🐕':'' || type == 'حصان' ? '🐴':'' ) 
    let user = global.db.data.users[m.sender]
    let rubah = global.db.data.users[m.sender].fox
    let kuda = global.db.data.users[m.sender].horse
    let kucing = global.db.data.users[m.sender].cat
    let anjing = global.db.data.users[m.sender].dog
    switch (type) {
        case 'ثعلب':
            if (rubah == 0) return conn.sendButton(m.chat, `${htki} غير موجود ${htka}`, 'انت لاتمتلك هذا الحيوان!', null, [['مغامرة', '.بروفايل'],['شراء حيوان', '.متجر-الحيوانات']],m)
            if (rubah == 10) return conn.sendButton(m.chat, `${htki} أقصى مستوى ${htka}`, 'حيوانك الأليف وصل أقصى مستوى !', null, [['مغامرة', '.بروفايل'],['شراء حيوان جديد', '.متجر-الحيوانات']],m)
            let __waktur = (new Date - user.foxlastfeed)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - user.foxlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.foxexp += 20
                    user.foxlastfeed = new Date * 1
                    m.reply(`اطعام *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (user.foxexp > naiklvl) {
                            user.fox += 1
                            user.foxexp -= (rubah * 100)
                            conn.sendButton(m.chat, `${htki} ازداد المستوى ${htka}`, `*تهانينا!* , حيوانك الأليف ازداد مستواه`,null, [['مغامرة', '.بروفايل'],['عرض قدرات الحيوان', '.متجر-الحيوانات']], m)
                        }
                    }
                } else m.reply(`ماعندك طعام حيوانات`)
            } else conn.sendButton(m.chat, `${htki} فترة تهدئة ${htka}`, `حيوانك الأليف ممتلئ, حاول اطعامه بعد\n➞ *${waktur}*`, null, [['مغامرة', '.بروفايل']], m)
            break
        case 'cat':
            if (kucing == 0) return conn.sendButton(m.chat, `${htki} غير موجود ${htka}`, 'انت لاتمتلك هذا الحيوان!', null, [['مغامرة', 'بروفايل'],['شراء حيوان', '.متجر-الحيوانات']],m)
            if (kucing == 10) return conn.sendButton(m.chat, `${htki} أقصى مستوى ${htka}`, 'حيوانك الأليف وصل أقصى مستوى !', null, [['مغامرة', 'بروفايل'],['شراء حيوان جديد', '.متجر-الحيوانات']],m)
            let __waktuc = (new Date - user.catlastfeed)
            let _waktuc = (600000 - __waktuc)
            let waktuc = clockString(_waktuc)
            if (new Date - user.catlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.catngexp += 20
                    user.catlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            
                    if (kucing > 0) {
                        let naiklvl = ((kucing * 100) - 1)
                        if (user.catexp > naiklvl) {
                            user.cat += 1
                            user.catngexp -= (kucing * 100)
                            conn.sendButton(m.chat, `${htki} LEVELUP ${htka}`, `*تهانينا!* , حيوانك الأليف ازداد مستواه`,null, [['مغامرة', 'بروفايل'],['عرض قدرات الحيوان', '.متجر-الحيوانات']], m)
                        }
                    }
                } else m.reply(`ماعندك طعام حيوانات`)
            } else conn.sendButton(m.chat, `${htki} فترة تهدئة ${htka}`, `حيوانك الأليف ممتلئ, حاول اطعامه بعد\n➞ *${waktuc}*`, null, [['مغامرة', 'بروفايل']], m)
            break
        case 'dog':
            if (anjing == 0) return conn.sendButton(m.chat, `${htki} غير موجود ${htka}`, 'انت لاتمتلك هذا الحيوان!', null, [['مغامرة', 'بروفايل'],['شراء حيوان', '.متجر-الحيوانات']],m)
            if (anjing == 10) return conn.sendButton(m.chat, `${htki} أقصى مستوى ${htka}`, 'حيوانك الأليف وصل أقصى مستوى !', null, [['مغامرة', 'بروفايل'],['شراء حيوان جديد', '.متجر-الحيوانات']],m)
            let __waktua = (new Date - user.doglastfeed)
            let _waktua = (600000 - __waktua)
            let waktua = clockString(_waktua)
            if (new Date - user.doglastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.dogexp += 20
                    user.doglastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 100) - 1)
                        if (user.dogexp > naiklvl) {
                            user.dog += 1
                            user.dogexp -= (anjing * 100)
                            conn.sendButton(m.chat, `${htki} LEVELUP ${htka}`, `*تهانينا!* , حيوانك الأليف ازداد مستواه`,null, [['مغامرة', 'بروفايل'],['عرض قدرات الحيوان', '.متجر-الحيوانات']], m)
                        }
                    }
                } else m.reply(`ماعندك طعام حيوانات`)
            } else conn.sendButton(m.chat, `${htki} فترة تهدئة ${htka}`, `حيوانك الأليف ممتلئ, حاول اطعامه بعد\n➞ *${waktua}*`, null, [['مغامرة', 'بروفايل']], m)
            break
        case 'horse':
            if (kuda == 0) return conn.sendButton(m.chat, `${htki} غير موجود ${htka}`, 'انت لاتمتلك هذا الحيوان!', null, [['مغامرة', 'بروفايل'],['شراء حيوان', '.متجر-الحيوانات']],m)
            if (kuda == 10) return conn.sendButton(m.chat, `${htki} أقصى مستوى ${htka}`, 'حيوانك الأليف وصل أقصى مستوى !', null, [['مغامرة', 'بروفايل'],['شراء حيوان جديد', '.متجر-الحيوانات']],m)
            let __waktuk = (new Date - user.horselastfeed)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - user.horselastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.horseexp += 20
                    user.horselastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (user.horseexp > naiklvl) {
                            user.horse += 1
                            user.horseexp -= (kuda * 100)
                            conn.sendButton(m.chat, `${htki} LEVELUP ${htka}`, `*تهانينا!* , حيوانك الأليف ازداد مستواه`,null, [['مغامرة', 'بروفايل'],['عرض قدرات الحيوان', '.متجر-الحيوانات']], m)
                        }
                    }
                } else m.reply(`ماعندك طعام حيوانات`)
            } else conn.sendButton(m.chat, `${htki} فترة تهدئة ${htka}`, `حيوانك الأليف ممتلئ, حاول اطعامه بعد\n➞ *${waktuk}*`, null, [['مغامرة', 'بروفايل']], m)
            break
        default:
            return conn.sendButton(m.chat, `${htki} غير موجود ${htka}`, info, null, [['مغامرة', 'بروفايل'],['شراء حيوان', '.متجر-الحيوانات']], m)
    }
}
handler.help = ['اطعام [pet type]']
handler.tags = ['ار بي جي']
handler.command = /^(اطعام(ing)?)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' ساعة ', m, ' دقيقة ', s, ' ثانية'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
