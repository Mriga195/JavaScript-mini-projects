const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = nums.map(function(element) {
    return Math.pow(element, 2);
});

const cubes = nums.map(function(element) {
    return Math.pow(element, 3);
});

// squares();
console.log(squares);
console.log(cubes);