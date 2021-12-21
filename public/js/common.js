
// ----------------- user name validation
export let usernameValidation = (usernameInput, username, usernamealert) => {
    const usernameValidator = /^[a-z0-9_\.]+$/.exec(username);
    if (username != '') {
        if (!!usernameValidator) {
            usernamealert.style.display = "none"
            usernamealert.textContent = ""
            usernameInput.classList.remove("is-invalid")

        } else {
            usernamealert.style.display = "block"
            usernamealert.textContent = "Username only can contain Lowercase Letters (a-z), Numbers(0 - 9),Dots(.),Underscores(_)"
            usernameInput.classList.add("is-invalid")

        }
    } else {
        usernamealert.style.display = "none"
        usernamealert.textContent = ""
        usernameInput.classList.remove("is-invalid")

    }

}
//----------------- eamil validation
export let emailValidation = (emailInput, email, emailalert) => {
    let emailvalidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email != "") {
        if (emailvalidator.test(email)) {
            emailalert.style.display = "none"
            emailalert.textContent = ""
            emailInput.classList.remove("is-invalid")
        } else {
            emailalert.style.display = "block"
            emailalert.textContent = "plese provite a valid email"
            emailInput.classList.add("is-invalid")

        }
    } else {
        emailalert.style.display = "none"
        emailalert.textContent = ""
        emailInput.classList.add("is-invalid")
    }

}
//----------------- password strength checker
export let passwordStrengthadd = (passwordInput, paswordText, passwordalert, passwordSuggestion) => {
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    if (strongPassword.test(paswordText)) {
        passwordInput.classList.add("is-valid")
        passwordalert.style.display = 'block'
        passwordalert.style.color = "white";
        passwordalert.textContent = 'Strong';
        passwordalert.style.backgroundColor = 'green';
        passwordSuggestion.style.display = "none"
        passwordSuggestion.textContent = ""

    } else if (mediumPassword.test(paswordText)) {
        passwordInput.style.border = '2px solid blue'
        passwordalert.style.display = 'block'
        passwordalert.style.color = 'white';
        passwordalert.textContent = 'Medium';
        passwordalert.style.backgroundColor = 'blue';
        passwordSuggestion.style.display = "block"
        passwordSuggestion.textContent = "You password must be 8 charecter and contain A-Z,a-z,0-9 and special character"

    } else if (paswordText == "") {
        passwordInput.style.border = 'none';
        passwordalert.style.display = 'none'
        passwordalert.style.color = "none";
        passwordalert.textContent = '';
        passwordSuggestion.style.display = "none"
        passwordSuggestion.textContent = ""
    }
    else {
        passwordInput.classList.add("is-invalid")
        passwordalert.style.display = 'block'
        passwordalert.style.color = 'white';
        passwordalert.textContent = 'Weak';
        passwordalert.style.backgroundColor = 'red';
        passwordSuggestion.style.display = "block"
        passwordSuggestion.textContent = "You password must be 8 charecter and contain A-Z,a-z,0-9 and special character"
    }
}

// ----------------- password match test

export let passwordMatch = (PasswordInput, password, conformPasswordInput, conformPassword, alert) => {
    if (conformPassword != '') {
        if (password != '') {
            if (password != conformPassword) {
                alert.style.display = 'block'
                alert.textContent = "Password should be match."
                alert.style.backgroundColor = "red"
                alert.style.color = "white"
                PasswordInput.classList.add("is-invalid")
                conformPasswordInput.classList.add("is-invalid")


            } else {
                alert.style.display = 'block'
                alert.textContent = "password matched"
                alert.style.backgroundColor = "green"
                alert.style.color = "white"
                PasswordInput.classList.add("is-invalid")
                conformPasswordInput.classList.add("is-valid")

            }
        } else {
            alert.style.display = 'block'
            alert.textContent = "please fill the password feild"
            alert.style.backgroundColor = "red"
            alert.style.color = 'white'
            PasswordInput.classList.add("is-invalid")
        }
    } else {
        alert.style.display = 'none'
        alert.textContent = ""
        conformPasswordInput.classList.remove("is-invalid")

    }
}

// ----------------- conform password match test

export let conformpasswordMatch = (conformpasswordInput, conformpassword, PasswordInput, Password, alert) => {
    if (Password != '') {
        if (conformpassword != '') {
            if (conformpassword != Password) {
                alert.style.display = 'block'
                alert.textContent = "Password should be match."
                alert.style.backgroundColor = "red"
                alert.style.color = "white"
                conformpasswordInput.classList.add("is-invalid")
                PasswordInput.classList.add("is-invalid")
            } else {
                alert.style.display = 'block'
                alert.textContent = "password matched"
                alert.style.backgroundColor = "green"
                alert.style.color = "white"
                conformpasswordInput.classList.add("is-valid")
                PasswordInput.classList.add("is-valid")
            }
        } else {
            alert.style.display = 'none'
            alert.textContent = ""
        }
    } else {
        alert.style.display = 'none'
        alert.textContent = ""
    }
}


// ----------------------show and hide password
export let showhidepassword = (passwordinput, togglebutton) => {
    if (passwordinput.type != "text") {
        passwordinput.type = 'text'
        togglebutton.classList.replace("fa-eye-slash", "fa-eye")
    } else {
        passwordinput.type = 'password'
        togglebutton.classList.replace("fa-eye", "fa-eye-slash")
    }
}
