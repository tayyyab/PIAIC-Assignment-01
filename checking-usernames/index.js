var current_users = [
    "Admin",
    "Ali",
    "Tayyab",
    "Zia",
    "Fahad"
];
var new_users = [
    "Ali",
    "Usama",
    "Fahad",
    "Moon",
    "Hadir"
];
var _loop_1 = function (i) {
    var exist = false;
    current_users.forEach(function (e) { return (e.toLocaleLowerCase() == new_users[i].toLocaleLowerCase()) ?
        exist = true : null; });
    if (exist) {
        console.log("".concat(new_users[i], ": username already exist. Try another."));
    }
    else {
        console.log("".concat(new_users[i], ": username is available"));
    }
};
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
