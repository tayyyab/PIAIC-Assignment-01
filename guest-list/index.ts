let guest_list : string[] = [
    "Imran Khan",
    "Dr. Israr Ahmed",
    "Lukman"
];
console.log("Number of Invited Guests: ", guest_list.length);

guest_list.forEach(e => console.log(`Greeting! ${e}, I have heard many great thing about you and want to learn from you. That is why I am sending this invitation for the Dinner, Hope you attend. Thank you.`));

console.log('The guest who can not attend: ', guest_list[0]);

// Replacing the guest
guest_list[0] = "Kizer"
console.log("Number of Invited Guests: ", guest_list.length);
guest_list.forEach(e => console.log(`Greeting! ${e}, I have heard many great thing about you and want to learn from you. That is why I am sending this invitation for the Dinner, Hope you attend. Thank you.`));


console.log('Greeting everyone, I have found a bigger table so let\'s invite few more people. ');

guest_list.unshift('Alama Iqbal');
guest_list.splice(3, 0 , "Fahad Hassan")
guest_list.push('Socrates');

console.log("Number of Invited Guests: ", guest_list.length);

guest_list.forEach(e => console.log(`Greeting! ${e}, I have heard many great thing about you and want to learn from you. That is why I am sending this invitation for the Dinner, Hope you attend. Thanks.`));


console.log("Sorry to inform you all but the new Dinner table will not be avaliable on Dinner so there is space for only few peoples");


console.log(`${guest_list.pop()}, Sorry to inform you we are unable to entertaine you on Dinner this time.`);
console.log(`${guest_list.pop()}, Sorry to inform you we are unable to entertaine you on Dinner this time.`);
console.log(`${guest_list.pop()}, Sorry to inform you we are unable to entertaine you on Dinner this time.`);
console.log(`${guest_list.pop()}, Sorry to inform you we are unable to entertaine you on Dinner this time.`);
console.log("Number of Invited Guests: ", guest_list.length);

guest_list.forEach(e => console.log(`Greeting! ${e}, You are still invited. Hope you attend. Thank you.`));

guest_list.pop();
guest_list.pop();

console.log(guest_list);

