let usernames : string[] = [
    "Admin",
    "Eric",
    "Tayyab",
    "Ali",
    "Zia"
];


for (let i =0 ; i < usernames.length; i ++ ){
    let user =  usernames[i];
    if (user.toLowerCase() == "admin") {
        console.log(`Welcome ${user}, We need your assistence.`);
    } else {
        console.log(`Hello ${user}, thank you for logging in again`);
    }
}

if (!(usernames.length > 0)) {
    console.log("We need to find some users!");
} else {
    while (usernames.length > 0) {
        console.log(`${usernames.pop()} is removed.`);
    }
}

