import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
	let urls = pickRandom(['https://telegra.ph/file/035e524939ab0294ba91f.jpg', 'https://telegra.ph/file/96b2275d3b14d071290bc.jpg', 'https://telegra.ph/file/2c6b7660bc6126404a9bb.jpg', 'https://telegra.ph/file/c635bf577bb9d59a3e00b.jpg', 'https://telegra.ph/file/be8dd52f6363f9e9f5a60.jpg', 'https://telegra.ph/file/02e53361b9dc946f63c8d.jpg', 'https://telegra.ph/file/298ed2f1bba17aeb64ca8.jpg', 'https://telegra.ph/file/be2a18221974147f66ea0.jpg',"https://telegra.ph/file/f46c9ebb51efc49ea14d5.mp4",
"https://telegra.ph/file/1fb94fb0db4d9db149ad7.mp4",
"https://telegra.ph/file/6dac1453cbc23bff8754a.mp4",
"https://telegra.ph/file/7e744334e7bfd7e685c65.mp4",
"https://telegra.ph/file/9ca7a7e28257b73d2c0ce.mp4",
"https://telegra.ph/file/aaebb2ab4c79cc69906f7.mp4"])
let cap = `
╭──────────────
│    「 Kartu Intro 」
│ Nama     :
│ Gender   :
│ Umur      : 
│ Hobby    :
│ Kelas      :
│ Asal         :
│ Agama    :
│ Status     :
╰──────────────
${wm}`
let t = '*I N T R O*'
let wibu = `https://api.zahwazein.xyz/randomanime/anime?apikey=85345ee3d9de` 
let thumb = await(await fetch(zykomd)).buffer()
conn.sendHydrated2(m.chat, t, cap, thumb, 'https://instagram.com/kabulsaputra21', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', 'https://youtube.com/zykobotz', 'ʏ ᴏ ᴜ ᴛ ᴜ ʙ ᴇ',[['Menu', `.menuv2`],
  ['Donasi', `.donasi`],['Sewa', `.sewa`]], m)   
}
handler.command = /^(intro)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}