function show_magicians(magicians) {
    magicians.forEach(function (mage) {
        console.log(mage);
    });
}
var magicians = [
    "Marlin",
    "Gandalf",
    "Oz",
    "Dumbledor"
];
show_magicians(magicians);
function make_great(magicians) {
    for (var index = 0; index < magicians.length; index++) {
        magicians[index] = 'Great ' + magicians[index];
    }
}
make_great(magicians);
show_magicians(magicians);
