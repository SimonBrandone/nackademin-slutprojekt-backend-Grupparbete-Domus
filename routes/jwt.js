// Configuration to be able to use .env files
require('dotenv').config()

// Import model
const User = require('../modules/usersModel')

const express = require('express')
const app = express()
const router = express.Router()

// Token
const jwt = require('jsonwebtoken')

// cookies
const cookieParser = require('cookie-parser')
app.use(cookieParser())

router.post('/api/auth/', async (req, res) => {
    const user = await User.findOne({
                name: req.body.name, password: req.body.password
            })
    if (user) {
        const payload = {
            role: user.role
        }
        const token = jwt.sign(payload, `${process.env.SECRET}`)
        console.log(token)
        res.cookie('auth-token', token)
        res.send(user)

    } else {
        res.send('Fel')
    }
})

// try {
//     let payload = jwt.verify(process.env.TOKEN, process.env.PW);
//     if(payload.role == 'admin'){
//         console.log(payload)
//     }
//   } catch(err) {
//     console.log(err)
//   }

module.exports = router

