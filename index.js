const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

const randomArray = []
const min = 1;
const max = 1000;
const sum = 999;
for (i = 1; i <= max; i++) {
    randomArray.push(i)
}

const getPairOfSum = (data, sum) => {
    const start = performance.now()
    // Sorting.
    data.sort((a, b) => a - b)

    const higherValues = []
    // Extract Unique items.
    const uniqArray = data.filter((number, index, self) => {
        if (2 * number <= sum && self.indexOf(number) === index) {
            return true
        } else {
            higherValues.push(number)
            return false;
        }
    })

    let pairArray = []
    let combination = 0;
    let matchedPairIndex = -1
    uniqArray.forEach((n, i) => {
        const slicedArray = matchedPairIndex < 0 ? higherValues : higherValues.slice(0, matchedPairIndex)
        slicedArray.forEach(number => {
            combination++;
            if (number + n == sum) {
                pairArray.push([n, number])
                matchedPairIndex = higherValues.indexOf(number)
            }
        })
    })
    const end = performance.now()
    console.log(pairArray, pairArray.length, `${combination} times`, `${end - start}ms`)
}
