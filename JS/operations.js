/*var inputs = document.getElementsByClassName('frmInput')
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('info')
            inputs.forEach(function (inputsValuesData) {
                console.log("El dato es :" + inputsValuesData)
            })
        }
        else {
            this.nextElementSibling.classList.remove('info')
        }
    })
}*/

/*function viewsArrayInput() {
    var arrayInput = new Array()
    var inputsValues = document.getElementsByClassName('frmInput')
    namesValues = [].map.call(inputsValues, function (datainput) {
        arrayInput.push(datainput.value)
    })
    arrayInput.forEach(function (inputsValuesData) {
        console.log("El dato es :" + inputsValuesData)
    })
}*/

const name = document.getElementById('name')
const surname = document.getElementById('surname')
const email = document.getElementById('email')
const age = document.getElementById('age')
const form = document.getElementById('frm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Debe ingresar un nombre')
    }
    if (surname.value === '' || surname.value == null) {
        messages.push('Debe ingresar un apellido')
    }
    if (email.value === '' || email.value == null) {
        messages.push('Debe ingresar un email')
    }
    if (age.value === '' || age.value == null) {
        messages.push('Debe ingresar una edad')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})