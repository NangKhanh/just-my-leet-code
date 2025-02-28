const parseFloatNum = (num) => {

}


const truncateNumber = (num, afterDot) => {
    const factor = Math.pow(10, afterDot);
    return Math.trunc(num * factor) / factor;
  }
  
  console.log(parseFloat("1884.000000"));