// 1
const arr1 = [1, 2, 3];
arr1[1] = 10;
console.log(arr1);
console.log("---------------------------");

// 2
const arr2 = ["asdasd", "asdasda", "asdasddaas", "asddawdasq"];
arr2.push("fghagdga");
console.log(arr2);
console.log("---------------------------");

// 3
const myNumbers = [1, 2, 3, 4, 5];
let sum = 0;
for (number of myNumbers) {
  sum += number;
}
console.log(sum);
console.log("---------------------------");

// 4
const arr3 = [1, 2, 3, 4, 5];
for (number of arr3) {
  console.log(number);
}
console.log("---------------------------");

// 5
const strings = [
  "wqertqwqtWDA",
  "DSAs",
  "dsawqqewda",
  "helo",
  "dwsADQ@@Weqwdwa",
];

for (characters of strings) {
  if (characters.length < 5) {
    continue;
  }
  console.log(characters);
}
console.log("---------------------------");

// 6
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = arr4[0];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > max) {
    max = arr4[i];
  }
}
console.log(max);
console.log("---------------------------");

// 7
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = [];
for (const number of numbers) {
  if (number % 2 === 0) {
    evens.push(number);
  }
}
console.log(evens);
console.log("---------------------------");
