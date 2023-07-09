// Not sure about this one. :)
function create_car(manufacturer: string, model: string, ...args: any) : Object {
    let car: Object = {
        manufacturer: manufacturer,
        model: model,
        ...args
    }
 
    return car;
}
console.log(create_car('Ferrari', 'F8 Tributo'));
console.log(create_car('Tesla', 'Model S', {color: 'White'}));
