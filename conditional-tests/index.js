var car = 'subaru';
if (car == 'subaru') {
    console.log("Is car == 'subaru' | predict True.");
}
else {
    console.log('Some other car.');
}
if (car != 'subaru') {
    console.log("car != 'subaru'");
}
if (car.charAt(0) == 's') {
    console.log("Car name start with s.");
}
if (car.charAt(0) == 's' && car.charAt(car.length - 1) == 'u') {
    console.log("Car name start with s and end with u.");
}
var cars = [
    'Civic',
    'Revo'
];
console.log("cars.indexOf('Aulto') : ", cars.indexOf('Aulto') > 0);
console.log("-1 > 0 : ", -1 > 0);
console.log("0 > 0 : ", 0 >= 0);
if (cars.indexOf('Aulto') >= 0) {
    console.log('Aulto is there.');
}
else {
    cars.push('Aulto');
    console.log('Aulto is added.');
}
