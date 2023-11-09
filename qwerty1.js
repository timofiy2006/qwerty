const numbers = [1, 2, 5, 9, 4, 13, 4, 10];

console.log("Елементи від 3 до 10:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 3 && numbers[i] < 10) {
    console.log(numbers[i]);
  }
}

console.log("\nПеревірка на наявність елемента 4:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 4) {
    console.log("Наявний!");
    break;
  }
}

const mass = [42, 2, 33, 11, 12, 10, 0];
const average = mass.reduce((acc, val) => acc + val, 0) / mass.length;

console.log(`\nСереднє арифметичне: ${average}`);

const animals = ["parrot", "bull", "bear", "monkey"];
const totalChars = animals.reduce((acc, str) => acc + str.length, 0);

console.log(`\nСумарна кількість символів у стрічках: ${totalChars}`);

const mixedArray = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];
const stringsOnly = mixedArray.filter((el) => typeof el === "string");

console.log("\nМасив лише зі стрічками:");
console.log(stringsOnly);
