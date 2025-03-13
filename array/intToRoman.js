/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let value = ""
    const MaxScale = Math.pow(10, Math.ceil(Math.log10(num + 1)))
    let scale = 10
    while (scale <= MaxScale) {
        const temp = num % scale
        value = tranformer(temp, scale) + value
        num = num - temp
        scale *= 10
    }

    return value
};

const roman = [
    { Symbol: "I", Value: 1 },
    { Symbol: "V", Value: 5 },
    { Symbol: "X", Value: 10 },
    { Symbol: "L", Value: 50 },
    { Symbol: "C", Value: 100 },
    { Symbol: "D", Value: 500 },
    { Symbol: "M", Value: 1000 }
]

const tranformer = (num, scale) => {
    const truelyScale = scale / 10
    let unit = num / truelyScale
    if (unit === 9) {
        return (roman.find(item => item.Value === truelyScale).Symbol + roman.find(item => item.Value === scale).Symbol)
    } else if (unit <= 8 && unit >= 5) {
        const theFive = roman.find(item => item.Value === 5 * truelyScale).Symbol
        if (unit === 5) {
            return theFive
        } else {
            const remainNum = unit - 5
            let remainSymbol = ""
            const theOne = roman.find(item => item.Value === truelyScale).Symbol
            for (let i = 0; i < remainNum; i++) {
                remainSymbol += theOne
            }

            return theFive + remainSymbol
        }
    } else if (unit === 4) {
        const theFive = roman.find(item => item.Value === 5 * truelyScale).Symbol
        return (roman.find(item => item.Value === truelyScale).Symbol + theFive)
    } else if (unit < 4) {
        const theOne = roman.find(item => item.Value === truelyScale).Symbol
        let remainSymbol = ""
        for (let i = 0; i < unit; i++) {
            remainSymbol += theOne
        }
        return remainSymbol
    }
}

console.log(intToRoman(1854));

