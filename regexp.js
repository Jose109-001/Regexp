//const regExp = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
const anotherRegExp = new RegExp('a');

// console.log(typeof regExp);
// console.log(anotherRegExp); // sort
// console.log(regExp.constructor, RegExp, regExp.constructor === RegExp);

console.log('1. Hello Joseph! We live at 19273109237 km of distance! I`m 29 years old'.match(/[0-9]+/g));
console.log('heeeelooooooooooo!'.match(/e{4}/))
console.log('xyzxcac10cyzyx122e1a222233333e55'.match(/[a-f0-9]{6,10}/g))
console.log('1aam1ccc'.match(/1(aaa|ccc)/));
console.log('-ab3333333333c'.match(/^-ab[0-9]+c$/))
console.log('#333999'.match(/^#\d{6}$/))
console.log('ABC DEF'.match(/[a-z]+/gi));
console.log('Joseph A. Gaspar?'.match(/[a-z]+ ?[a-z]?\.? [a-z]+\?/gi));

const regExp = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
console.log(regExp.test('#c33')); // true
console.log(regExp.test('#306fc9')); // true
console.log(regExp.test('this is my color: #c97319')); // false
console.log(regExp.test('#c97319 is my color but it does not pass the test!')); // false
console.log(regExp.test('#C33'), 'this one was working before! What happened??'); // false
console.log(regExp.test('#30ab45'), 'grass is always greener on the other side'); // true
console.log('This color does not contain a #:', regExp.test('ffffff')); // true