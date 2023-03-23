
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg  
  conn.reply(m.chat, `${text}`, m, { mentions: users }) 
  
}
handler.help = ['pengumuman'].map(v => v + ' [teks]')
handler.tags = ['store']
handler.command = /^(pengumuman)$/i

handler.group = true
handler.admin = true

export default handler 

