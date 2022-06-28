
function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
console.log(pizza1)

var pizza2 = pizzaOven("hand tossed", "marinara",["mozarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2)

var pizza3 = pizzaOven("thin crust", "spicy red", ["mozarella", "parmesan"], ["bacon", "pineapple"])
console.log(pizza3)

var pizza4 = pizzaOven("gluten free crust", "marinara", "mozarella", ["olives", "bell peppers", "onions", "garlic", "cherry tomatoes"])
console.log(pizza4)



function randomPizza(crustType, sauceType, cheese, toppings){
    var ranPiz={}

    var crusts = ["thin", "normal", "deep dish", "gluten free"];
    var sauces = ["marinara", "spicy red", "white sauce", "no sauce"];
    var cheeses = ["mozarella", "feta", "parmesan", "gorgonzola", "goat", "ricotta"];
    var toppingList = ["pepperoni", "mushrooms", "olives", "bell peppers", "onions", "bacon", "chicken", "garlic", "cherry tomatoes", "pineapple", "sausage"];

    ranPiz.crustType = crusts[Math.floor(Math.random()*crusts.length)];
    ranPiz.sauceType = sauces[Math.floor(Math.random()*sauces.length)];
    ranPiz.cheese = cheeses[Math.floor(Math.random()*cheeses.length)];
    ranPiz.toppings = [];

    var numToppings = Math.floor(Math.random()*toppingList.length);

    for(var i=0; i<=numToppings; i++){
        var top = toppingList[Math.floor(Math.random()*toppingList.length)];

        if(ranPiz.toppings.includes(top)){
            console.log("topping already there")
        } else 
        {
            ranPiz.toppings.push(top)
        }
    }

    return ranPiz;
}

console.log(randomPizza())