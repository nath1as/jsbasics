var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {       // true
  console.log('Hello');
}

if (!myString) {        // false
  console.log('World');
}

if (!!myArray) {        // true
  console.log('World');
}

if (myOtherString || myArray) { // true
  console.log('!');
}
