function repeatedSumOfDigits(num) {
    if (num < 10) {
        return num;
    }

    
    const numStr = num.toString();

   
    let sum = 0;
    for (let digit of numStr) {
        sum += parseInt(digit);
    }

    
    return repeatedSumOfDigits(sum);
}

// Example usage:
const num = 98765;
const result = repeatedSumOfDigits(num);
console.log("Result:", result);
