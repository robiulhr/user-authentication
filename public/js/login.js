import { usernameValidation, passwordStrengthadd, showhidepassword } from './common.js'

document.addEventListener("DOMContentLoaded", () => {
    let usernameInput = document.querySelector('#username')
    let usernameAlert = document.querySelector('#usernamealert')
    let passwordInput = document.querySelector("#Password")
    let passwordalert = document.querySelector("#passwordalert")
    let passwordsuggestion = document.querySelector("#passwordsuggestion")
    let togglebutton = document.querySelector('#passwordshowhide')
    let loginSubmit = document.querySelector('#login')

    //------------user name validation
    usernameInput.addEventListener("keyup", () => {
        usernameValidation(usernameInput, usernameInput.value, usernameAlert)
    })
    //------------password validation
    passwordInput.addEventListener("keyup", () => {

        passwordStrengthadd(passwordInput, passwordInput.value, passwordalert, passwordsuggestion)
    })
    // --------------- show hide password 
    togglebutton.addEventListener('click', (e) => {
        showhidepassword(passwordInput, togglebutton)
    })
})
