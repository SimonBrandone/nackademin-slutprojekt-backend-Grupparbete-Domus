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
        // Kolla om lösenordet stämmer. 
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (err) res.json(err)

            if (result !== false) {
                console.log(result)
                const payload = {
                    name: user.name,
                    exp: Math.floor(Date.now() / 1000) + (60 * 5),
                    role: user.role
                }

                // I så fall, signa och skicka token.
                const token = jwt.sign(payload, process.env.SECRET)
                res.cookie('auth-token', token)
                res.send("Välkommen " + user.username)

            } else {
                res.send("Dina credentials stämde inte")
            }
        })

    }
})


module.exports = router


