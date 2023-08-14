//import db from '../lib/database.js'
const items = {
    شراء: {
        ألماس: {
            exp: 350
        },
        جرعة: {
            money: 1250,
        },
        قمامة: {
            money: 4,
        },
        خشب: {
            money: 700
        },
        حجر: {
            money: 850
        },
        خيط: {
            money: 400
        },
        حديد: { 
        	money: 3000
        }
    },
    بيع: {
        جرعة: {
            money: 125,
        },
        قمامة: {
            money: 2
        },
        خشب: {
            money: 600
        },
        حجر: {
            money: 750
        },
        خيط: {
            money: 300
        },
        حديد: {
            money: 2500
        },
        ذهب: {
            money: 4700
        },
        ألماس: {
            money: 9000
        },
        زمرد: {
            money: 15000
        }
    }
}

let handler = async (m, { command, usedPrefix, args }) => {
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    const info = `
استخدم *${usedPrefix}${command} [المنتج] [لعدد]*
مثال: *${usedPrefix}${command} جرعة 10*
    
📍قائمة المنتجات: 
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `${v} | ${listItems[v][paymentMethod]} ${paymentMethod}`.trim()
    }).join('\n')}
`.trim()
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(info)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`ليس لديك مايكفي من ${global.rpg.emoticon(paymentMethod)}${paymentMethod} للشراء *${total}* ${global.rpg.emoticon(item)}${item}. تحتاج إلى *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}*  ${paymentMethod} لتستطيع الشراء`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return m.reply(`لقد اشتريت *${total}* ${global.rpg.emoticon(item)}${item}`)
    } else {
        if (user[item] < total) return m.reply(`ليس لديك مايكفي من *${item}* للبيع, لاتملك سوى ${user[item]} `)
        user[item] -= total
        user.money += listItems[item].money * total
        return m.reply(`لقد بعت *${total}* ${item}`)
    }
}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['ار بي جي']
handler.command = /^(شراء|بيع)$/i

handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
