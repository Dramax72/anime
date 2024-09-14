const express = require('express');
const bot = require('./bot'); // bot.js faylidan botni import qilish

// Express server yaratish
const app = express();

app.get('/', (req, res) => {
    res.send('Bot is running');  // Web saytda ko'rinadigan matn
});

// Replit uchun portni sozlash
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server ishga tushdi. Port: ${port}`);
});

// Har 5 daqiqada UptimeRobot uchun so'rov
setInterval(() => {
    console.log('Botni faollashtirish uchun ping yuborildi...');
}, 5 * 60 * 1000);  // 5 daqiqalik ping
