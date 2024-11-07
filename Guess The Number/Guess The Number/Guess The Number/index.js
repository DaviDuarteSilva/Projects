
let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 15

function newGame() {
    window.location.reload()
}


function init() {
computerNumber = Math.floor(Math.random() * 1000 + 1)
   console.log(computerNumber)
}

function compareNumbers() {
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers

    if (attempts < maxguesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Esse valor é muito alto'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
           }
           else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Essse valor é muito pequeno'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
           }
           else {
            document.getElementById('textOutput').innerHTML = 'Parabéns, voçê acertou!!!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
           }
    }
    else {
        document.getElementById('textOutput').innerHTML = 'Voçê Perdeu! O numero correto seria: ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }

   
}