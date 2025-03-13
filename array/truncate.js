const truncateNumber = (num, afterDot) => {
    const factor = Math.pow(10, afterDot);
    return Math.trunc(num * factor) / factor;
  }
  
  console.log(truncateNumber(0.1000000000000000001, 5)); 