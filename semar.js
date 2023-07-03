const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins,updateDatabase } = require('./lib/functions.js')
const { exec } = require('child_process')
const fs = require('fs')
const request = require("request")
module.exports = async (semar, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = semar.user.id.split(':')[0]
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await semar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
0
// kirimprib hasillrndy
const kirimprib =async(text,id) => { await semar.sendMessage(id,{text: text},{quoted:msg}) }
//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
switch (command) {

    // 5 JUNI 2023
    // FITUR HOST BY AKMAL HOST
        case 'sc':
        case 'script':
        id = msg.key.remoteJid
        if(validGrup(id,grups)){
            script =`
*NIH BANGSAT!!!!*
_*Sc WEBP ©DIMHOSTING*_
https://www.mediafire.com/file/mslilr2b11puxyt/BOTNews-FREEDim.zip/file
*_MINIMAL SUBS LAH_*
https://www.youtube.com/@sidlainungan`
            reply(script)
              }else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
        break
case 'menu' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menu =`
    *Hallo Kak,Saya Adalah Bot Create Webp Yang Di Buat Oleh AKMAL*
    Owner : ANNO
    No Owner : 6285397904282
    Donasi : Chat Admin

┏━━⊱ It's Me ANNO
┃➜ .menuweb
┃➜ .bahanYT
┃➜ .bahantwit
┃➜ .Script
┗━━━[ *Call Me ANNO* ]━━━❏

*_Bot Web ANNO Sedang Dalam Pengembangan_*
*_Jika Terjadi Bug Atau Error Mohon Di Wajarkan_*

======= *ANNO Vs Everybody* =======`
reply(menu)

        }else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
        break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS MENU    
        case 'update':
        if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        
            if(args == ""){
            psn = `ketik .bo om
            `
            reply(psn)
            }else{                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `*SUKSES OM*`
reply(info)
}                
}            
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS UPDATE           
            case 'infobot' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            id = msg.key.remoteJid
        info = `*PERASAAN GUA GA ENAK DAH, KAYA NYA ADA YANG MAU MALING ROOT GUA NIH 🗿*`
            reply(info);
            break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS DATA ROOT
        case 'listgrup':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        let text = "LIST GRUP VIP :\n\n"
            for (let i = 0; i < grups.length; i++) {
                text += "> "+ grups[i] + "\n";
            }
            reply(text)
            break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS LIST GRUP    
            case 'bo':
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
                id = msg.key.remoteJid
                pengirim = msg.key.participant
                nama = msg.pushName
reply('*Terimakasih Udah BO Aku,Aku Tunggu Di Kamar 27 Ya Sayang🤤*')          

    await semar.sendMessage(pengirim,{text: `.update grup | ${id} \n\n`},{quoted:msg})

            break 
    case 'test' : 
        image = 'https://cdn.discordapp.com/attachments/952184318824964167/1116304105036582952/20230605_222054.png'
        semar.sendMessage(from,{text: `test`},{image: image})
        
       break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS
//CASE HOST

case 'list' :
case 'web' :
case 'webp' :
case 'listweb' :
case 'menuweb' :
   menuweb = `
┏━━⊱ It's Me AKMAL
┃➜ .mod1 : MediaFire V1
┃➜ .mod2 : MediaFire V2
┃➜ .mod3 : MediaFire V3
┃➜ .mod4 : Codashop FF
┃➜ .mod5 : FF Spin SG
┃➜ .mod6 : FF Claim
┃➜ .mod7 : Grub Viral 18+
┃➜ .mod8 : Grub Tante 18+
┃➜ .mod9 : Grub Giveaway HP
┃➜ .mod10 : Grub FS Kienzy
┃➜ .mod11 : Grub Chip Domino
┃➜ .mod12 : Grub Frontal
┃➜ .mod13 : Grub Dylan Pross
┃➜ .mod14 : Grub Vcs Cha 18+
┃➜ .mod15 : Grub Vcs SAFIRA
┃➜ .mod16 : Mobile Legends
┃➜ .mod17 : Nonton Video 18+
┃➜ .mod18 : PUBG Mobile M12
┃➜ .mod19 : Simontok 18+
┃➜ .mod20 : Stumble Guys
┃➜ .mod21 : Youtube Private
┃➜ .mod22 : Dana Kaget
┗━━━[ *Call Me AKMAL* ]━━━❏

====================
Tutor? Ketik .mod1/ .AKMAL1
Donasi Bro Biar Bot Lebih Semangat

Script Bot Webp :
Not Free,Minat? Buy Ke AKMAL
━━━━━━━━━━━━━━━
Link Group Jasteb GG
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
━━━━━━━━━━━━━━━
Link Group Create Webp
https://chat.whatsapp.com/Cn3NqLVYCvL98i8x0W4vTP
️━━━━━━━━━━━━━━━`
reply(menuweb)
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS MENU WEB
case 'mod1' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "AbgviRAl" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_Sabar Om,Ga Lama Kok🤤_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/media/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/media/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*SKIP AJG!!! KONTOL LU KECIL*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOSTING
// BATAS WEB
case 'mod2' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "advanserverFF" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_*Sabar Om,Ga Lama Kok🤤*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/media/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/media/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz 
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*Skip Anjg! Kontol Lu Kecil*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod3' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "bokep10grUp" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_*Sabar Om,Ga Lama Kok🤤*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/media/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/mediav3/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Skip Ajg! Kontol Lu Kecil_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod4' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "claim-freefIRe" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Sabar Om,Ga Lama Kok🤤")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/coda/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/coda/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*Skip Ajg! Kontol Lu Kecil*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod5' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "codashopUNLI" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Sabar Om,Ga Lama Kok🤤")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/ff/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/ff/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod6' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "dana-kagET" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Sabar Om,Ga Lama Kok🤤")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/ffv2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/ffv2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/@sidlainungan
➢ Owner :
Wa.me/6285397904282
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod7' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_*Sabar Om,Ga Lama Kok🤤*_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/grub/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grub/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break

// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod8' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Sabar Om,Ga Lama Kok🤤")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/grub/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break

// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod9' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/grub/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv3/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod10' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/grub/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv4/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod11' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/grub/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv5/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod12' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/grub/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv6/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("*Silahkan Cek Pesan Ku Om*")
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod13' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/grub/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv7/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Ownerku")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod14' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/grub/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv8/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod15' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/grub/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/grubv9/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB
case 'mod16' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/mlbb/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/mlbb/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB BY AKMAL HOST
case 'mod17' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/nonton/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/nonton/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB BY AKMAL HOST
case 'mod18' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/pubg/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/pubg/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB BY AKMAL HOST
case 'mod19' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/simontok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB BY AKMAL HOST
case 'mod20' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/stumble/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/stumble/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB BY AKMAL HOST
case 'mod21' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/yt18/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/yt18/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB BY AKMAL HOST
case 'mod22' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*_Sabar Om,Ga Lama Kok🤤_*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.qris-ku.biz.id/dana/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://api.qris-ku.biz.id/dana/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke *${pushname}*_`, idmu)
                    }


                                        hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
➢ Website :
${pendek}
➢ Setting :
${domain}/vhsfhqpdhdsih6/host.php
➢ Grub Jasteb GG :
https://chat.whatsapp.com/LmJzlspI7gPJmL1yZN5mNz
*➢ Ress Ga Masuk? Simak Video Ini !*
https://youtu.be/nQRaulTXTxA
Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner")
        }
break
        


// 5 JUNI 2023
// FITUR HOST BY AKMAL HOST
// BATAS WEB BY AKMAL HOST
case 'grup':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (args.length < 1) return reply("silahkan pilih grup open/close")
if (args[0] === 'open'){ await semar.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'close'){ await semar.groupSettingUpdate(from, 'announcement')} else { reply('yang bener lah pantek')}
break

case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [remove], "remove")
break

case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

case 'leave':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await semar.groupLeave(from)
break

case 'delete': case 'd': case 'del':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
semar.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break
case 'bahanyt':
        id = msg.key.remoteJid
        if(validGrup(id,grups)){
                bahanyt =`
*AWKKAWOK GABISA NEBAR DEK? NIH BAHANNYA MEMEKKKK!!!!*

_BAHAN NEBAR YT_
_*© X AKMAL*_

- JUDUL

VIRAL LINK MEDIAFIRE📌📌- Link MediaFire Viral Terbaru 2023 hari ini🤩KUMPULAN VIDEO VIRAL‼️#trending

- HT

ENJOY FOR VIDEO
JANGAN LUPA SUBSCRIBE BIAR BISA UPLOAD LAGI GUYSS 😖

Link Pin Komentar‼️

#mediafire
#linkmediafirebaru
#linkmediafireviral 
#chikaviral 
#chika20jt
#chikatiktok 
#viraltiktok 
#viral 
nl#viralvideo 
#viralshorts
Link 📌: (bayar pake like) #virallinkmediafire #linkmediafire #ng3n Tag:link tiktol viral, link tiktol viral mediafire, tiktol, viral link terbaru, tiktol viral link deskripsi, link tiktol viral 41 detik, link tiktol download mediafıre, tiktol viral link telegram, link viral artis 2022, link viral tik tok animasi, link viral dokter, video tiktok viral prot prot, link dj tiktok viral 2021, link domino, dj tiktok viral, link dj titkok terbaru viral, viral tiktok 2022 link mediafire, viral tiktok, link mediafire ff, tiktok viral ff link, viral link tiktok mediafire, adik dan kaka viral tiktok, video viral link mediafire, link media fire ids vanny, link link media fire virall jepang, link media fire viral colm3k

- TEKS BUAT SHARE" DI VIDEO/LADANG ORANG BIAR VIEW DERES

[ tempelin link yt ladang mu ] viral adek kaka🤤
23:23 Hermosa elección 10:10 hopi:"sweeter"11:12 sun:"hooter" 00:18 jooine:"cooler" 18:00yongy:*Butter" 23:23 son Uno's de Los memories conciertos`
                reply(bahanyt)


        }else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
    break
case 'bahantwit':
id = msg.key.remoteJid
        if(validGrup(id,grups)){
 bahantwit =`
*AWOKAWOK GABISA NEBAR DEK? NIH BAHAN NYA KONTOL!!!*

 _BAHAN NEBAR TWITTER_
_*©AKMAL*_
 
 HT TWITTER 

Yg lagi viral Biadab Artis Anissa Aziza
Terekam cctv  di mall selingkuh 

Scandal viral  terbaru VCS
malam sabtu bokep indo terbaru
#JanganLupaNgeDOT
#SANGE_AAAAAAAAAAH
#SANGE_AAAAAAAAAA`
reply(bahantwit)

        }else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }

break
case 'restart':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 restart index`, (error, stdout, stderr) => {
    reply("BERHASIL RESTART ULANG")
    reply(stdout)
})
break
case 'shutdown':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break
default:
}} catch (e) {
console.log(e)
}
}