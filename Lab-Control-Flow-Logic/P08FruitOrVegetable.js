function fruitOrVegetable(product){
    let fruite = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetable = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    if (fruite.includes(product)) {
        console.log('fruit');
        
    }
    else if (vegetable.includes(product)) {
        console.log('vegetable');
        
    }else {
        console.log('unknown');
    }
}