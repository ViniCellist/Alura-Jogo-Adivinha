const elementGuess = document.getElementById('chute')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    guess = e.results[0][0].transcript
    displayGuess(guess)
}

function displayGuess(guess) {
    elementGuess.innerHTML = `
        <div>Você disse</div>
        <span class="box">${guess}</span>
        `
}