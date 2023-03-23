let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!args[0]) return m.reply('Link?')
	
let tiktok = `
${htki}  📺 Tiktok Downloader 🔎  ${htka}

⚡ Silakan pilih Tiktok Downloader di tombol di bawah...

*Teks yang anda kirim:* ${args[0]}

Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi


Nomor Developer : wa.me/6283133329293
Nomor Owner Bot : wa.me/${nomorown}`

// yang hapus nomor developer mudah-mudahan banyak crash
const sections = [
   {
	title: `${htjava} Tiktok Downloader✦-------`,
	rows: [
        {title: " • TIKTOK ", rowId: `.tiktok ${args[0]}`},
     	{title: " • TIKTOK 2", rowId: `.tiktok2 ${args[0]}`},
        ]
    },
]

const listMessage = {
  text: tiktok,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tiktok), contextInfo:{ forwardingScore: 99999, isForwarded: true }})

}

handler.help = ['ttlist', 'tiktoklist',].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttlist|tiktoklist)$/i

export default handler
