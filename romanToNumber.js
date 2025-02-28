const romanToNumber = (roman) => {
    const romanToNumberMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;
    let prev = 0
    for (let i = 0; i < roman.length; i++) {
        result += romanToNumberMap[roman[i]]
        if(prev < romanToNumberMap[roman[i]])
            result = result - 2*prev
        prev = romanToNumberMap[roman[i]]
    }
    return result
}

(() => {
    console.log(romanToNumber('IV')); // 4
    console.log(romanToNumber('IX')); // 9
    console.log(romanToNumber('LVIII')); // 58
    console.log(romanToNumber('MCMXCIV')); // 1994
})();