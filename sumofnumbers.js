function sumFor(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum;
}
console.log(sumFor([1, 2, 3, 4]));
function sumWhile(data) {
    var sum = 0;
    var index = 0;
    while (index < data.length) {
        sum += data[index];
        index++;
    }
    return sum;
}
console.log(sumWhile([1, 2, 3, 4]));
function sumRecursion(data) {
    if (data.length !== 0) {
        return data[0] + sumRecursion(data.slice(1, data.length));
    }
    return 0;
}
console.log(sumRecursion([1, 2, 3, 4]));
function sumTheFunctionalWay(data) {
    return data.reduce(function (total, current) { return total + current; }, 0);
}
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
