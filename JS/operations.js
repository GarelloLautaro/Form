const form = document.getElementById("frm")
const username = document.getElementById("name")
const usernameError = document.getElementById("usernameError")
const surname = document.getElementById("surname")
const surnameError = document.getElementById("surnameError")
const email = document.getElementById("email")
const emailError = document.getElementById("emailError")
const age = document.getElementById("age")
const ageError = document.getElementById("ageError")
const man = document.getElementById("male")
const woman = document.getElementById("female")
const other = document.getElementById("other")
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



form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings_user = ""
    let warnings_surname = ""
    let warnings_email = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let warnings_age = ""
    let warnings_sex = ""
    let warnings_interest = ""
    let warnings_country = ""
    let warnings_comments = ""
    let entrar = false


    usernameError.innerHTML = ""
    if (username.value.length < 3) {
        warnings_user += 'El nombre no es valido'
        entrar = true
    }

    surnameError.innerHTML = ""
    if (surname.value.length < 3) {
        warnings_surname += 'El apellido no es valido'
        entrar = true
    }

    emailError.innerHTML = ""
    if (!regexEmail.test(email.value)) {
        warnings_email += 'El email no es valido'
        entrar = true
    }

    ageError.innerHTML = ""
    if (isNaN(age.value) || age.value < 1 || age.value > 99) {
        warnings_age += 'La edad no es valida'
        entrar = true
    }

    if (man.checked === false && woman.checked === false && other.checked === false) {
        warnings_sex += 'Seleccione un sexo'
        entrar = true
    }

    if (music.checked === false && sports.checked === false && games.checked === false && technology.checked === false) {
        warnings_interest += 'Seleccione un tema de interes'
        entrar = true
    }

    if (base.selected === true) {
        warnings_country += 'Seleccione un país'
    }

    commentsError.innerHTML = ""
    if (comments.value.length < 20) {
        warnings_comments += 'Ingrese un mensaje más largo'
        entrar = true
    }

    if (entrar) {
        usernameError.innerHTML = warnings_user
        surnameError.innerHTML = warnings_surname
        emailError.innerHTML = warnings_email
        ageError.innerHTML = warnings_age
        sexError.innerHTML = warnings_sex
        interestError.innerHTML = warnings_interest
        countryError.innerHTML = warnings_country
        commentsError.innerHTML = warnings_comments
    } else {
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
        commentsError.innerHTML = "Enviado"
        console.log('Comentarios: ' + comments.value)
    }
})