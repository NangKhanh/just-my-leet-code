/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let sObj = {
        arr: s.split(""),
        prevChar: ""
    }
    let pObj = {
        arr: p.split(""),
        prevChar: ""
    }
    if (p == ".*") {
        return true
    }
    while (pObj.arr.length !== 0 && sObj.arr.length !== 0) {
        if (acceptedChar(pObj.arr[0]).acceptAnySingle || sObj.arr[0] === pObj.arr[0]) {
            sObj.arr.shift()
        }
        else if (acceptedChar(pObj.arr[0]).acceptMany) {
            while (sObj.arr[0] === pObj.prevChar) {
                sObj.arr.shift()
            }
        }
        else {
            return false
        }
        pObj.prevChar = pObj.arr[0]
        pObj.arr.shift()

    }
    if (pObj.arr.length !== 0 || sObj.arr.length !== 0) {
        return false
    }

    return true
};

const acceptedChar = (char) => {
    let status = {
        acceptAnySingle: false,
        acceptMany: false
    }

    if (char === ".") {
        status.acceptAnySingle = true
    } else if (char === "*") {
        status.acceptMany = true
    }
    return status
}

console.log(isMatch("aa", "a*"));
