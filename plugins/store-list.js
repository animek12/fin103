/*
Di Record : Zyko MD
©Zyko MD 2023




Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/


import { areJidsSameUser } from '@adiwajshing/baileys'
import moment from 'moment-timezone'
    let handler = async (m, { conn, usedPrefix, command }) => {
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
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
	let msgs = db.data.msgs
    let mentionedJid = [m.sender]  
    let group = m.chat
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants is not defined :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    let ucpn = `${ucapan()}`
let nn = `*List From : ${groupMetadata.subject}*

📆 TANGGAL : ${date}
⏰ JAM : ${wib} WIB`
    let name = conn.getName(m.sender)
	let msg = (Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })).map(v => v.nama)
	let row = Object.keys(msg).map(v => ({
		title: msg[v],
		description: '',
		rowId: msg[v]
	}))
	let button = {	
		description: `${ucapan()} : @${m.sender.split("@")[0]}`,
		footerText: nn,
        buttonText: 'CLICK HERE !!',
	}
	if (msg[0]) return await conn.sendListM(m.chat, button, row, m)
	else throw `\nbelum ada Menu yg Ada di list store`
}
handler.help = ['store'].map(v => 'list' + v)
handler.tags = ['store']
handler.command = /^list(store|shop)?$/i
export default handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Malam"
  if (time >= 4) {
    res = "Pagi"
  }
  if (time >= 10) {
    res = "Siang️"
  }
  if (time >= 15) {
    res = "Sore"
  }
  if (time >= 18) {
    res = "Malam"
  }
  return res
}