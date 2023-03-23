/*
Dibuat oleh : Zyko MD
©Zyko MD 2022




Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/

import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text }) => {
if (!text) throw 'tag user'  
  let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  //    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
  let _pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let zyko = `「 *TRANSAKSI SUKSES* 」
📆 TANGGAL : ${date}
⏰ JAM : ${wib} WIB
🎉 STATUS : Sukses

📱 NOMER PEMBELI : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

Pesanan ${name} Sukses`
    conn.sendButton(m.chat, '.', zyko, pp, [[`Sukses`]], fkon, { contextInfo: { mentionedJid: [who], forwardingScore: 999, isForwarded: true}})
}
handler.help = ['done [@user]']
handler.tags = ['store']
handler.command = /^(done)$/i
export default handler