const elementGuess = document.getElementById('chute')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    let guess = e.results[0][0].transcript
    displayGuess(guess)
    verify(guess)
    console.log(guess)
}

function displayGuess(guess) {
    elementGuess.innerHTML = `
        <div>Você disse</div>
        <span class="box">${guess}</span>
        `
}

recognition.addEventListener('end', () => {
    recognition.start()
})
