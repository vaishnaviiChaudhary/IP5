// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Define a custom iterator for the array
const squareIterator = {
  // Initialize the iterator
  [Symbol.iterator]: function () {
    let index = 0;

    // This function is responsible for generating values
    return {
      next: () => {
        if (index < numbers.length) {
          const square = numbers[index] ** 2;
          index++;
          return { value: square, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Use the custom iterator to loop through the squares of the numbers
for (const square of squareIterator) {
  console.log(square);
}
