function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([11, 12, 13, 14, 15, 16]));