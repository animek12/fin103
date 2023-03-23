import { createHash } from 'crypto'
import { promises, readFileSync } from 'fs'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	let namop = ["Random Tahun",
	"30 Tahun",
	"29 Tahun",
	"28 Tahun",
	"27 Tahun",
	"26 Tahun",
	"25 Tahun",
	"24 Tahun",
	"23 Tahun",
	"22 Tahun",
	"21 Tahun",
	"20 Tahun",
	"19 Tahun",
	"18 Tahun",
	"17 Tahun",
	"16 Tahun",
	"15 Tahun",
	"14 Tahun",
	"13 Tahun",
	"12 Tahun",
	"11 Tahun",
	"10 Tahun",
	"9 Tahun",
]

	let idop = ['.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9']),
	'.daftar ' + namae + '.30 ',
	'.daftar ' + namae + '.29 ',
	'.daftar ' + namae + '.28 ',
	'.daftar ' + namae + '.27 ',
	'.daftar ' + namae + '.26 ',
	'.daftar ' + namae + '.25 ',
	'.daftar ' + namae + '.24 ',
	'.daftar ' + namae + '.23 ',
	'.daftar ' + namae + '.22 ',
	'.daftar ' + namae + '.21 ',
	'.daftar ' + namae + '.20 ',
	'.daftar ' + namae + '.19 ',
	'.daftar ' + namae + '.18 ',
	'.daftar ' + namae + '.17 ',
	'.daftar ' + namae + '.16 ',
	'.daftar ' + namae + '.15 ',
	'.daftar ' + namae + '.14 ',
	'.daftar ' + namae + '.13 ',
	'.daftar ' + namae + '.12 ',
	'.daftar ' + namae + '.11 ',
	'.daftar ' + namae + '.10 ',
	'.daftar ' + namae + '.9 '
]

	let desop = ["Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : "
]


let row = Object.keys(namop, desop, idop).map((v, index) => ({
  title: `${htki} ${namop[v]} ${htka}`,
  description: `\nNo.${1 + index}\n${htjava}${desop[v]} ${idop[v]}\n${dmenuf}`,
  rowId: idop[v]
}))
let button = {
  buttonText: `☂️ Pilih Umur Mu Disini ☂️`,
  description: htki + ' ʀᴇɢɪsᴛᴇʀ ' + htka,
  footerText: `┗ *ʏᴏᴜʀ ɴᴀᴍᴇ:* ${conn.getName(m.sender)}\n<❔> Want a costume name? type *${usedPrefix + command} yourname.age*`
}
	/*
	const sections = [
	{
	title: htjava + "Select Your Age Here !" + htjava,
	rows: [
	    {title: "Random Tahun", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: htki + " O L D " + htka,
	rows: [
	    {title: "30 Tahun", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29 Tahun", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28 Tahun", rowId: '.daftar ' + namae + '.28 '},
	{title: "27 Tahun", rowId: '.daftar ' + namae + '.27 '},
	{title: "26 Tahun", rowId: '.daftar ' + namae + '.26 '},
	{title: "25 Tahun", rowId: '.daftar ' + namae + '.25 '},
	{title: "24 Tahun", rowId: '.daftar ' + namae + '.24 '},
	{title: "23 Tahun", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 Tahun", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 Tahun", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: htki + " Y O U N G " + htka,
	rows: [
	    {title: "20 Tahun", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 Tahun", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 Tahun", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 Tahun", rowId: '.daftar ' + namae + '.17 '},
	{title: "16 Tahun", rowId: '.daftar ' + namae + '.16 '},
	{title: "15 Tahun", rowId: '.daftar ' + namae + '.15 '},
	{title: "14 Tahun", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 Tahun", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 Tahun", rowId: '.daftar ' + namae + '.12 '},
	{title: "11 Tahun", rowId: '.daftar ' + namae + '.11 '},
	{title: "10 Tahun", rowId: '.daftar ' + namae + '.10 '},
	{title: "9 Tahun", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `│›Please select your age at the bottom button...`,
  footer: `┗ *ʏᴏᴜʀ ɴᴀᴍᴇ:* ${conn.getName(m.sender)}\n<❔> Want a costume name? type *${usedPrefix + command} yourname.age*`,
  title: htki + ' ʀᴇɢɪsᴛᴇʀ ' + htka,
  buttonText: "Click Here !",
  sections
}
*/

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  //if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!Reg.test(text)) return conn.sendListM(m.chat, button, row, m)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw '*Gak boleh!*,\nTua amat dah 🗿'
  if (age < 5) throw '*Gak boleh!*,\nBanyak pedo 🗿'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let imgr = flaaa2
  let res = JSON.parse(readFileSync('./json/emoji.json'))
  let em = res.emoji
  let mim_ = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/zip","application/pdf"]
  let cap = `━━━━ 「 *Successful Registration* 」━━━`
let ucp = `    
╭━━「 *ᴜsᴇʀs* 」
│▸ *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│▸ *ɴᴀᴍᴇ:* ${name}
│▸ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
│▸ *sɴ:* ${sn}
╰═┅═━––––––๑

ᴅᴀᴛᴀ ᴜsᴇʀ ʏᴀɴɢ ᴛᴇʀsɪᴍᴘᴀɴ ᴅɪᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ, ᴅɪᴊᴀᴍɪɴ ᴀᴍᴀɴ ᴛᴀɴᴘᴀ ᴛᴇʀsʜᴀʀᴇ (. ❛ ᴗ ❛.)

Selamat ${name} kamu sudah bisa mengunakan 
akses botz ${namebot} (. ❛ ᴗ ❛.)

ꜱᴜʙꜱᴄʀɪʙᴇ ʏᴛ: ZYKOBOTZ MD`

conn.send2ButtonImg(m.chat, imgr + 'Sukses daftar', cap, ucp + '\n\n' + botdate, em.getRandom() + ' Menu', '.menu', em.getRandom() + 'Donasi', '.donasi',  fkontak)   
/*  let buttonMessage= {
'document':{'url':'https://youtu.be/E1Cb97Rb-8U'},
'mimetype':global.ddocx,
'fileName':'▢━━━━「 Registration 」━━━━▢',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtu.be/E1Cb97Rb-8U',
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/ed3b4ac35fb14a4005447.jpg')).buffer(),
'sourceUrl':'https://youtu.be/E1Cb97Rb-8U'}},
'caption':cap,
'footer':ucp,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})*/  
  }
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(register|verify|daftar|reg(is)?|verif)$/i

export default handler
