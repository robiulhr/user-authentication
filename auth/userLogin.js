const Joi = require('joi');
module.exports = userloginValidator = Joi.object().keys({
    username: Joi.string()
        .required()
        .min(8)
        .max(20)
        .lowercase()
        .pattern(new RegExp(/^[a-z0-9_\.]+$/)).messages({
            "string.pattern.base": "username can't accept {{#value}}.",
        }),
    password: Joi.string()
        .required()
        .min(8)
        .max(30).pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')).messages({
            "string.pattern.base": "please provide a strong password.",
        })
})

