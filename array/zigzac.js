function convert(s, numRows) {
    let array = Array.from({ length: numRows }, () => []);

    let row = numRows - 1
    let y = 0, x = 0
    let direction = true // true : down
    if (numRows === 1) return s
    for (let char = 0; char < s.length; char++) {
        array[y][x] = s[char]
        if (y === row) {
            direction = false
        }
        if (y === 0) {
            direction = true
        }
        if (direction) {
            y++
        } else {
            y--
            x++
        }
    }
    return array.flat().join('');

};

console.log(convert("PAYPALISHIRING", 4));
