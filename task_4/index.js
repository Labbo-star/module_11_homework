function interval(firstNum, secondNum) {
    let intervalId = setInterval(function() {
        if (firstNum <= secondNum) {
            console.log(firstNum);
            firstNum++;
        } else clearInterval(intervalId)
    }, 1000)
}

interval(5,25)
