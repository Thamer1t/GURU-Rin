import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `عطني كلام او رد على رسالة!`;
  }

 
  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    const response = await fetch(`https://guru-gpt4-prod-gpt4-reverse-o8hyfh.mo1.mogenius.io/api/gurugpt?query=${encodeURIComponent(text)}`);
    const data = await response.json();
    const { response: result } = data; 
    m.reply(result.trim()); 
  } catch (error) {
    console.error('Error:', error); 
    throw `*ERROR*`;
  }
};

handler.command = ['رين', 'gpt', 'ai', 'ذكاء'];
handler.diamond = false;

export default handler;
