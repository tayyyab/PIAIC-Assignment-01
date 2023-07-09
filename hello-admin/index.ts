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