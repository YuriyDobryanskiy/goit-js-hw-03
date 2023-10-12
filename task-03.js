function filterArray(numbers, value) {
    const filteredArray = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            filteredArray.push(numbers[i]);
        }
    }

    return filteredArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));