
Here's a README file for your utility functions:

markdown
Copy code
# Array Utility Functions

A collection of utility functions for working with arrays in JavaScript.

## Installation

You can install the package via npm:

```bash
npm install @your-username/array-utils

```

```javScript
const {
  sumOf,
  productOf,
  averageOf,
  findMax,
  findMin,
  reverse,
  countOccurrences,
  isSorted,
  removeDuplicates,
} = require('@your-username/array-utils');

const numbers = [1, 2, 3, 4, 5];

console.log("Sum:", sumOf(numbers)); // Output: 15
console.log("Product:", productOf(numbers)); // Output: 120
console.log("Average:", averageOf(numbers)); // Output: 3
console.log("Max:", findMax(numbers)); // Output: 5
console.log("Min:", findMin(numbers)); // Output: 1
console.log("Reversed:", reverse(numbers)); // Output: [5, 4, 3, 2, 1]
console.log("Occurrences of 3:", countOccurrences(numbers, 3)); // Output: 1
console.log("Is sorted:", isSorted(numbers)); // Output: true
console.log("Duplicates removed:", removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]
```