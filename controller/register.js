const bcrypt = require('bcrypt');
const userScheema = require('../db/userSchema')
const saltRounds = 11
module.exports = registerController = {
    registerGetreq: (req, res) => {
        res.render('pages/register')
    },
    registerPostreq: async (req, res) => {
        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
            if (err) return res.status(500).render('pages/register', { databasetarrableError: "somthing went terrable wrong" });
            let newUserdata = { name: req.body.name, username: req.body.username, email: req.body.email, password: hash, termsCondition: req.body.termsCondition }
            try {
                let newUser = await new userScheema(newUserdata);
                await newUser.save();
                await res.status(200).redirect('/login')
            } catch (error) {
                res.status(500).render('pages/register', { databaseError: error, value: req.body })
            }
        });

    }

}