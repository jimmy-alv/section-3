function addNumbers(a: number, b: number): number {
    return a + b;
}
const result = addNumbers(1, 2)
console.log({ result })

const addNumbersArrow = (a: number, b: number): string => {
    return `${ a + b }`;
}
const result2 = addNumbersArrow(2, 3);
console.log(result2);

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}
const resultMultiply = multiply(3)

console.log({ result, result2, resultMultiply })


export {};