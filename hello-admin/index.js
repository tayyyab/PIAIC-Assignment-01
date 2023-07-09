var usernames = [
    "Admin",
    "Eric",
    "Tayyab",
    "Ali",
    "Zia"
];
for (var i = 0; i < usernames.length; i++) {
    var user = usernames[i];
    if (user.toLowerCase() == "admin") {
        console.log("Welcome ".concat(user, ", We need your assistence."));
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again"));
    }
}
if (!(usernames.length > 0)) {
    console.log("We need to find some users!");
}
else {
    while (usernames.length > 0) {
        console.log("".concat(usernames.pop(), " is removed."));
    }
}
