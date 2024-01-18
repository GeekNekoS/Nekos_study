function testIteration() {
  for (let i = 0; i <= 10; i = i + 2) {
  console.log("i = " + i);
  }
}
// testIteration()


function testFactorial(a) {
    let x = 1;
    for (let i = 1; i <= a; i += 1) {
      x *= i
    }
    return x;
}
// answer = testFactorial(9)
// console.log(answer)


function testWhileFunc() {
  let x = 1;
  while (x <= 10) {
    console.log("x = " + x);
    x = x + 1;
  }
}
// testWhileFunc()


function testDoWhileFunc() {
    let x = 5;
    do {
        console.log(x);
        x = x - 1;
    } while (x >= 1);
}
// testDoWhileFunc()


function testWhile(a) {
    let sum_of_even = 0;
    let x= 0;
    while (x <= a) {
        console.log("x = " + x);
        if (x%2 === 0) {
            sum_of_even += x;
        }
        x = x + 1;
    }
    return sum_of_even;
}
// answer = testWhile(10)
// console.log(answer)

function testBreak() {
    for (let i = 1; i < 10; i = i + 1) {
      if (i === 6) {
        break;
      }
      console.log('i= '+i);
    }
}
// testBreak()


function testContinue() {
    for (let i = 1; i < 10; i = i + 1) {
      if (i === 5) {
        continue;
      }
      console.log('i= ' + i);
    }
}
// testContinue()


function testCycle(k, n) {
    let x = "";
    for (let i = 1; i <= k; i++) {
        x += `${n} `
    }
    return x.trim(); // .trim() работает почти как .strip() в Python, только здесь убирает пробелы с права и с лева
}
// answer = testCycle(3, 8)
// console.log(answer)
