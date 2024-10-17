function add(numbers) {
    if (!numbers) return 0;
    let delimiter = /,|\n/
    let numArray = numbers.split(delimiter);

    let sum = numArray.reduce((acc, num) => acc + parseInt(num), 0);

    return sum
}

console.log(add(''))
console.log(add('1'))
console.log(add('1,5'))
console.log(add('1\n2,3'))
