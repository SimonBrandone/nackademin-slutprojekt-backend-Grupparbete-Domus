const User = require('../modules/usersModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()


router.post('/api/auth', async (req, res) => {

    //Hämta inlogg och kontrollera
    const user = await User.findOne({ name: req.body.name })
    console.log(user)

    //Payload för Usern
    if (user) {
        const payload = {
            name: user.name,
            expire: Math.floor(Date.now() / 1000) + (60 * 5),
            role: user.role
        }
        console.log(payload)

        //Signa och skicka token
        const token = jwt.sign(payload, process.env.SECRET)
        res.cookie('auth-token', token)
        res.json('Välkommen ' + payload.name)
    } else {
        //Om du skriver fel namn i Insomnia
        res.send('Credentials not correct')
    }

})


module.exports = router