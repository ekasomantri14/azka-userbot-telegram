var fetch = require("node-fetch")
var fs = require("fs")
var carbon = {
    name: 'carbon',
    status: true,
    clue: ['Fungsi: upload file', 'Format: /carbon code'],
    run: async function (update) {
        var airgram = update[0];
        var message = update[1];
        var tg = update[2]
        var chat_id = message.chatId;
        var user_id = message.sender.userId;
        var msg_id = message.id;
        var msgr_id = message.replyToMessageId ? message.replyToMessageId : false;
        var text = message.content.text.text ? message.content.text.text : false;
        var outgoing = message.isOutgoing ? true : false;

        if (new RegExp("^[\/\.\!]carbon ", "i").exec(text)) {
            if (!outgoing) {
                return tg.sendMessage(chat_id, "Hanya pemilik yang bisa melakukanya");
            } else {
                return tg.sendPhoto(chat_id, `https://carbonnowsh.herokuapp.com/?code=${encodeURI(text.replace(/([\/\.\!]carbon )/ig,""))}&theme=darcula&backgroundColor=rgba(144, 19, 254, 100)`)   
            }
        }
    }
}
module.exports = {
    carbon
}

