(() => {
   const make_sandwich = (...items: string[])  =>{
        console.log(`Making a sanwich with: ${items.join(", ")}.`)
   }

  make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
})();
