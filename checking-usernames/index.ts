let current_users = [
    "Admin",
    "Ali",
    "Tayyab",
    "Zia",
    "Fahad"
];

let new_users = [
    "Ali",
    "Usama",
    "Fahad",
    "Moon",
    "Hadir"
];

for (let i = 0 ; i <new_users.length; i ++) {
    let exist = false;
    current_users.forEach(e => (e.toLocaleLowerCase() == new_users[i].toLocaleLowerCase()) ? exist = true : null);
    if (exist) {
        console.log(`${new_users[i]}: username already exist. Try another.`);
    } else {
        console.log(`${new_users[i]}: username is available`);
    }
}