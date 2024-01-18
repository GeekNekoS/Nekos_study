function printText() {
    let x = "Hello World!";
    console.log(x);
}
// printText();


// ( (
//     function(a) {
//         console.log(a)
//     })("Само вызываемая функция"
// ) );


function testRecursion(n) {
    let x = "";
    while (n >= 1) {
        x = `${n} ` + x
        testRecursion(n-1)
        n -= 1
    }
    return x;
}
// answer = testRecursion(9)
// console.log(answer)


function my_function(n) {
    if (n>1) return my_function(n-1) + " " + n
    return 1
}
answer = my_function(9)
console.log(answer)
