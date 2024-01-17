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


function testSwitch() {
    switch(3) {
        case 1:
            // блок кода 1;
            return "case 1";
        case 2:
            // блок кода 2;
            return "case 2";
        default:
            // блок кода если не подошло ни одно условие;
            return "default";
    }
}
// answer = testSwitch()
// console.log(answer)


function testSwitchByNum(a) {
    switch(a) {
        case 0:
            return "Ноль";
        case 1:
            return "Один";
        case 2:
            return "Два";
        case 3:
            return "Три";
        case 4:
            return "Четыре";
        case 5:
            return "Пять";
        case 6:
            return "Шесть";
        case 7:
            return "Семь";
        case 8:
            return "Восемь";
        case 9:
            return "Девять";
        default:
            return "Вы не ввели ни одну цифру из диапазона [0, 9]";
    }
}
answer = testSwitchByNum(10)
console.log(answer)
