function firstNum(firstArg) {
    return function secondNum(secondArg) {
        return firstArg + secondArg;
    }
}

console.log(firstNum(589)(75))