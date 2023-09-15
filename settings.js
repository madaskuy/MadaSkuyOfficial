require("./module")

/* JIKA MAU DI UBAH NAMA + NOMOR NYA AJA */
/* NOMOR OWNER CEK DI DATABASE + MASUK KE OWNER.JSON */
global.inpute = "6287819949107"
global.owned = "6287819949107"
global.nomorOwner = "6287819949107"
global.owner = "6287819949107@s.whatsapp.net"
global.namabot = "TEST BOTZ"
global.namaOwn = "MJBOTZ"

/* UBAH NOMOR PAYMENT KALIAN */
global.ovo = "+62"
global.dana = "+62"
global.gopay = "+62"

/* DI BAWAH INI JANGAN DI UBAH JIKA
DI UBAH NANTI SC PADA EROR SEMUA */
global.codeInvite = "Eoq09LXEgTtEyJh5idMIiE"
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./mjbotz/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.autoJoin = false
global.antilink = false
global.versisc = '3.0.0'
global.packname = ""
global.author = ""

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})