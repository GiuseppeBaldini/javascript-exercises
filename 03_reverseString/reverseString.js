const reverseString = function(str) {
    let charsArray = str.split(''); // 'hello' => ['h', 'e', 'l', 'l', 'o']
    let reversedChars = charsArray.reverse(); // => ['o', 'l', 'l', 'e', 'h']
    let reversedString = reversedChars.join(''); // => 'olleh'

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
