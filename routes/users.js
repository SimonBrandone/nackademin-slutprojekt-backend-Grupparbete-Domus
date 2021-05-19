// Import model
const User = require('../modules/usersModel')

const express = require('express')
const router = express.Router()

// A Route to be able to register a user and save it to the database.
router.post('/api/register/', async (req, res) => {
    let newUser = await new User ({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        // The default value is "customer" and if u want to register an admin u hardcode that into postman for example.
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

    if (newUser.password) {
        newUser.save();
        res.send(`Ny användare tillagd i databasen: ${newUser.name}`)
    } else {
        res.send('Något gick fel när du försökte spara en ny användare')
    }
})

module.exports = router