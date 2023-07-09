function make_shirt(size :string = "L", msg:string = "I love TypeScript") : string {
    return `Size ${size}, Message: ${msg}`;
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
