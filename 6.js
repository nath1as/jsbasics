var phrase = prompt("Enter a phrase: ");
console.log(phrase.length);

var without_spaces = phrase.replace(/[^a-z]/gi, "");
console.log(without_spaces.length);
