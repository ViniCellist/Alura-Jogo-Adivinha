const lowerValue = 1
const higherValue = 1000
const secretNumber = generateRandomNumber()

function generateRandomNumber() {
    return parseInt(Math.random() * higherValue + 1)
}

console.log('Número secreto: ',secretNumber)

const elementLowerValue = document.getElementById('less-value')
elementLowerValue.innerHTML = lowerValue

const elementHigherValue = document.getElementById('greater-value')
elementHigherValue.innerHTML = higherValue