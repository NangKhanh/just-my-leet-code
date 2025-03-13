const longestCommonPrefix = (strs) => {
    let result = ""
    const firtStr = strs[0]
    for (let i = 0; i < firtStr.length; i++) {
        const temp = strs.filter(value => value[i] === firtStr[i])
        if (temp.length < strs.length)
            return result

        result +=firtStr[i]
    }

    return result
}

strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs)); // 4
