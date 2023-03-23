import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
const { makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
const defaultMenu = {
  before: `
╭─────═[ INFO USER ]═─────⋆
│╭───────────────···
┴│☂︎ *Name:* %name
${emot}│☂︎ *Tag:* %tag
${emot}│☂︎ *Premium:* %prems
${emot}│☂︎ *Limit:* %limit
${emot}│☂︎ *Money:* %money
${emot}│☂︎ *Role:* %role
${emot}│☂︎ *Level:* %level [ %xp4levelup Xp For Levelup]
${emot}│☂︎ *Xp:* %exp / %maxexp
┬│☂︎ *Total Xp:* %totalexp
│╰────────────────···
┠─────═[ TODAY ]═─────⋆
│╭────────────────···
┴│    *${ucapan()} %name!*
${emot}│☂︎ *Tanggal:* %week %weton
${emot}│☂︎ *Date:* %date
${emot}│☂︎ *Tanggal Islam:* %dateIslamic
${emot}│☂︎ *WIB:* %wib
┬│☂︎ *Waktu:* %time
│╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│☂︎ *Nama Bot:* %me
${emot}│☂︎ *Mode:* %mode
${emot}│☂︎ *Prefix:* [ *%_p* ]
${emot}│☂︎ *Baileys:* Multi Device
${emot}│☂︎ *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
${emot}│☂︎ *Platform:* %platform
${emot}│☂︎ *Type:* Node.Js
${emot}│☂︎ *Uptime:* %muptime
┬│☂︎ *Database:* %rtotalreg dari %totalreg
│╰────────────────···
╰──────────═┅═──────────

⃝▣──「 *INFO CMD* 」───⬣
│ *%totalfeatures* Command
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
▣────────────⬣
`.trimStart(),
  header: '⃝▣──「 %category 」───⬣',
  body: `${emot} %cmd %isPremium %islimit`,
  footer: '▣───────────⬣\n',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, usedPrefix, command}) => {
let imgr = flaaa2
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
let names = await conn.getName(m.sender)
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
	 let ktnya = [`\n\n\n ${emojis} Hai *${names}* : \n${htjava} _Mungkin menu ini bermanfaat?_`,
`\n\n\n ${emojis} Hai *${names}* : \n${htjava} _Terimakasih sudah menggunakan bot ini_`,
`\n\n\n ${emojis} Hai *${names}* : \n${htjava} _Semoga gak erorr_`,
`\n\n\n ${emojis} Hai *${names}* : \n${htjava} _Jika lama kemungkiman erorr atau delay_`,
`\n\n\n ${emojis} Hai *${names}* : \n${htjava} _Menampilkan menu_`,
`\n\n\n ${emojis} Hai *${names}* : \n${htjava} _Wait..._`,
`\n\n\n ${emojis} Hai *${names}* : \n${htjava} _Dua tiga kucing berlari_`,
`\n\n\n ${emojis} Hai *${names}* : \n${htjava} _Bentar bang akan kutampilkan menunya_`,
`\n\n\n ${emojis} Hai *${names}* : \n${htjava} _Prosess..._`]
    let ktx = ktnya.getRandom()
	let tags
	let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'anime', 'update', 'berita', 'edukasi', 'news', 'random', 'maker', 'menbalas', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'asupan', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'catatan', 'absen', 'store', 'virus', 'nsfw', 'audio', 'jadibot', 'random', 'info', 'audioanime', 'owner', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main', 
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'random': 'Random',
  'fun': 'Fun',
  'asupan': 'Asupan',
  'anime': 'Anime', 
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Vote',
  'absen': 'Absen',
  'catatan': 'Catatan',
  'store': 'Store Menu',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis',
  'audio': 'Audio',
  'audioanime': 'Audioanime',
  'maker': 'maker Menu',
  'berita': 'Berita',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'random') tags = {
   'random': 'Random'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'berita') tags = {
    'berita': 'Berita'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis'
  }
  if (teks == 'store') tags = {
    'store': 'Store Menu'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
if (teks == 'menbalas') tags = {
    'menbalas': 'Menfess'
  }
if (teks == 'virus') tags = {
    'virus': 'Virus'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'asupan') tags = {
  'asupan': 'Asupan'
 }
 if (teks == 'vidiorandom') tags = {
 'vidiorandom': 'Vidiorandom'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Vote',
  }
  if (teks == 'maker') tags = {
    'maker': 'maker',
  }
  if (teks == 'catatan') tags = {
  'catatan': 'Catatan',
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
}
  if (teks == 'audioanime') tags = {
    'audioanime': 'Audioanime'
}
  if (teks == 'sound2004') tags = {
    'sound2004': 'Sound2004'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nocategory') tags = {
    'nocategory': 'No Category'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)

let usrs = db.data.users[m.sender]
let jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let namop = ["SPEED BOT",
"OWNER BOT",
"RUNTIME BOT",
"SCRIPT BOT",
"SEWA",
"BUY PREMIUM",
"DONAS",
"SUBSCRIBE MY YT CANNEL",
"Store",
"Menfess Balas",
"All",
"Rpg",
"Exp",
"Game",
"Fun",
"Kerang",
"Quotes",
"Asupan",
"Anime",
"Nsfw",
"Premium",
"Anonymous Chats",
"Al-Quran",
"Internet",
"Berita",
"Downloaders",
"Stikers", 
"Logo",
"Nulis",
"Buat Catatan",
"Absen",
"Preset Alight Montion/Apk",              
"Audio Anime",         
"Audio",
"Sound Menu",
"Group",
"Admin",
"Database",
"Tools",      
"Info",
"Owner",
"Bug Menu",
"No Category",
"Menu V1",
"Menu V2",
"Menu V3"]

let idop = [".speed",
".owner",
".runtime",
".sc",
".sewa",
".premium",
".donasi",
".zykomd",
".? store",
".? menbalas",
".? all",
".? rpg",
".? xp",
".? game",
".? fun",
".? kerangajaib",
".? quotes",
".? asupan",
".? anime",
".? nsfw",
".? premium",
".? anonymous",
".? quran",
".? internet",
".? berita",
".? downloader",
".? stiker",
".? maker",
".? nulis",
".? catatan",
".? absen",
".presetmenu",             
".? audioanime",             
".? audio",
".soundmenu",
"? group",
".? admin",
".? database",
".? tools",       
"? info",
".? owner",
".bugmenu",
".? nocategory",
".Menuv1",
".Menuv2",
".Menuv3"] 

let desop = ["Menampilkan kecepatan respon BOT",
"Menampilkan List owner BOT",
"𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 Waktu Bot Berjalan",
"Nih Source Code",
"Menampilkan list harga sewa BOT",
"Menampilkan list harga premium",
"Support BOT agar lebih fast respon",
"Jangan Lupa mampir ke Cannel ZykoBotz MD", 
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
"Jangan Salah Mengunakan Bug Botz Ini",
ktx] 
/*  const ramadhan = new Date("April 21, 2023 23:59:59")
  const sekarangg = new Date().getTime()
  const lebih = ramadhan - sekarangg
  const harii = Math.floor(lebih / (1000 * 60 * 60 * 24))
  const jamm = Math.floor((lebih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const menitt = Math.floor((lebih % (1000 * 60 * 60)) / (1000 * 60))
  const detikk = Math.floor((lebih % (1000 * 60)) / 1000)
  
  ////natal

  const natal = new Date("December 25, 2023 23:59:59")
  const kapanatal = new Date().getTime()
  const natalnya = natal - kapanatal
  const nhari = Math.floor(natalnya / (1000 * 60 * 60 * 24))
  const njam = Math.floor(
    (natalnya % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const nmenit = Math.floor((natalnya % (1000 * 60 * 60)) / (1000 * 60))
  const mdetek = Math.floor((natalnya % (1000 * 60)) / 1000)
  
  ///raya

  const hariRaya = new Date("April 22, 2023 23:59:59")
  const sekarang = new Date().getTime()
  const Selisih = hariRaya - sekarang
  const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24))
  const jjam = Math.floor((Selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const mmmenit = Math.floor((Selisih % (1000 * 60 * 60)) / (1000 * 60))
  const ddetik = Math.floor((Selisih % (1000 * 60)) / 1000)
  
  //tahun baru 
  
  const tahunbaru = new Date("April 22, 2023 23:59:59")
  const sekarang = new Date().getTime()
  const Selisih = tahunbaru - sekarang
  const tjhari = Math.floor(Selisih / (1000 * 60 * 60 * 24))
  const tjam = Math.floor((Selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const tmmenit = Math.floor((Selisih % (1000 * 60 * 60)) / (1000 * 60))
  const tdetik = Math.floor((Selisih % (1000 * 60)) / 1000)
*/
let tek = `*${ucapan()} ${conn.getName(m.sender)}*
┌–––––––––––––––––✥
│「 Hai Kak👋 」
└┬❖ 「 ${conn.getName(m.sender)} 」
┌┤❀  Bagaimana Harimu? 😄
┊│❀  Terima Kasih Telah Menggunakan Bot Kami
│└────────────┈ ⳹
┊   「 *U s e r  I n f o 克* 」
┊↬✗• *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
┊↬✗• *ᴛᴀɢs:* @${m.sender.split`@`[0]}
┊↬✗• *sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
┊↬✗• *ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
┗–––––––––––––––––✥
┌–––––––––––––––––✥
┊   「 *S t a t u s  I n f o 比* 」
┊↬✗• *ᴜᴘᴛɪᴍᴇ:* ${mpt}
┊↬✗• *ᴛɪᴍᴇ:* ${moment.tz('Asia/Jakarta').format('HH')} H  ${moment.tz('Asia/Jakarta').format('mm')} M  ${moment.tz('Asia/Jakarta').format('ss')} S
┊↬✗• *ᴜsᴇʀs:* ${Object.keys(global.db.data.users).length}
┊↬✗• *ʟɪᴍɪᴛ:* ${usrs.limit}
┊↬✗• *ʟᴇᴠᴇʟ:* ${usrs.level}
┊↬✗• *ʀᴏʟᴇ:* ${usrs.role}${usrs.premiumTime > 1 ? `
┗––––––––––––––––––✥
┌––––––––––––––––––✥
┊↬✗• *ᴇxᴘɪʀᴇᴅ ᴘʀᴇᴍɪᴜᴍ:*
┊${clockStringP(usrs.premiumTime - new Date())}` : ''}
┗––––––––––––––––––✥`
let to =``//isi dah kalau mau 


// MAU YANG NO ENC ZYKOBOTZ MD V9
   // MURAH KO  MINAT PC GW wa.me/6283133329293
   
   
const _0x3f0820=_0x4be7;(function(_0x2e1938,_0x3b0f54){const _0x2e9a24=_0x4be7,_0x37060c=_0x2e1938();while(!![]){try{const _0x38bb5d=-parseInt(_0x2e9a24(0x189))/0x1*(-parseInt(_0x2e9a24(0x18a))/0x2)+parseInt(_0x2e9a24(0x191))/0x3+parseInt(_0x2e9a24(0x18e))/0x4+parseInt(_0x2e9a24(0x18f))/0x5+-parseInt(_0x2e9a24(0x18c))/0x6+parseInt(_0x2e9a24(0x18d))/0x7+-parseInt(_0x2e9a24(0x196))/0x8;if(_0x38bb5d===_0x3b0f54)break;else _0x37060c['push'](_0x37060c['shift']());}catch(_0x22458e){_0x37060c['push'](_0x37060c['shift']());}}}(_0x265e,0x7d877));function _0x4be7(_0x39b15c,_0x1aad62){const _0x265e7b=_0x265e();return _0x4be7=function(_0x4be75e,_0x8f2537){_0x4be75e=_0x4be75e-0x189;let _0xe7347a=_0x265e7b[_0x4be75e];return _0xe7347a;},_0x4be7(_0x39b15c,_0x1aad62);}let row=Object['keys'](namop,desop,idop)[_0x3f0820(0x194)]((_0x206162,_0x785333)=>({'title':htki+'\x20'+emojis+'\x20'+dmenub+'\x20'+namop[_0x206162]+'\x20'+emot+'\x20'+htka,'description':_0x3f0820(0x18b)+(0x1+_0x785333)+'\x0a'+htjava+desop[_0x206162]+'\x0a'+dmenuf,'rowId':''+idop[_0x206162]})),button={'buttonText':_0x3f0820(0x193),'description':tek,'footerText':to};if(teks==_0x3f0820(0x192))return conn[_0x3f0820(0x190)](m[_0x3f0820(0x195)],button,row,m);function _0x265e(){const _0x461711=['map','chat','8095560cTaVie','10285mZpPEV','128LXsSqj','\x0aNo.','4411830ukKShK','549983PQXIWa','1155376gYLQCm','2104935GWDzNr','sendListM','2444331QYtbkS','404','☂️\x20CLICK\x20HERE\x20☂️️'];_0x265e=function(){return _0x461711;};return _0x265e();}
/*const listMessage = {
  text: tek,
  footer: `📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner\n\nᴍᴀᴅᴇ ᴡɪᴛʜ ʙʏ ${nameown}\n\n${botdate}\n\n${wm2}`,
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `CLICK HERE ⎙️`, 
  sections
}
  if (teks == '404') {  
  	return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }*/
	  
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
     let vn = './media/yntkts'
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    //----------------- FAKE
  let hai = ['Hai,', 'Ohayo,', 'Kyaa,', 'Halo,', 'Nyann,'].getRandom()
 let fvn = {quoted: { key: {participant : '0@s.whatsapp.net'},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "2022","ptt": "true"} } }}
 let floc = {quoted: { key: { participant : '0@s.whatsapp.net'}, message: { "liveLocationMessage": { "caption": `Menu`,"h": `${name}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}} }}
 let fdocs = {quoted: { key : { participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Hai Kak ${name}!`,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }}}}
 let fgclink = {quoted: {key: {participant : '0@s.whatsapp.net'},message: {groupInviteMessage: {groupJid: "17608914335-1625305606@g.us",inviteCode: null,groupName: `Hai ${name}!`,  caption: wm,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }} }}
 let fgif = {quoted: {key: { participant : '0@s.whatsapp.net'}, message: {  "videoMessage": {  "title": `Hai Kak ${name}!`, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') } } } }
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
       
    let urls = pickRandom(['https://telegra.ph/file/035e524939ab0294ba91f.jpg', 'https://telegra.ph/file/96b2275d3b14d071290bc.jpg', 'https://telegra.ph/file/2c6b7660bc6126404a9bb.jpg', 'https://telegra.ph/file/c635bf577bb9d59a3e00b.jpg', 'https://telegra.ph/file/be8dd52f6363f9e9f5a60.jpg', 'https://telegra.ph/file/02e53361b9dc946f63c8d.jpg', 'https://telegra.ph/file/298ed2f1bba17aeb64ca8.jpg', 'https://telegra.ph/file/be2a18221974147f66ea0.jpg',"https://telegra.ph/file/f46c9ebb51efc49ea14d5.mp4",
"https://telegra.ph/file/1fb94fb0db4d9db149ad7.mp4",
"https://telegra.ph/file/6dac1453cbc23bff8754a.mp4",
"https://telegra.ph/file/7e744334e7bfd7e685c65.mp4",
"https://telegra.ph/file/9ca7a7e28257b73d2c0ce.mp4",
"https://telegra.ph/file/aaebb2ab4c79cc69906f7.mp4"])
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    //FAKE TROLI

    const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
    
    const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: '[❗] Memuat Menu ' + teks + '...\n Sabar Ya Kak ^ω^', 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
   conn.reply(m.chat, `*Tunggu Sebentar Kak*..`, ftrol)  
   
         
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'application/vnd.android.package-archive'
    let d6 = 'application/zip'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
//------------------< MENU >----------------
/*let mangkane25 = "mangkane25"
let mangkane26 = "mangkane26"
let mangkane27 = "mangkane27"
let mangkane28 = "mangkane28"
let mangkane29 = "mangkane29"
let mangkane30 = "mangkane30"
let mangkane31 = "mangkane31"
let mangkane32 = "mangkane32"
let mangkane33 = "mangkane33"
let mangkane34 = "mangkane34"
let mangkane35 = "mangkane35"
let mangkane36 = "mangkane36"
let mangkane37 = "mangkane37"
let mangkane38 = "mangkane38"
let mangkane39 = "mangkane39"
let mangkane40 = "mangkane40"
let snd = `${pickRandom([mangkane25,mangkane26,mangkane27,mangkane28,mangkane29,mangkane30,mangkane31,mangkane32,mangkane33,mangkane34,mangkane35,mangkane36,mangkane37,mangkane38,mangkane39,mangkane40])}`
let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${snd}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: "SUBSCRIBE YT",
    body: bottime,
    thumbnail: await (await fetch(zykomd)).buffer(),
    sourceUrl: syt
 	}
     }
    })*/ 
    
    // MAU YANG NO ENC ZYKOBOTZ MD V9
   // MURAH KO  MINAT PC GW wa.me/6283133329293

    // minus info-tqto.js dan info-script.js tetep di enc, karena banyak yang menghapus credit + script
    // kalau masih kekeh semua no enc 35k aja om
const _0x268735=_0x31f2;(function(_0x26997d,_0x7333c0){const _0x19a8ff=_0x31f2,_0x3d036=_0x26997d();while(!![]){try{const _0x33a406=parseInt(_0x19a8ff(0x133))/0x1+parseInt(_0x19a8ff(0x151))/0x2*(-parseInt(_0x19a8ff(0x155))/0x3)+-parseInt(_0x19a8ff(0x13f))/0x4+parseInt(_0x19a8ff(0x146))/0x5*(parseInt(_0x19a8ff(0x125))/0x6)+-parseInt(_0x19a8ff(0x12c))/0x7+-parseInt(_0x19a8ff(0x132))/0x8*(-parseInt(_0x19a8ff(0x134))/0x9)+-parseInt(_0x19a8ff(0x160))/0xa*(parseInt(_0x19a8ff(0x12f))/0xb);if(_0x33a406===_0x7333c0)break;else _0x3d036['push'](_0x3d036['shift']());}catch(_0x76a427){_0x3d036['push'](_0x3d036['shift']());}}}(_0x3bd1,0xde9ef));function _0x3bd1(){const _0x312f3f=['9MPGFNc','https://www.instagram.com/kabulsaputra21','send2ButtonVid','.menuv2','getRandom','Owner','ke7','https://www.instagram.com/kabulsaputra21/','Menu\x204','\x0aᴍᴀᴅᴇ\x20ᴡɪᴛʜ\x20\x20ʙʏ\x20','Jᴏɪɴ\x20Sɪɴɪ\x20Cᴜʏ','4044636dgfQtO','trim','Donasi','.menu','send2ButtonDoc','ke6','.owner','10xlXmue','https://telegra.ph/file/4ece0195006cf1bc508ea.mp4','ke8','send2ButtonLoc','\x0aᴍᴀᴅᴇ\x20ᴡɪᴛʜ\x20ʙʏ\x20','\x20Owner','┅────┅─❏\x20*MENU\x203*\x20❏─┅────┅\x0a','Menu','Menu\x202','send2ButtonImg','ke9','2fvbJAy','┅────┅─❏\x20*MENU\x2011*\x20❏─┅────┅','ke3','┅────┅─❏\x20*MENU\x208*\x20❏─┅────┅','2070801UbMeOx','.credit','send3ButtonImg','Speed','send3ButtonVid','chat','ke5','.owmer','buffer','┅────┅─❏\x20*MENU\x205*\x20❏─┅────┅\x0a','┅────┅─❏\x20*MENU\x2010*\x20❏─┅────┅','6964030RBUfZa','sendMessage','ke2','.donasi','┅────┅─❏\x20*MENU\x201*\x20❏─┅────┅\x0a','Menu\x208','┅────┅─❏\x20*MENU\x204*\x20❏─┅────┅\x0a','ke1','┅────┅─❏\x20*MENU\x207*\x20❏─┅────┅','5251602TaNXBz','Menu\x205','donasi','.speed','Sewa','https://telegra.ph/file/6dac1453cbc23bff8754a.mp4','\x20Donasi','1469762mwVVzJ','Menu\x203','ke10','11SyFAsS','┅────┅─❏\x20*MENU\x206*\x20❏─┅────┅','ke4','1684192jSGvPQ','1558592qvrEuh'];_0x3bd1=function(){return _0x312f3f;};return _0x3bd1();}let pusat=[_0x268735(0x123),'ke2','ke3',_0x268735(0x131),_0x268735(0x15b),_0x268735(0x144),'ke7','ke8',_0x268735(0x150),_0x268735(0x12e),'ke11'],pilih=pusat[_0x268735(0x138)]();pilih==_0x268735(0x123)&&await conn[_0x268735(0x143)](m[_0x268735(0x15a)],_0x268735(0x120),text[_0x268735(0x140)]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em[_0x268735(0x138)]()+_0x268735(0x14b),_0x268735(0x145),em[_0x268735(0x138)]()+_0x268735(0x12b),usedPrefix+'donasi',fkontak,fakefb);pilih==_0x268735(0x11e)&&await conn[_0x268735(0x149)](m[_0x268735(0x15a)],imgr+_0x268735(0x14e),'┅────┅─❏\x20*MENU\x202*\x20❏─┅────┅\x0a',text[_0x268735(0x140)]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em[_0x268735(0x138)]()+_0x268735(0x14b),_0x268735(0x145),em[_0x268735(0x138)]()+_0x268735(0x12b),usedPrefix+_0x268735(0x127),fkontak,fakefb);pilih==_0x268735(0x153)&&await conn[_0x268735(0x14f)](m[_0x268735(0x15a)],imgr+_0x268735(0x12d),_0x268735(0x14c),text[_0x268735(0x140)]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em[_0x268735(0x138)]()+_0x268735(0x14b),_0x268735(0x145),em['getRandom']()+_0x268735(0x12b),usedPrefix+'donasi',fkontak,fakefb);pilih==_0x268735(0x131)&&await conn[_0x268735(0x136)](m[_0x268735(0x15a)],imgr+_0x268735(0x13c),_0x268735(0x122),text[_0x268735(0x140)]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em['getRandom']()+'\x20Owner',_0x268735(0x145),em[_0x268735(0x138)]()+_0x268735(0x12b),usedPrefix+_0x268735(0x127),fkontak,fakefb);if(pilih==_0x268735(0x15b)){let buttons=[{'buttonText':{'displayText':em['getRandom']()+_0x268735(0x141)},'buttonId':_0x268735(0x11f)},{'buttonText':{'displayText':em[_0x268735(0x138)]()+'Owner'},'buttonId':_0x268735(0x145)},{'buttonText':{'displayText':em[_0x268735(0x138)]()+_0x268735(0x141)},'buttonId':'.menulist'}],msg=await conn[_0x268735(0x11d)](m[_0x268735(0x15a)],{'image':{'url':''+(imgr+_0x268735(0x126))},'caption':_0x268735(0x15e)+text['trim'](),'footer':botdate+'\x0a\x0a'+wm,'buttons':buttons},{'quoted':fkontak});conn[_0x268735(0x11d)](m[_0x268735(0x15a)],{'quoted':msg});}pilih==_0x268735(0x144)&&conn[_0x268735(0x157)](m[_0x268735(0x15a)],await ggenProfile(conn,m),_0x268735(0x130),text[_0x268735(0x140)]()+(nameown+'\x0a')+botdate,em[_0x268735(0x138)]()+_0x268735(0x14d),_0x268735(0x137),em['getRandom']()+'Owmer',_0x268735(0x15c),em[_0x268735(0x138)]()+_0x268735(0x158),_0x268735(0x128),fkontak);pilih==_0x268735(0x13a)&&conn[_0x268735(0x159)](m[_0x268735(0x15a)],'https://telegra.ph/file/ad296dd3ec7cd13a9893d.mp4',_0x268735(0x124),text[_0x268735(0x140)]()+(_0x268735(0x13d)+nameown+'\x0a')+botdate,em[_0x268735(0x138)]()+_0x268735(0x14d),_0x268735(0x142),em['getRandom']()+_0x268735(0x139),_0x268735(0x145),em[_0x268735(0x138)]()+'Credit',_0x268735(0x156),m,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':'https://www.instagram.com/kabulsaputra21/','mediaType':0x2,'description':sgc,'title':'Follow\x20Lah\x20Cᴜʏ!!!','body':wm,'thumbnail':await(await fetch(zykomd))[_0x268735(0x15d)](),'sourceUrl':sig}}});pilih==_0x268735(0x148)&&conn['sendButtonImg'](m['chat'],imgr+_0x268735(0x121),_0x268735(0x154),text['trim']()+botdate+'\x0a\x0a'+wm,em[_0x268735(0x138)]()+_0x268735(0x12b),_0x268735(0x11f),fkontak,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':_0x268735(0x13b),'mediaType':0x2,'description':sgc,'title':_0x268735(0x13e),'body':wm,'thumbnail':await(await fetch(zykomd))[_0x268735(0x15d)](),'sourceUrl':sig}}});pilih=='ke9'&&conn[_0x268735(0x159)](m['chat'],'https://telegra.ph/file/1fb94fb0db4d9db149ad7.mp4','┅────┅─❏\x20*MENU\x209*\x20❏─┅────┅',text[_0x268735(0x140)]()+('\x0aᴍᴀᴅᴇ\x20ᴡɪᴛʜ\x20\x20ʙʏ\x20'+nameown+'\x0a')+botdate,em['getRandom']()+'Menu',_0x268735(0x142),em[_0x268735(0x138)]()+_0x268735(0x139),_0x268735(0x145),em[_0x268735(0x138)]()+_0x268735(0x129),'.sewa',m,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':'https://www.instagram.com/kabulsaputra21/','mediaType':0x2,'description':sgc,'title':'Follow\x20Lah\x20Cᴜʏ!!!','body':wm,'thumbnail':await(await fetch(zykomd))['buffer'](),'sourceUrl':sig}}});function _0x31f2(_0x39d185,_0x26ba2e){const _0x3bd156=_0x3bd1();return _0x31f2=function(_0x31f263,_0x514edb){_0x31f263=_0x31f263-0x11d;let _0x538d43=_0x3bd156[_0x31f263];return _0x538d43;},_0x31f2(_0x39d185,_0x26ba2e);}pilih==_0x268735(0x12e)&&conn[_0x268735(0x159)](m[_0x268735(0x15a)],_0x268735(0x12a),_0x268735(0x15f),text[_0x268735(0x140)]()+(_0x268735(0x14a)+nameown+'\x0a')+botdate,em[_0x268735(0x138)]()+_0x268735(0x14d),_0x268735(0x142),em[_0x268735(0x138)]()+_0x268735(0x139),'.owner',em[_0x268735(0x138)]()+'Speed',_0x268735(0x128),m,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':_0x268735(0x13b),'mediaType':0x2,'description':sgc,'title':'Follow\x20Lah\x20Cᴜʏ!!!','body':wm,'thumbnail':await(await fetch(zykomd))[_0x268735(0x15d)](),'sourceUrl':sig}}});pilih=='ke11'&&conn[_0x268735(0x159)](m['chat'],_0x268735(0x147),_0x268735(0x152),text[_0x268735(0x140)]()+'\x0a'+botdate,em[_0x268735(0x138)]()+_0x268735(0x14d),_0x268735(0x142),em['getRandom']()+'Owner',_0x268735(0x145),em['getRandom']()+'Credit','.credit',m,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':_0x268735(0x135),'mediaType':0x2,'description':sgc,'title':'Follow\x20Lah\x20Cᴜʏ!!!','body':bottime,'thumbnail':await(await fetch(zykomd))['buffer'](),'sourceUrl':sig}}});
   /* conn.send3ButtonVid(m.chat, 'https://telegra.ph/file/ad296dd3ec7cd13a9893d.mp4', '┅────┅─❏ *𝐃𝐀𝐒𝐇𝐁𝐎𝐀𝐑𝐃* ❏─┅────┅', text.trim() + `\nᴍᴀᴅᴇ ᴡɪᴛʜ ❤ ʙʏ ${nameown}\n` + botdate, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2, 
    description: sgc,
    title: "Follow Lah Cᴜʏ!!!",
    body: wm,
    thumbnail: await(await fetch(zykomd)).buffer(),
    sourceUrl: sig,
     }}
  }) */
   //------------------- PAYMENT MENU
    /*await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 10000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: text.trim(),
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})*/
    
    //------------------- 2BUTTON LOCATION
    /*conn.sendButton(m.chat, `${ucapan()}﹗`, text.trim(), `${timeimg()}`, [
      ['ᴍᴇɴᴜ', `${_p}menu`],
      ['sᴘᴇᴇᴅᴛᴇsᴛ', `${_p}speedtest`]
    ], m, {asLocation: true})*/
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['listmenu', 'menulist']

handler.command = /^(listmenu|menulist|tesm|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}
async function ggenProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(mdbot.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}