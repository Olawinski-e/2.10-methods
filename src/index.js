import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// /* FOR EACH */
// const numbers = [1, 2, 3];
// const newNumbers = [];

// numbers.forEach(function(number) {
//   newNumbers.push(number * 2);
// });
// console.log(newNumbers);

// /* MAP */
// const array = [1, 2, 3];

// const newArray = array.map(number => number * 2);
// console.log(newArray);

// const foods = ["pizza", "sandwiches", "ice cream"];
// const capFoods = foods.map(food => food.toUpperCase());
// console.log(capFoods);

// const students = [
//   {
//     name: "Tony Parker",
//     firstProject: 80,
//     secondProject: 75,
//     finalExam: 90
//   },
//   {
//     name: "Marc Barchini",
//     firstProject: 84,
//     secondProject: 65,
//     finalExam: 65
//   },
//   {
//     name: "Claudia Lopez",
//     firstProject: 45,
//     secondProject: 95,
//     finalExam: 99
//   },
//   {
//     name: "Alvaro Briattore",
//     firstProject: 82,
//     secondProject: 92,
//     finalExam: 70
//   },
//   {
//     name: "Isabel Ortega",
//     firstProject: 90,
//     secondProject: 32,
//     finalExam: 85
//   },
//   {
//     name: "Francisco Martinez",
//     firstProject: 90,
//     secondProject: 55,
//     finalExam: 78
//   },
//   {
//     name: "Jorge Carrillo",
//     firstProject: 83,
//     secondProject: 77,
//     finalExam: 90
//   },
//   {
//     name: "Miguel López",
//     firstProject: 80,
//     secondProject: 75,
//     finalExam: 75
//   },
//   {
//     name: "Carolina Perez",
//     firstProject: 85,
//     secondProject: 72,
//     finalExam: 67
//   },
//   {
//     name: "Ruben Pardo",
//     firstProject: 89,
//     secondProject: 72,
//     finalExam: 65
//   }
// ];

// const finalGrades = students.map( theStudents => {
// const prjAvg = (theStudents.firstProject + theStudents.secondProject) /2
// const finalGrade = prjAvg * 0.4 + theStudents.finalExam * 0.6
// return {
// name: theStudents.name,
// finalGrade: finalGrade
// }
// })
// console.log(finalGrades);

// /* REDUCE */
// const numberz = [12, 9, 1, 8];

// const total = numberz.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 23);
// console.log("total is: ", total);

// const totaly = numberz.reduce((accumulator, current) => accumulator * current);
// console.log(totaly);

// const words = ["This", "is", "one", "big", "string"];

// const bigString = words.reduce((sum, word) => sum + word)
// console.log(bigString)

// const people = [
//   { name: "Candice", age: 25 },
//   { name: "Tammy",   age: 30 },
//   { name: "Allen",   age: 49 },
//   { name: "Nettie",  age: 21 },
//   { name: "Stuart",  age: 17 }
// ];

// const ages = people.reduce((sum, person) => {
//   return sum + person.age;
// }, 0);
// console.log(ages);

// const menu = [
//   { name: "Carrots", calories: 150 },
//   { name: "Steak", calories: 350 },
//   { name: "Broccoli", calories: 120 },
//   { name: "Chicken", calories: 250 },
//   { name: "Pizza", calories: 520 }
// ];

// const averageCalories = menu.reduce((sum, plate) => {
//   const summ = sum + (plate.calories)
//    return Math.round(summ)
// }, 0)/ menu.length
// console.log(averageCalories);

// const product = {
//   name: "AmazonBasics Apple Certified Lightning to USB Cable",
//   price: 7.99,
//   manufacter: "Amazon",
//   reviews: [
//     {
//       user: "Pavel Nedved",
//       comments: "It was really usefull, strongly recommended",
//       rate: 4
//     },
//     { user: "Alvaro Trezeguet", comments: "It lasted 2 days", rate: 1 },
//     { user: "David Recoba", comments: "Awesome", rate: 5 },
//     { user: "Jose Romero", comments: "Good value for money", rate: 4 },
//     { user: "Antonio Cano", comments: "It broked really fast", rate: 2 }
//   ]
// };

// const totalReviews = product.reviews.reduce((sum, element) => {
//   return (sum += element.rate);
// }, 0);

// const averageRate = totalReviews / product.reviews.length;
// console.log(`averageRate rate: ${averageRate}`);

/* FILTER */

// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(number => number % 2 === 0)
// console.log(evenNumbers);

// var people = [
//   { name: "Candice", age: 25 },
//   { name: "Tammy", age: 30 },
//   { name: "Allen", age: 20 },
//   { name: "Nettie", age: 21 },
//   { name: "Stuart", age: 17 },
//   { name: "Bill", age: 19 }
// ];

// const eligible = people.filter(person => person.age >= 21 )
// console.log(eligible)

// const places = [
//   {
//    title: "Awesome Suite 20' away from la Rambla",
//    price: 200,
//    type: "Private Room",
//    pool: true,
//    garage: false
//   },
//   {
//    title: "Private apartment",
//    price: 190,
//    type: "Entire Place",
//    pool: true,
//    garage: true
//   },
//   {
//    title: "Apartment with awesome views",
//    price: 400,
//    type: "Entire Place",
//    pool: false,
//    garage: false
//   },
//   {
//    title: "Apartment in la Rambla",
//    price: 150,
//    type: "Private Room",
//    pool: false,
//    garage: true
//   },
//   {
//    title: "Comfortable place in Barcelona´s center",
//    price: 390,
//    type: "Entire place",
//    pool: true,
//    garage: true
//   },
//   {
//    title: "Room near Sagrada Familia",
//    price: 170,
//    type: "Private Room",
//    pool: false,
//    garage: false
//   },
//   {
//    title: "Great house next to Camp Nou",
//    price: 140,
//    type: "Entire place",
//    pool: true,
//    garage: true
//   },
//   {
//    title: "New apartment with 2 beds",
//    price: 2000,
//    type: "Entire place",
//    pool: false,
//    garage: true
//   },
//   {
//    title: "Awesome Suite",
//    price: 230,
//    type: "Private Room",
//    pool: false,
//    garage: false
//   },
//   {
//    title: "Apartment 10' from la Rambla",
//    price: 930,
//    type: "Entire place",
//    pool: true,
//    garage: true
//   }
//  ]

//  const withPool = places.filter(place => place.pool === true)
//  console.log(withPool)

// const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

// const notEven = numbers.filter(number => number % 2 !== 0)
// const result = notEven.filter(number => number > 42)
// console.log(notEven);
// console.log(result);

/* SORT */

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
numbers.sort((a, b) => a - b);
console.log(numbers);

const numberp = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
numberp.sort((a, b) => b - a);
console.log(numberp);

const words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];
words.sort();
console.log(words);

const wordsp = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];
wordsp.sort().reverse();
console.log(words);

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Average of the product</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
