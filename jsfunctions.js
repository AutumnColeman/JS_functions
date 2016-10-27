// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
var arr = [1, 42, -8, 7, -5, -12];
var positive = arr.filter(function(n) {
  return n > 0;
});
console.log(positive);
