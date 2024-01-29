function verify(guess) {
    switch (guess){
        case "zero":
            guess = 0
            break;
        case "um":
            guess = 1
            break;
        case "dois":
            guess = 2
            break;
        case "três":
            guess = 3
            break;
        case "quatro":
            guess = 4
            break;
        case "cinco":
            guess = 5
            break;
        case "seis":
            guess = 6
            break;
        case "sete":
            guess = 7
            break;
        case "oito":
            guess = 8
            break;
        case "nove":
            guess = 9
            break;
        case "sem":
            guess = 100
            break;
        case "cem":
            guess = 100
            break;
    };
    const numberRandom = +guess;

    if (guessInvalid(numberRandom)) {
        elementGuess.innerHTML += '<div>Números...Me diga números! &#x1F921</div>'
        return;
    };

    if (maxNumber(numberRandom)) {
        elementGuess.innerHTML += `<div>Oxi...É entre ${lowerValue} e ${higherValue}! &#x1F923 &#x1F923 &#x1F923</div>`;
        return;
    };

    if (numberRandom === secretNumber){
        document.body.innerHTML = `
        <h2> Você acertou! &#x1F973</h2>
        <h3> O número secreto era: </h3>
        <h2 class="result">${secretNumber}</h2>
        <button id="play-again" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numberRandom > secretNumber){
        elementGuess.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>'
    } else {
        elementGuess.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>'
    };

};

function guessInvalid(numberRandom) {
    return Number.isNaN(numberRandom);
};

function maxNumber(numberRandom){
    return numberRandom > higherValue || numberRandom < lowerValue;
};

document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again');
    window.location.reload();
});
