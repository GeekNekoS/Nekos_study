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


function testStr(str, n) {
    return str[n-1];
}
// answer = testStr("Ithardlycousinmealways", 19)
// console.log(answer)
