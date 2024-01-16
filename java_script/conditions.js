function hiPerson() {
    const person = "Neko" // "Jack"
    hiSomeone = (person === "Jack") ? "Hi, Jack!" : `Hi, ${person}`;
    return hiSomeone;
}
// greeting = hiPerson()
// console.log(greeting);


function testConditions() {
    let x = 10;
    let y = 50;
    if (x > 11) {
        x += y;
    } else {
        x -= y;
    }
    return x;
}
// x = testConditions()
// console.log(x)


function testIf(a, b) {
    let x;
    if (a < b) {
        x = a + b;
    } else if (a > b) {
        x = a - b;
    } else {
        x = a * b;
    }
    return x;
}
// answer = testIf(2, 4)
// console.log(answer)
