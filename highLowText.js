const truncateNumber = (num, afterDot) => {
    const factor = Math.pow(10, afterDot);
    return Math.trunc(num * factor) / factor;
  }
  
  console.log(truncateNumber("CO2", "E85")); 