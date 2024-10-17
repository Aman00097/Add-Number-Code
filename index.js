function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/

    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]);
        numbers = numbers.slice(customDelimiterMatch[0].length);
    }

    let numArray = numbers.split(delimiter);
    let sum = numArray.reduce((acc, num) => acc + parseInt(num), 0);

    return sum;
}

console.log(add(''))
console.log(add('1'))
console.log(add('1,5'))
console.log(add('1\n2,3'))
console.log(add('//;\n1;2'))
