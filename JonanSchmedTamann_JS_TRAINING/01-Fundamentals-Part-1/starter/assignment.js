// JavaScript Fundamentals — Part 1 Assignments

// Country Data
const country = "India";
const continent = "Asia";
let population = 140;

// 1. Logging values
console.log("Country:", country);
console.log("Continent:", continent);
console.log("Population in crore:", population);

// 2. Data Types
const isIsland = false;
let language;
console.log(typeof isIsland); // boolean
console.log(typeof population); // number
console.log(typeof country); // string
console.log(typeof language); // undefined

// 3. Set the language
language = [
  "TAMIL",
  "TELUGU",
  "MALAYAM",
  "KANADAM",
  "MARATHI",
  "GUJURATHI",
  "HINDI",
];

// 4. Basic operations
console.log("Half population: " + population / 2);
console.log(`SUM: ${population + 1}`);

const finlandPopulation = 6;
console.log(population > finlandPopulation); // true

const averagePopulation = 33;
console.log(population < averagePopulation); // false

// 5. String concatenation using template literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);



