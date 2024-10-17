function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/

    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]);
        numbers = numbers.slice(customDelimiterMatch[0].length);
    }

    let numArray = numbers.split(delimiter);
    let negatives = [];

    let sum = numArray.reduce((acc, num) => {
        let number = parseInt(num);
        if (isNaN(number)) return acc;

        if (number < 0) {
            negatives.push(number);
        }

        return acc + number;
    }, 0);

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return sum;
}

console.log(add(''))
console.log(add('1'))
console.log(add('1,5'))
console.log(add('1\n2,3'))
console.log(add('//;\n1;2'))
console.log(add('//;\n1;2;-2;1;-6;-4'))
