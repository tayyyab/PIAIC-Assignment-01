var animals = [
    'Dog',
    'Wolf',
    'Fox'
];
for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    if (animal == 'Dog') {
        console.log('A Dog would make a great pet.');
    }
    else if (animal == "Wolf") {
        console.log("Wolfs hunt in the pack.");
    }
    else if (animal == "Fox") {
        console.log("I like Foxes.");
    }
}
console.log("All three of them belong to the wolf family.");
console.log("Not all of them make great pets.");
