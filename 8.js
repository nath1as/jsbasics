function stringToInteger(string) {
    DIGITS = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
    };
    var numbers = [];
    var value = 0;

    for (var i = 0; i < string.length; i++) {
        numbers.push(DIGITS[string[i]])
    };

   for (var i = 0; i < numbers.length; i++)  {
     value = 10 * value + numbers[i]
   }

   return value;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default:  return stringToInteger(string);
  }
}

console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-570'));
console.log(stringToSignedInteger('+100'));
