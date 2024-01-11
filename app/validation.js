function verify(guess) {
    const numberRandom = +guess

    if (guessInvalid(numberRandom)) {
        elementGuess.innerHTML += '<div>Números...Me diga um número! &#x1F921</div>'
        return
    }
    if (maxNumber(numberRandom)) {
        elementGuess.innerHTML += `<div>Oxi...É entre ${lowerValue} e ${higherValue}! &#x1F923 &#x1F923 &#x1F923</div>`
        return
    }
    if (numberRandom === secretNumber){
        document.body.innerHTML = `
        <h2> Você acertou! &#x1F973</h2>
        <h3> O número secreto era: </h3>
        <h2 class="result">${secretNumber}</h2>
        `
    } else if (numberRandom > secretNumber){
        elementGuess.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>'
    } else {
        elementGuess.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>'
    }
}

function guessInvalid(numberRandom) {
    return Number.isNaN(numberRandom)
}

function maxNumber(numberRandom){
    return numberRandom > higherValue || numberRandom < lowerValue
}