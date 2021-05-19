// Import model
const User = require('../modules/usersModel')
const bcrypt = require('bcryptjs')
const express = require('express')
const router = express.Router()

// A Route to be able to register a user and save it to the database.
router.post('/api/register/', async (req, res) => {
    // måste jag göra error hantering här eller räcker det att göra det i .save??

    // Hash password ?? 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.pw, salt)

    console.log(req.body)
    let newUser = new User({
        email: req.body.email,
        pw: hashPassword,
        name: req.body.name,
        role: req.body.role,
        adress: {
            street: req.body.street,
            zip: req.body.zip,
            city: req.body.city
        }
        // orderHistory: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Order'
        // }]
    })
    if (newUser.name === String) {
        await newUser.save();
        res.send(`Ny användare tillagd ${newUser}`)
    } else if (newUser = null) {
        console.log("fel")
        res.status(400).send(err)
    }
})


module.exports = router