/**
 * @param {number} n
 * @return {string[]}
 */

const calculaionValues = [{
    values: '(',
    numberHandled: 0,
    stackSave: 1,
}]

var generateParenthesis = function (n) {
    let initialValues = calculaionValues
    const values = []
    if (n === 1) {
        return ['()']
    } else if (n === 2) {
        return ['(())', '()()']
    }
    while (initialValues.length > 0) {
        const temp = initialValues.flatMap(item => {
            const stackSave = item.stackSave
            const numberHandled = item.numberHandled
            let tempValue = item.values
            if (stackSave + numberHandled === n) {
                for (let i = 0; i < stackSave; i++) {
                    tempValue += ')'
                }
                values.push(tempValue)
                return []
            } else if (stackSave + numberHandled === n - 1 && stackSave === 0) {
                tempValue += '()'
                values.push(tempValue)
                return []
            }
            else if (stackSave === 0) {
                return {
                    values: tempValue + '(',
                    numberHandled: numberHandled,
                    stackSave: stackSave + 1
                }
            } else {
                const case1 = {
                    values: tempValue + '(',
                    numberHandled: numberHandled,
                    stackSave: stackSave + 1
                }
                const case2 = {
                    values: tempValue + ')',
                    numberHandled: numberHandled + 1,
                    stackSave: stackSave - 1
                }
                return [case1, case2]
            }

        })
        if (temp) {
            initialValues = temp
        } else {
            initialValues = []
        }
    }

    return values
};


console.log(generateParenthesis(8));
