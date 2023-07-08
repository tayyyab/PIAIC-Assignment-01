let guest_list : string[] = [
    "Imran Khan",
    "Dr. Israr Ahmed",
    "Lukman"
];

guest_list.forEach(e => console.log(`Greeting! ${e}, I have heard many great thing about you and want to learn from you. That is why I am sending this invitation for the Dinner, Hope you attend. Thanks.`));

console.log('The guest who can not attend: ', guest_list[0]);

// Replacing the guest
guest_list[0] = "Kizer"

guest_list.forEach(e => console.log(`Greeting! ${e}, I have heard many great thing about you and want to learn from you. That is why I am sending this invitation for the Dinner, Hope you attend. Thanks.`));
