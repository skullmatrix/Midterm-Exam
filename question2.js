function filterEvenNumbers(numbers) { //creating a filterEvenNumbers function that takes in an array of numbers
    return numbers.filter(number => number % 2 === 0); //using the filter method and modulo operator to filter out the even numbers
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); //calling the function and trying in an array of numbers that will be displayed in the console
console.log(filterEvenNumbers([11, 12, 13, 14, 15, 16]));


