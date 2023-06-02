const palindromes = function (str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
