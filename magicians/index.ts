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

make_great(magicians);

show_magicians(magicians);