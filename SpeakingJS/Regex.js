'use strict';

//indexof with REGEX:
console.log('eeeabceee'.indexOf('abc')); // 3

console.log(/abc/.test('eeeabceee'));  // true

//String.prototype.search(regexp)
console.log('0yy3xxx-y-'.search(/x+/));  // 4

//String.prototype.match(regexp)
console.log('-abb--aaab-'.match(/(a+)b/)); // ["ab", "a"]    a+, което е преди b

console.log('-abb--aaab-'.match(/(a+)b/g)); // ["ab", "aaab"]  whole group with b

//String.prototype.replace(search, replacement)
console.log('iixxxixx'.replace('i', 'o'));  // oixxxixx -> only the first occurrence is replaced

//the same
console.log('iixxxixx'.replace(/i/, 'o'));  // oixxxixx

//   /g
console.log('iixxxixx'.replace(/i/g, 'o'));  // 'ooxxxoxx' -> all are replaced

//A dollar sign ($) in a replacement string allows you to refer to the complete match
//or a captured group:

console.log('iixxxixx'.replace(/i+/g, 'A')); // AxxxAxx

console.log('iixxxixx'.replace(/i+/g, '$&A')); // iiAxxxiAxx

// complete match

//?
console.log('iixxxixx'.replace(/i+/g, '($&)')); // complete match '(ii)xxx(i)xx'
//?
console.log('iixxxixx'.replace(/(i+)/g, '($1)')); // group 1 '(ii)xxx(i)xx'