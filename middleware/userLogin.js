const userloginValidator = require('../auth/userLogin');

module.exports = loginValidation = async (req, res, next) => {


    const value = userloginValidator.validateAsync(req.body);
    value.then((success) => {
        next()
    }, (error) => {
        console.log(error);
        res.render('pages/login', { errormassage: error.details[0].message, errorpath: error.details[0].path[0], value: req.body })
    })

}