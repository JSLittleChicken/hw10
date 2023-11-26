// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let i1 = 10;
let result;
while (i1 <= 20) {
    if (i1 === 10) {
        result = i1
    } else {
        result = `${result}, ${i1}`
    }
    i1++;
}
console.log(result);
console.log("=========")

// Вивести квадрати чисел від 10 до 20.
for (let i2 = 10; i2 <= 20; i2++) {
console.log(i2*i2) } 
console.log("=========")


// Вивести таблицю множення на 7.
for (let i3 = 1; i3 <= 10; i3++) {
console.log(`7 * ${i3} = ${7*i3}`)
}
console.log("=========")

// Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i4 = 1; i4 <= 15; i4++) {
    sum += i4;
}
console.log(sum)
console.log("=========")

// Знайти добуток усіх цілих чисел від 15 до 35
let mult = 1;
for (let i5 = 15; i5 <= 35; i5++) {
    mult = mult * i5
}
console.log(BigInt(mult))
console.log("=========")

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum6 = 0;
for (let i6 = 1; i6 <= 500; i6++) {
    sum6 += i6
}
let average = sum6/500;
console.log(average)
console.log("=========")

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum7 = 0;
for (let i7 = 30; i7 <= 80; i7=i7+2) { 
      sum7 += i7
    }
console.log(sum7)  
console.log("=========") 

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i8 = 100; i8 <= 200; i8++) {
    if (!(i8%3)) {
        console.log(i8)
    }
} 
console.log("=========") 

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
let n9 = +prompt("Введіть число");
let evenNums = [];
let sum9 = 0;
for (let i9 =1; i9 <= n9; i9++) {
    if (!(n9%i9)) {
        console.log(i9)

        if (!(i9 % 2)){
            evenNums.push(i9);
            sum9 += i9;
        }
        
      }
      
  }
  console.log(`Even divisors number is ${evenNums.length}`);
  console.log(`Sum of the even divisors ${sum9}`);
  console.log("=========");

  // Надрукувати повну таблицю множення від 1 до 10.
  for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++ ) {
        console.log(`${a} * ${b} = ${a * b}`)
    }
  }
    

