const numPower = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
        result = result * x;
    }
    console.log(result);
}

numPower(2, 5)
