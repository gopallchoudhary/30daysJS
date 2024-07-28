///ACTIVITY 1
console.log("ACTIVITY 1:-");
//TASK-1
console.log("Print number from 1 to 10 using for loop");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("Table of 5 using for loop");
for (let i = 1; i <= 12; i++) {
  console.log(`${i}x5 = ${i * 5}`);
}

///ACTIVITY 2
console.log("ACTIVITY 2:-");
//TASK-3
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(`Sum of all numbers from 1 to 10 is ${sum}`);

//TASK-4
console.log("Print number from 10 to 1 using while loop");
let i4 = 10;
while (i4 >= 1) {
  console.log(i4);
  i4--;
}

///ACTIVITY 3
console.log("ACTIVITY 3:-");
//TASK-5
console.log("print 1 to 5 using do while loop");
let i5 = 1;
do {
  console.log(i5);
  i5++;
} while (i5 <= 5);

//TASK-6
console.log("factorial of a number using do while loop");
let num6 = 5;
let i6 = num6;
let factorial = 1;
do {
  factorial *= i6;
  i6--;
} while (i6 > 1);
console.log(factorial);

///ACTIVITY 4 
console.log('ACTIVITY 4:-');
//TASK-7
for(let i7 = 1; i7<=5; i7++) {
    let rowPatten = ''
    for(let j7 = 1; j7<=i7; j7++) {
        rowPatten += j7 + ' '
    }
    console.log(rowPatten);

}