let username: string = "Muhammad tayyab bahauddin"

console.log(username.toLowerCase())
console.log(username.toUpperCase())
console.log(username.split(' ').map(e => e.charAt(0).toUpperCase() + e.substring(1).toLocaleLowerCase()).join(' '))

