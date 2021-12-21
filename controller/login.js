const userScheema = require('../db/userSchema')
const bcrypt = require('bcrypt')

module.exports = loginController = {
    loginGetreq: (req, res) => {
        res.render('pages/login')
    },
    loginPostreq: async (req, res) => {
        let { username, password } = req.body

        await userScheema.findOne({ username: username }, async (err, user) => {
            //---------- error checking
            if (err) {
                return res.status(500).render('pages/login', { databaseError: "Sorry, Something went terroble wrong" })
            }
            //------------ finding user 
            if (!user) {
                //----- no user found
                return res.status(500).render('pages/login', { databaseErrornouser: "Sorry, no user found for this user name" })
            } else {
                //-------- user found
                console.log(req.body.password, user.password)
                await bcrypt.compare(req.body.password, user.password).then(function (err, result) {
                    if (err) {
                        return res.status(500).render('pages/login', { databaseError: "Sorry, Something went terroble wrong" })
                    }
                    if (result == true) {

                        console.log("password matched");
                    } else {
                        console.log("password not matched");
                    }
                });
            }
        }).clone().catch((err) => { console.log(err) });

    }
}
