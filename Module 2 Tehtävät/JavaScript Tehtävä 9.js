function even(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

let originalArray = [2, 7, 4];
let evenArray = even(originalArray);

console.log("Original Array:", originalArray);
console.log("Even Numbers Array:", evenArray);
