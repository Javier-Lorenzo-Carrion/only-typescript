export function sum(numbers:number[]):number{
    return numbers.reduce((previousValue: number, currentValue: number)=> previousValue + currentValue, 0);
}

export function average(numbers:number[]):number{
    return sum(numbers)/numbers.length;
}