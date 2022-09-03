/**
 * Array properties
 */

/**
 * Array methods
 */

// Filling an array
let items = new Array(1000).fill(1);
items = Array.from({ length: 100 }, (v, idx) => idx + 1);
// Converting string to array
let chars = Array.from("string");
// Converting array to pair of entry
const itrEntries = items.entries().next();

/**
 * Converting to string
 */
let arr = [undefined, null, "Rabii", "Luena", true, undefined];
arr.toString();

// Join
const elements = ["Fire", "Air", "Water"];
elements.join("");
elements.join(",");

// Locale String
let priceArr = [9.99, 12.5, 8];
console.log(
  priceArr.toLocaleString("sp-SP", { style: "currency", currency: "EUR" })
);

//

// Adding items end of array, it returns length of the new arr
arr = [0, "0"];
let newArrLength = arr.push(1, 2, 3, "string");
// newArrLength;

// Adding items to the beginning of the array
arr = ["0", 0];
newArrLength = arr.unshift(10, 11, 12);
// newArrLength;

/**
 * Pop
 * Removing item from the end of array
 */
let removedItem = arr.pop();

/**
 * Shift
 */
removedItem = arr.shift();

/**
 * Array.prototype.splice(startIndex, deleteCount, item1, item2, item3)
 *
 * Removing or replacing contents of an array
 * It is mutating original array
 */
let months = ["January", "February", "Monday", "Tuesday"];
removedItem = [...months].splice(2); // ["January", "February"]
removedItem = months.splice(1, 1); // ["January", "February", "Tuesday"]

// Replacing
months.splice(1, 0, "0", "5", 12); // ["January", "0", "12", "Mondays"]

// Concate arrays
let newArr = months.concat(["89"]);

for (const val of newArr) {
  if (val === "Monday") continue; // Skipping monday
  console.log(val);
}

// Index here is in string and interger
for (const index in newArr) {
  if (index === "4") break; // Stop at index 4
  console.log(index);
}

let count = { sheeps: 0, cows: 0 };

months.forEach((item, index) => {
  ++count.sheeps;
}, count);

/**
 * Checking
 */

arr = [1, 4, { n: 4 }, { n: 10 }];

const item = arr.filter((val) => val === 4);

let evenSum = 0;

arr.some((n) => {
  const shouldQuit = n < 0;

  if (n % 2 === 0) {
    evenSum += n;
  }

  return shouldQuit;
});

/**
 * Array.prototype.flat
 */

arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [10, 11, 12],
];

newArr = arr.flat(3);
newArr;

newArr = arr.flatMap((a) => a.slice(0, 1));
