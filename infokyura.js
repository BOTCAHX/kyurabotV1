let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *Informasi Owner* ´ˎ˗
│ ✎ Nama : Tio 
│    Kelas : lulus
│    Umur : 19
│    Asal : Tasikmalaya
│    Status : gatau mw isi apa anj
│    Suka : Jepang, Coding (dikit), B.Inggris
│ ✎ _Official Grup_ :
│    
│ ✎ _Instagram_ :
│   
│ ✎ _YouTube_ : 
│    
│ ✎ _FaceBook_ :
│    
│ ✎ _WhatsApp_ :
│    
╰‿‿‿‿‿‿‿‿
`.trim(), m)
}

handler.help = ['infokyura']
handler.tags = ['main']
handler.command = /^(infokyura)$/i

handler.exp = 150

module.exports = handler
