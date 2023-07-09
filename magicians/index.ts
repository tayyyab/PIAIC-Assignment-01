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