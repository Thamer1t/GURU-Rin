import translate from '@vitalets/google-translate-api';
import { Anime } from '@shineiichijo/marika';

const client = new Anime();

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) return m.reply(`*[❗] ادخل اسم الانمي اللي تبي تبحث عنه (بالانجليزي)*`);
  try {
    let anime = await client.searchAnime(text);
    let result = anime.data[0];
    let resultes = await translate(`${result.background}`, { to: 'en', autoCorrect: true });
    let resultes2 = await translate(`${result.synopsis}`, { to: 'hi', autoCorrect: true });
    let AnimeInfo = `
🎀 • *الاسم:* ${result.title}
🎋 • *االصيغة:* ${result.type}
📈 • *الحالة:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
🍥 • *عدد الحلقات:* ${result.episodes}
🎈 • *المدة: ${result.duration}*
✨ • *مبني على:* ${result.source.toUpperCase()}
💫 • *تم اطلاقه:* ${result.aired.from}
🎗 • *انتهى:* ${result.aired.to}
🎐 • *الشعبية:* ${result.popularity}
🎏 • *التفضيلات:* ${result.favorites}
🎇 • *التقييم:* ${result.rating}
🏅 • *الترتيب:* ${result.rank}
♦ • *تريلر:* ${result.trailer.url}
🌐 • *URL:* ${result.url}
🎆 • *خلفية:* ${resultes.text}
❄ • *الملخص:* ${resultes2.text}`;

    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] حدث  خطأ!، حاول بعد شوي.*`;
  }
};

handler.command = /^(معلومات|animeinfo)$/i;
export default handler;
