/* people = [
    {fname: 'David', lname: 'Rayy', age: 34}, 
    {fname: 'Suzanne', lname: 'Collins', age: 38}, 
    {fname: 'Walter', lname: 'Isaacson', age: 24}, 
    {fname: 'John', lname: 'Doe', age: 51}, 
    {fname: 'Jane', lname: 'Donnson', age: 20}
]; */

// Calculate the sum of the ages - people array
// Find the people that are older than 36
// Find the people that are smaller than 24
// Find the person with the longest name

// numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];
// Multiply every element by 3 
// Sort the numbers (ascending and descending)
// Find the sum of the numbers
// Find max and min in the array
// Find second largest element in the array
// Find the total numbers of even and odd elements in the array

// Count number of digits in a number
// Print the following pattern
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
// Write a program to find power of a number.
// array = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]
// Given an array loop throught it and display numbers which are divisible by 5 and if you find number greater than 150 stop the loop iteration


people = [
    { fname: 'David', lname: 'Rayy', age: 34 },
    { fname: 'Suzanne', lname: 'Collins', age: 38 },
    { fname: 'Walter', lname: 'Isaacson', age: 24 },
    { fname: 'John', lname: 'Doe', age: 51 },
    { fname: 'Jane', lname: 'Donnson', age: 20 }
];

// Calculate the sum of the ages - people array
let sumOfAllPeople = 0;
for (let i = 0; i < people.length; i++) {
    sumOfAllPeople += people[i]['age'];
};
console.log(`The sum of all ages in the people array is ${sumOfAllPeople}.`);


// Find the people that are older than 36
let olderThan36 = [];
for (let i = 0; i < people.length; i++) {
    if (people[i]['age'] > 36) {
        olderThan36.push(people[i]['fname'])
    }
};
for (let i = 0; i < olderThan36.length; i++) {
    const element = olderThan36[i];
    console.log(`${olderThan36[i]} is older than 36.`);

}

// Find the people that are smaller than 24
let youngerThan24 = [];
for (let i = 0; i < people.length; i++) {
    if (people[i]['age'] < 24) {
        youngerThan24.push(people[i]['fname'])
    }
};
for (let i = 0; i < youngerThan24.length; i++) {
    console.log(`${youngerThan24[i]} is younger than 24.`);
};


// Find the person with the longest name
let personWithLongestName = [];
for (let i = 0; i < people.length; i++) {
    personWithLongestName.push(people[i]['fname'])
    
};
personWithLongestName.sort((a, b) => {
    return b.length - a.length;
});
console.log(`${personWithLongestName[0]} has the longest name.`);


numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];


// Multiply every element by 3 
let MultiplyElement = numbers.map(x => x * 3);
console.log(MultiplyElement);


// Sort the numbers (ascending and descending)
numbers.sort((a, b) => {
    return a - b;
});
console.log(numbers);
numbers.sort((a, b) => {
    return b - a;
});
console.log(numbers);


// Find the sum of the numbers
let reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(`The sum of all the numbers is ${numbers.reduce(reducer)}`);


// Find max and min in the array
console.log(`Smallest number in the numbers array is ${Math.min(...numbers)}`);
console.log(`Largest number in the numbers array is ${Math.max(...numbers)}`);


// Find second largest element in the array
numbers.sort((a, b) => {
    return b - a;
});
console.log(`The second largest number is ${numbers[1]}`);


// Find the total numbers of even and odd elements in the array
let evenNumbers = [];
let oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0){
        evenNumbers.push(numbers[i])
    }else if (numbers[i] % 2 != 0){
        oddNumbers.push(numbers[i])
    };   
};

console.log(`The numbers array has ${evenNumbers.length} even numbers and ${oddNumbers.length} odd numbers`);


// Count number of digits in a number
let aNumber = 25489;
console.log(`The number ${aNumber} has ${aNumber.toString().length} digits`);


// Print the following pattern
let aPattern = '';
for (let i = 1; i < 6; i++) {
    console.log(aPattern += i + ' ');
};


// Write a program to find power of a number.
let Number5 = 12;
let numberToPower = 2;
console.log(Math.pow(Number5, numberToPower));


// Given an array loop throught it and display numbers which are divisible by 5 and if you find number greater than 150 stop the loop iteration
let array1 = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]
for (let i = 0; i < array1.length; i++) {
    if(array1[i] % 5 == 0 && array1[i] < 150)
    console.log(array1[i]);
};