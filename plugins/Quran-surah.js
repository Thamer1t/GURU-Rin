import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';

let quranSurahHandler = async (m, { conn }) => {
  try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1];

    if (!surahInput) {
      throw new Error(`زودني برقم السورة او اسمها `);
    }

    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran');
    let surahList = await surahListRes.json();

    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    );

    if (!surahData) {
      throw new Error(`اسف، ماحصلت: "${surahInput}"`);
    }

    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`);
    
    if (!res.ok) {
      let error = await res.json(); 
      throw new Error(`خطأ بالAPI ${res.status} رسالة الخطأ ${error.message}`);
    }

    let json = await res.json();

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true });

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true });

    let quranSurah = `
🕌 *القرآن الكريم*\n
📜 *السورة ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
عدد الآيات: ${json.data.ayahCount}\n

    m.reply(quranSurah);

    if (json.data.recitation.full) {
      conn.sendFile(m.chat, json.data.recitation.full, 'recitation.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    }
  } catch (error) {
    console.error(error);
    m.reply(`خطأ: ${error.message}`);
  }
};

quranSurahHandler.help = ['سورة [surah_number|surah_name]'];
quranSurahHandler.tags = ['القران', 'سورة'];
quranSurahHandler.command = ['سورة', 'surah']

export default quranSurahHandler;

  
  
  
  
