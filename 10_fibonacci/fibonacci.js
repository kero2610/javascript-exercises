const fibonacci = function(n) {
    const sequence = [0, 1];

    if (n < 0){
        return 'OOPS';
    }
    else if (n === 1 || n === 0) {
      return [0];
    } 
    else if (n === 2) {
      return sequence[n];
    }
  
    for (let i = 2; i < n+1; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
  
    return sequence[n];
};

// Do not edit below this line
module.exports = fibonacci;
