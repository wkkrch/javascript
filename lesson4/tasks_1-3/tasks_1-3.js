function rectangleArea(a, b) {
    return a * b;
}

let result = rectangleArea(3, 6);
console.log(result);

////////////////////////////////////////////////////////////

function circleArea(r) {
    return Math.PI * r * r;
}

let resultCircle = circleArea(3);
console.log(resultCircle);
////////////////////////////////////////////////////////////

function cylinderArea (h, r) {
    return 2 * Math.PI * r * h + 2 * Math.PI * r * r;
}
let resultCylinder = cylinderArea(10, 3);
console.log(resultCylinder);