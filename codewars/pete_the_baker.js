function cakes(recipe, available) {
    
    let quantity = [];

    for (var item in recipe) {
        available.hasOwnProperty(item)?quantity.push(Math.floor(available[item]/recipe[item])):quantity=[0];
    }

    return quantity.sort()[0];
    
};

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
