const num1 = 15;
const num2 = 8;

console.log("ACTIVITY 1 :-");
//TASK-1(sum)
const sum = num1 + num2;
console.log("Sum is ", sum);

//TASK-2(subtract)
const sub = num1 - num2;
console.log("Subtraction is ", sub);

//TASK-3(multiply)
const mul = num1 * num2;
console.log("Multiplication is ", mul);

//TASK-4(divide)
const div = num1 / num2;
console.log("Division is ", div);

//TASK-5(modulus)
const rem = num1 % num2;
console.log("Remainder is ", rem);

///ACTIVITY-2
console.log("ACTIVITY 2 :-");
//TASK-6(+=)
let num3 = 11;
num3 += 4;
console.log(num3);

//TASK-7(-=)
let num4 = 20;
num4 -= 10;
console.log(num4);

///ACTIVITY-3
console.log("ACTIVITY 3 :-");
//num1 = 15
//num2 = 8
//num3 = 11
//num4 = 20
let num5 = 8;
let num6 = "15";

//TASK-8,9,10
console.log(num1 < num3, "", num4 > num2);
console.log(num2 >= num5, "", num3 <= num1);
console.log(num1 == num6);
console.log(num1 === num6); //! "===" => strictly equal to (i.e. checks the data type too)

///ACTIVITY-4
console.log("ACTIVITY 4 :- ");
const obj = {
  name: "Gopal Choudhary",
  age: 23,
  email: "gopalchoudhary521@gmail.com",
  experienceYears: 4,
  sex: "M",
};


//TASK-11(&&)
if (obj.age >= 20 && obj.experienceYears > 2) console.log("Eligible");
else console.log("Not Eligible");

//TASK-12(|| or)
if(obj.name == "Rakesh Choudhary" || obj.experienceYears > 5) console.log("Eligible");
else console.log("Not Eligible");

let passed = true
console.log(!passed);

///ACTIVITY- 5 
console.log("Activity 5 :-");
let numNature = -6
numNature >= 0 ? console.log("Positive number") : console.log("Negative number");
//? Condition ? true condition : false condition 