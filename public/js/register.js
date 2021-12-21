import { usernameValidation, emailValidation, passwordStrengthadd, passwordMatch, showhidepassword, conformpasswordMatch } from './common.js'
document.addEventListener("DOMContentLoaded", () => {
    let nameInput = document.querySelector('#name')
    let usernameInput = document.querySelector('#username')
    let usernamealert = document.querySelector('#usernamealert')
    let emailInput = document.querySelector("#email")
    let emailalert = document.querySelector('#emailalert')
    let PasswordInput = document.querySelector('#Password')
    let passwordalert = document.querySelector("#passwordalert")
    let passwordSuggestion = document.querySelector("#passwordsuggestion")
    let conformPasswordInput = document.querySelector("#confromPassword")
    let conformpasswordalert = document.querySelector("#conformpasswordalert")
    let togglebutton = document.querySelectorAll('#passwordshowhide')
    let termsConditionInput = document.querySelector('#termsCondition')
    let formSubmit = document.querySelector('#register')

    //--------------- emil validation
    usernameInput.addEventListener('keyup', () => {
        usernameValidation(usernameInput, usernameInput.value, usernamealert)
    })
    //--------------- emil validation
    emailInput.addEventListener('keyup', () => {
        emailValidation(emailInput, emailInput.value, emailalert)
    })
    //--------------password Strength add
    PasswordInput.addEventListener('keyup', () => {
        conformpasswordalert.style.display = "none"
        PasswordInput.style.border = "none"
        passwordStrengthadd(PasswordInput, PasswordInput.value, passwordalert, passwordSuggestion)
        conformpasswordMatch(conformPasswordInput, conformPasswordInput.value, PasswordInput, PasswordInput.value, conformpasswordalert)
    })
    //-------------- password match
    conformPasswordInput.addEventListener('keyup', () => {
        passwordMatch(PasswordInput, PasswordInput.value, conformPasswordInput, conformPasswordInput.value, conformpasswordalert)
    })

    // ------------- password show and hide
    togglebutton[0].addEventListener('click', () => {
        showhidepassword(PasswordInput, togglebutton[0])
    })

    // ------------- conform password show and hide
    togglebutton[1].addEventListener('click', () => {
        showhidepassword(conformPasswordInput, togglebutton[1])
    })
    //---------------form submit
    formSubmit.addEventListener(('click'), (e) => {
        // e.preventDefault()

    })
})
