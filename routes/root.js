const express = require('express');
const router = express.Router();
const path= require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'views', 'index.html'))
})
router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'views', 'new-page.html'))
})
router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, 'new-page.html'); // if 301 not mention 302 will be consideres which is temperory
})

module.exports = router