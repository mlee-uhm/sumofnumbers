function sumFor(data: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

console.log(sumFor([1, 2, 3, 4]));

function sumWhile(data: number[]): number {
  let sum: number = 0;
  let index: number = 0;
  while (index < data.length) {
    sum += data[index];
    index++;
  }
  return sum;
}
console.log(sumWhile([1, 2, 3, 4]));

function sumRecursion(data: number[]): number {
  if (data.length !== 0) {
    return data[0] + sumRecursion(data.slice(1, data.length));
  }
  return 0;
}
console.log(sumRecursion([1, 2, 3, 4]));

function sumTheFunctionalWay(data: number[]) {
  return data.reduce((total, current) => total + current, 0);
}
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
