// Import model
const User = require('../modules/usersModel')

const express = require('express')
const router = express.Router()

// A Route to be able to register a user and save it to the database.
router.post('/api/register/', (req, res) => {
// måste jag göra error hantering här eller räcker det att göra det i .save??

    // console.log(req.body)
    let newUser = new User ({
        email: req.body.email,
        pw: req.body.pw,
        name: req.body.name,
        role: req.body.role,
        adress: {
            street: req.body.street,
            zip: req.body.zip,
            city: req.body.city
        },
        // orderHistory: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Order'
        // }]
    }) 
    newUser.save((err, newUser) => {
        // varför kommer jag inte in i denna error hantering
        if (err) res.send('Något gick fel när du försökte spara en ny användare')
        res.send(`Ny användare tillagd i databasen: ${newUser.name}`)
    })
})

module.exports = router