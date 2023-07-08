let alien_color : string = 'green';
let points: number = 0;

if (alien_color == 'green') {
    console.log('Player just earned 5 points.');
    points += 5;
}

if (points == 5) {
    console.log("You win.");
} else {
    console.log("You lose.");
}

