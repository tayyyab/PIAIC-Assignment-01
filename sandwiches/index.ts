function sandwich_item(...args: string[]) {
    console.log("Summary: ", args);
}

sandwich_item('Chicken', 'Onion');
sandwich_item('Tamato', 'Chicken', 'Onion');
sandwich_item('Mayo', 'Chicken', 'Onion', 'Special sauce');