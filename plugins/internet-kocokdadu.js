let handler = async(m,{text, conn}) => {
let supa = 'https://api.tiodevhost.my.id/api/randomgambar/dadu'
conn.sendFile(m.chat, supa, null, 'stiker', m)
}
handler.help = ['kocokdadu']
handler.tags = ['game','internet']
handler.command = /^(kocokdadu)$/i

export default handler
