function sandwich_item() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log("Summary: ", args);
}
sandwich_item('Chicken', 'Onion');
sandwich_item('Tamato', 'Chicken', 'Onion');
sandwich_item('Mayo', 'Chicken', 'Onion', 'Special sauce');
