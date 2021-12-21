const Joi = require('joi');

module.exports = userValidator = Joi.object().keys({
    name: Joi.string()
        .trim()
        .min(3)
        .max(30)
        .required(),
    username: Joi.string()
        .required()
        .min(8)
        .max(20)
        .lowercase()
        .pattern(new RegExp(/^[a-z0-9_\.]+$/)).messages({
            "string.pattern.base": "username can't accept {{#value}}.",
        }),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'dev'] } })
        .required()
        .lowercase().messages({
            "string.email": "name can't accept '{{#value}}'. email only can accepted with these extension ['com', 'net', 'org', 'dev']",
        }),
    password: Joi.string()
        .required()
        .min(8)
        .max(30).pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')).messages({
            "string.pattern.base": "please provide a strong password.",
        }),
    conformPassword: Joi.string()
        .required()
        .min(8)
        .max(30)
        .valid(Joi.ref('password')).messages({
            "any.only": "Conform password must be same to password",
        }),
    termsCondition: Joi.boolean().required().messages({
        "any.required": "You must cheked the terms and condition"
    })
})

