const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name."],
        trim: true,
        maxlength: [40, "You have reached the max length."],
        minlength: [3, "Your name is too short."]
    },
    username: {
        type: String,
        required: [true, "User username is required."],
        trim: true,
        unique: [true, "User username must be unique."],
        maxlength: [40, "You have reached the max length."],
        minlength: [3, "Your username is too short."],
        lowercase: [true, "Your user username must be in lowercase."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        trim: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email."
        },
        lowercase: [true, "Please enter a valid email."],
        unique: [true, "The email is already in use."]
    },
    password: {
        type: String,
        required: [true, "password is required here."],
        trim: true,
        max: [40, "You have reached the max length."],
        min: [8, "Your password must be 8 characters."],
        lowercase: [true, "Please enter a valid email."]
    },
    termsCondition: {
        type: Boolean,
        required: [true, "Please check the terms and condition feilds"]
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;