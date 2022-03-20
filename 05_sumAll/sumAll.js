const sumAll = function(num1, num2) {
    let sum = 0;
    
    // Return ERROR if either num is negative 
    if (num1 < 0 || num2 < 0) return 'ERROR';

    // Return ERROR if either is not a num
    if (typeof num1 != 'number' || typeof num2 != 'number') return 'ERROR'; 

    // Swap variable so that num1 < num2
    if (num1 > num2) { 
        let temp = num1;
        num1 = num2;
        num2 = temp;
        }
    
    // Add num1 to sum at increments of 1 until we reach num2
    while (num1 <= num2) {
        sum += num1;
        num1 ++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
