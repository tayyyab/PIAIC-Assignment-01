var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
function make_great_seprate(magicians) {
    var mages = __spreadArray([], magicians, true);
    for (var index = 0; index < mages.length; index++) {
        mages[index] = 'Great ' + mages[index];
    }
    return mages;
}
// make_great(magicians);
console.log(make_great_seprate(magicians));
show_magicians(magicians);
