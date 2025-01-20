const rollDice = () => {
  return Math.floor(Math.random() * 6) +1
};
const diceRoll = rollDice()
console.log("You Rolled", diceRoll);
