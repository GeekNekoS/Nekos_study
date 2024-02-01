function testLengthSumStr(a, b) {
    let newString = String(a) + String(b);
    return newString.length;
}
// answer = testLengthSumStr(13, 2)
// console.log(answer)


const cat = "Cat";
// console.log(cat.length);
// console.log(cat.charAt(0));
// console.log(cat.charCodeAt(0));
// console.log(cat[0]);


catReversed = cat.charAt(2) + cat.charAt(1) + cat.charAt(0);
// console.log(catReversed);


function testLetterInStr(str, n) {
    return str[n-1];
}
// answer = testLetterInStr("Ithardlycousinmealways", 19)
// console.log(answer)


const a = "первая строка";
const b = " вторая строка";
const c = " третья строка";
const d = " четвертая строка";
// result = a.concat(b , c, d);
// console.log(result)


const myString = "cat,dog,bird";
// const myArray = myString.split(",");
// console.log(myArray)


const myString2 = "cat:dog:bird";
// const myArray = myString2.split(":", 2);
// console.log(myArray)


function testStr(a, b) {
    return a.toUpperCase() + b.toLowerCase();
}
answer = testStr('Hello', 'World!')
console.log(answer)


const myString3 = "fjkghskdhflkv"
// answer = myString3.substring(indexA[, indexB])  // <==
