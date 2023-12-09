function primeNumbers(num) {
    if (num <= 1 || num > 1000) {
        return 'Данные неверны' 
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0)
            return 'Введено не простое число'
        }
    } return 'Введено простое число'
}

console.log(primeNumbers(5))