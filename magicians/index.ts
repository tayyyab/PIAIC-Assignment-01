function show_magicians( magicians: string[]) {
    magicians.forEach(mage => {
        console.log(mage);
    })
}

let magicians: string[] = [
    "Marlin",
    "Gandalf",
    "Oz",
    "Dumbledor"
];

show_magicians(magicians);

function make_great(magicians:string[]) {
    for (let index = 0; index < magicians.length; index++) {
        magicians[index] = 'Great '+ magicians[index];
    }
}

function make_great_seprate(magicians:string[]) : string[] {
    let mages = [...magicians];
    for (let index = 0; index < mages.length; index++) {
        mages[index] = 'Great '+ mages[index];
    }

    return mages;
}

// make_great(magicians);

console.log(make_great_seprate(magicians));

show_magicians(magicians);