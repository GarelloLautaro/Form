const form = document.getElementById("frm")
const username = document.getElementById("name")
const usernameError = document.getElementById("userNameError")
const surname = document.getElementById("surname")
const surnameError = document.getElementById("surnameError")
const email = document.getElementById("email")
const emailError = document.getElementById("emailError")
const age = document.getElementById("age")
const ageError = document.getElementById("ageError")
const man = document.getElementById("male")
const woman = document.getElementById("female")
const other = document.getElementById("other")                  /* Creation of constants */
const sexError = document.getElementById("sexError")
const music = document.getElementById("music")
const sports = document.getElementById("sports")
const games = document.getElementById("games")
const technology = document.getElementById("technology")
const interestError = document.getElementById("interestError")
const country = document.getElementById('country').value
const base = document.getElementById('base')
const argentina = document.getElementById('argentina')
const brasil = document.getElementById('brasil')
const chile = document.getElementById('chile')
const uruguay = document.getElementById('uruguay')
const countryError = document.getElementById('countryError')
const comments = document.getElementById('comment')
const commentsError = document.getElementById('commentsError')


form.addEventListener("submit", e => { /* I tell the form that when it "hears" the submit it creates an event */
    e.preventDefault() /* Here I prevent everything that comes by default */
    let warnings_user = ""
    let warnings_surname = ""
    let warnings_email = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ /* Here i declare the regular expressions of the email */
    let warnings_age = ""
    let warnings_sex = ""
    let warnings_interest = ""
    let warnings_country = ""
    let warnings_comments = ""
    let entrar = false  /* I create a Boolean variable so I can differentiate which fields do not pass the validation rules and drop only the corresponding warnings   */


    userNameError.innerHTML = ""
    if (username.value.length < 3 || username.value.length > 30) {/* Name validation */
        warnings_user += 'El nombre no es valido'
        entrar = true
    } else if (username.value % 1 == 0) {
        warnings_user += 'El NOMBRE debe estar compuesto por letras'
        entrar = true
    } else {
        warnings_user += 'El NOMBRE debe estar compuesto por letras'
        entrar = true
    }

    surnameError.innerHTML = ""
    if (surname.value.length < 3 || surname.value.length > 30) {/* Surname validation */
        warnings_surname += 'El apellido no es valido'
        entrar = true
    } else if (surname.value % 1 == 0) {
        warnings_surname += 'El APELLIDO debe estar compuesto por letras'
        entrar = true
    } else {
        warnings_surname += 'El APELLIDO debe estar compuesto por letras'
        entrar = true
    }

    emailError.innerHTML = ""
    if (!regexEmail.test(email.value)) {/* Email validation */
        warnings_email += 'Ingrese un email valido'
        entrar = true
    }

    ageError.innerHTML = ""
    if (isNaN(age.value) || age.value < 1 || age.value > 99) {/* Age validation */
        warnings_age += 'La edad debe estar entre 0 y 100'
        entrar = true
    } else if (age.value % 1 == 0) {  /* Divide the number entered with 1 and analyze the rest, if it is equal to 0 it is an integer and if the result is different */
        entrar = false                /*  from 0 the number will be decimal. */
    } else {
        warnings_age += 'Debe ser un numero entero'
        entrar = true
    }

    if (man.checked === false && woman.checked === false && other.checked === false) {/* Sex validation */
        warnings_sex += 'Seleccione un sexo'
        entrar = true
    }

    if (music.checked === false && sports.checked === false && games.checked === false && technology.checked === false) {/* Area of interest validation */
        warnings_interest += 'Seleccione un tema de interes'
        entrar = true
    }

    if (base.selected === true) {/* Country validation */
        warnings_country += 'Seleccione un país'
    }

    commentsError.innerHTML = ""
    if (comments.value.length < 20) {/* Comments validation */
        warnings_comments += 'Comentarios: Ingrese un mensaje más largo'
        entrar = true
    }

    if (entrar) { /* All fields are checked for compliance with validation standards. If not, run the alert */
        usernameError.innerHTML = warnings_user
        console.log('Ingrese un nombre valido')
        surnameError.innerHTML = warnings_surname
        console.log('Ingrese un apellido valido')
        emailError.innerHTML = warnings_email
        console.log('Ingrese un email valido')
        ageError.innerHTML = warnings_age
        console.log('Ingrese una edad valida')
        sexError.innerHTML = warnings_sex
        console.log('Ingrese un sexo')
        interestError.innerHTML = warnings_interest
        console.log('Ingrese un tema de interes')
        countryError.innerHTML = warnings_country
        console.log('Ingrese un país')
        commentsError.innerHTML = warnings_comments
        console.log('Ingrese un comentario más largo')
    } else { /* If everyone complies with the rules, the alert changes to "Enviado" and all data is written to the console */
        usernameError.innerHTML = "Enviado"
        console.log('Nombre: ' + username.value)
        surnameError.innerHTML = "Enviado"
        console.log('Apellido: ' + surname.value)
        emailError.innerHTML = "Enviado"
        console.log('Email: ' + email.value)
        ageError.innerHTML = "Enviado"
        console.log('Edad: ' + age.value)
        sexError.innerHTML = "Enviado"
        if (man.checked === true) {
            console.log('Sexo: Masculino')
        } else if (woman.checked === true) {
            console.log('Sexo: Femenino')
        } else if (other.checked === true) {
            console.log('Sexo: Otro')
        }
        interestError.innerHTML = "Enviado"
        if (music.checked === true) {
            console.log("Tema de interes: Musica")
        }
        if (sports.checked === true) {
            console.log('Tema de interes: Deportes')
        }
        if (games.checked === true) {
            console.log('Tema de intere: Juegos')
        }
        if (technology.checked === true) {
            console.log('Tema de interes: Tecnologia')
        }
        countryError.innerHTML = "Enviado"
        if (argentina.selected === true) {
            console.log("Pais: Argentina")
        }
        if (chile.selected === true) {
            console.log("Pais: Chile")
        }
        if (brasil.selected === true) {
            console.log("Pais: Brasil")
        }
        if (uruguay.selected === true) {
            console.log("Pais: Uruguay")
        }
        commentsError.innerHTML = "Comentarios: Enviado"
        console.log('Comentarios: ' + comments.value)
    }
})
