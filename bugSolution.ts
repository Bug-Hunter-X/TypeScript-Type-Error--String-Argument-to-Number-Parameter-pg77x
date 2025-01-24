function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, Number('2')); // Correct: String is converted to a number
console.log(result); // Output: 3

result = add(1, parseInt('2', 10)); // Correct: String is converted to a number
console.log(result); // Output: 3