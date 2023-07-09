function make_shirt(size, msg) {
    if (size === void 0) { size = "L"; }
    if (msg === void 0) { msg = "I love TypeScript"; }
    return "Size ".concat(size, ", Message: ").concat(msg);
    // switch(size) {
    //     case 'L':
    //     case 'M':
    //         return `Size ${size}, Message: ${msg}`;
    //     default:
    //         return `Size ${size}, Message: ${msg}`;
    // }
}
console.log(make_shirt('L'));
console.log(make_shirt('M'));
console.log(make_shirt('XL', 'Hello World'));
