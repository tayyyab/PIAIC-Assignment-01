let my_alien_color : string = 'blue';
let my_points: number = 0;

if (my_alien_color == 'green') {
    console.log('Player just earned 5 points for shooting the alien.');
    my_points += 5;
} else {
    console.log('Player just earned 10 points.');
    my_points += 10;
}

if (my_points > 5) {
    console.log("You win.");
} else {
    console.log("You lose.");
}

