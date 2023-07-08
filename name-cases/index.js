var username = "Muhammad tayyab bahauddin";
console.log(username.toLowerCase());
console.log(username.toUpperCase());
console.log(username.split(' ').map(function (e) { return e.charAt(0).toUpperCase() + e.substring(1).toLocaleLowerCase(); }).join(' '));
