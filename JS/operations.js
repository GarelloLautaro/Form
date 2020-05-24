username = document.getElementById('name')
surname = document.getElementById('surname')
email = document.getElementById('email')
age = document.getElementById('age')
man = document.getElementById("male")
woman = document.getElementById("female")
other = document.getElementById("other")
music = document.getElementById("music")
sports = document.getElementById("sports")
games = document.getElementById("games")
technology = document.getElementById("technology")
country = document.getElementById('country').value
argentina = document.getElementById('argentina')
brasil = document.getElementById('brasil')
chile = document.getElementById('chile')
uruguay = document.getElementById('uruguay')
comments = document.getElementById('comment')

function sendForm() {
    console.log('Nombre:' + username.value)
    console.log('Apellido:' + surname.value)
    console.log('Email:' + email.value)
    console.log('Edad:' + age.value)

    if (man.checked === true) {
        console.log('Sexo: Masculino')
    } else if (woman.checked === true) {
        console.log('Sexo: Femenino')
    } else if (other.checked === true) {
        console.log('Sexo:  Otro')
    }

    if (music.checked === true) {
        console.log("Tema de interes: Musica")
    }
    if (sports.checked === true) {
        console.log('Temas de interes: Deportes')
    }
    if (games.checked === true) {
        console.log('Temas de interes: Juegos')
    }
    if (technology.checked === true) {
        console.log('Temas de interes: Tecnologia')
    }


    console.log('Comentarios: ' + comments.value)

}