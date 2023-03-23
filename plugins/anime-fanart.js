import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/art?apikey=2da1fcd209f20ae428d8482f'
	conn.sendButton(m.chat, 'Nih FanArtnya ', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(fanart)$/i
handler.tags = ['anime', 'premium', 'limitmenu']
handler.help = ['fanart']
handler.limit = true
handler.premium = true
handler.register = true
export default handler
