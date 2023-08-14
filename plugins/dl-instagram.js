import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `رابط البوست ؟`;
  m.reply(wait);

  let res;
  try {
    res = await fetch(`https://inrl-web.onrender.com/api/insta?url=${text}`);
  } catch (error) {
    throw `حدث خطأ: ${error.message}`;
  }

  let api_response = await res.json();
  if (!api_response || !api_response.result || api_response.result.length === 0) {
    throw `No video found or Invalid response from API.`;
  }

  let cap = `تفضل مقطعك 🫡 >,<`;

  conn.sendFile(m.chat, api_response.result[0], 'instagram.mp4', cap, m);
}

handler.help = ['instagram']
handler.tags = ['تحميل']
handler.command = /^(انستا|igdl|ig|instagramdl)$/i

export default handler
