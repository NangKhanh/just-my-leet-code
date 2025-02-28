/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let arr = s.trim().split("")

    let check = checkFirst(arr)
    if (!check.accept) {
        return 0
    }
    let checkArr = check.arr
    let value = ""

    while (checkArr.length > 0) {
        if (check.ignore && checkArr[0] === check.first) {
            checkArr.shift()
        }
        else if (isNumber(checkArr[0])) {
            check.ignore = false
            value += checkArr[0]
            checkArr.shift()
        } else {
            break
        }
    }

    let result = check.specialChar.moreThanZero ? parseInt(value) : -parseInt(value);

    if (isNaN(result)) {
        return 0;
    } else if (result > 2147483647) {
        result = 2147483647
    } else if (result < -2147483648) {
        result = -2147483648
    }

    return result;

};

const checkFirst = (arr) => {
    let check = {
        first: arr[0],
        ignore: false,
        accept: true,
        specialChar: {
            have: false,
            moreThanZero: true
        },
        arr: arr
    }
    if (isNumber(arr[0])) {
        return check
    }
    switch (arr[0]) {
        case "0":
            check.ignore = true
            break;
        case " ":
            check.ignore = true
            break;
        case "+":
            check.specialChar.have = true
            check.specialChar.moreThanZero = true
            check.arr.shift()
            break;
        case "-":
            check.specialChar.have = true
            check.specialChar.moreThanZero = false
            check.arr.shift()
            break;
        default:
            check.accept = false
            break;
    }

    return check
}

const isNumber = (char) => {
    const num = parseInt(char)
    return !isNaN(num)
}


console.log(myAtoi("-91283472332"));
