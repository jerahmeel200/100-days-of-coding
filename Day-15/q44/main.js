const make_sandwich = (...items)=>{
    console.log(`you can add: ${items.join(", ")}.`)   
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");