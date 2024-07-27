///ACTIVITY 1
//TASK-1
console.log("ACTIVITY 1:-");
const numNature = (num) => {
  if (num > 0) console.log("Number is positive");
  else if (num < 0) console.log("Number is negative");
  else console.log("Number is zero");
};
numNature(10);
numNature(-5);
numNature(0);

//TASK-2
console.log("ACTIVITY 2:-");
const vote = (age) => {
  if (age >= 18) console.log("You can vote");
  else console.log("You cannot vote");
};
vote(28);
vote(13);

///ACTIVITY 2
console.log("ACTIVITY 2:-");
//TASK-3
const largestNo = (a, b, c) => {
  if (a > b) {
    if (a > c) {
      console.log(`${a} is the largest number`);
    } else {
      console.log(`${c} is the largest number`);
    }
  } else if (b > c) {
    console.log(`${b} is the largest number`);
  } else {
    console.log(`${c} is the largest number`);
  }
};

largestNo(34, 77, 45);

///ACTIVITY 3
console.log("ACTIVITY 3:-");
//TASK-4
let num = 6;
switch (num) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Enter number from 1 to 7.");
    break;
}

//TASK-5
function getGrade (score)  {
    let grade;
    switch (true) {
        case (score >= 90 && score<=100):
            grade = 'A'
            break;

            case (score >= 80 && score<90):
            grade = 'B'
            break;

            case (score >= 70 && score<80):
            grade = 'C'
            break;

            case (score >= 60 && score<70):
            grade = 'D'
            break;

            case (score >= 50 && score<60):
            grade = 'E'
            break;

            case (score >= 0 && score<50):
            grade = 'F'
            break;
    
        default:
            grade = 'Invalid Score'
            break;
    }

    return grade;
}

let score = 84
console.log(`The grade for the score ${score} is ${getGrade(score)}`);

///ACTIVITY 4 
console.log("Activity 4:-");
//TASK-6
let num4 = 9;
num4 % 2 == 0 ? console.log("Number is EVEN") : console.log("Number is ODD");

///ACTIVITY 5 
console.log("Activity 5:-");
//TASK-7
function leapYear (year) {
    if((year % 4 == 0  && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) {
        console.log(`${year} is Leap Year`);
    }
    else console.log(`${year} is not a Leap Year`);
}

leapYear(2008)
