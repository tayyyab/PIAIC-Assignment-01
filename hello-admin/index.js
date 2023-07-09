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
