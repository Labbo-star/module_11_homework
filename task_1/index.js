
function funcParity() {
    let massive = [1, 2, 3, true, 'list', false, 0]
    let evenCounts=oddCounts=zeroCounts=other=0
    for (let i = 0; i < massive.length; i++) {
        if (typeof massive[i] === 'number') {
            if (massive[i] % 2 === 0 && massive[i] !== 0){
                evenCounts++
            }
            else if (massive[i] === 0) {
                zeroCounts++
            }
            else {
                oddCounts++
            }
        } else {
            other++
        }
    }
    
    console.log('Количеств четных элементов:', evenCounts)
    console.log('Количеств нечетных элементов:', oddCounts)
    console.log('Количеств нулевых элементов:', zeroCounts)
    console.log('Количеств других элементов:', other)
}

funcParity()