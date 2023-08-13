import translate from '@vitalets/google-translate-api';
import { Anime } from '@shineiichijo/marika';

const client = new Anime();

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) return m.reply(`*[❗] ادخل اسم الانمي اللي تبي تبحث عنه (بالانجليزي)*`);
 try {
    let anime = await client.searchAnime(text);
    let result = anime.data[0];

    // Translate each piece of information to Arabic
    let title = await translate(result.title, { to: 'ar' });
    let type = await translate(result.type, { to: 'ar' });
    let status = await translate(result.status.toUpperCase().replace(/\_/g, ' '), { to: 'ar' });
    let episodes = await translate(result.episodes.toString(), { to: 'ar' });
    let duration = await translate(result.duration, { to: 'ar' });
    let source = await translate(result.source.toUpperCase(), { to: 'ar' });
    let airedFrom = await translate(result.aired.from, { to: 'ar' });
    let airedTo = await translate(result.aired.to, { to: 'ar' });
    let popularity = await translate(result.popularity.toString(), { to: 'ar' });
    let favorites = await translate(result.favorites.toString(), { to: 'ar' });
    let rating = await translate(result.rating.toString(), { to: 'ar' });
    let rank = await translate(result.rank.toString(), { to: 'ar' });
    let trailerUrl = await translate(result.trailer.url, { to: 'ar' });
    let background = await translate(result.background, { to: 'ar' });
    let synopsis = await translate(result.synopsis, { to: 'ar' });

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
🎆 • *خلفية:* ${resultes.text}
❄ • *الملخص:* ${resultes2.text}`;

    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] حدث  خطأ!، حاول بعد شوي.*`;
  }
};

handler.command = /^(معلومات|animeinfo)$/i;
export default handler;
