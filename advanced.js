var numbers = []

function assignRandomNumber() {
    var number = Math.ceil(Math.random() * 20)

    if (number in numbers) {
        return assignRandomNumber()
    } else {
        numbers.push(number)
        return number
    }
}