/** 
 * 3. The Lifetime Supply Calculator
 * 
 * Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
 * 
 * - Write a function named calculateSupply that:
 *   - takes 2 arguments: age, amount per day.
 *   - calculates the amount consumed for rest of the life (based on a constant max age.
 *   - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
 * - Call that function three times, passing in different values each time.

- **Bonus**: Accept floating point values for amount per day, and round the result to a round number.
*/


function calculateSupply(age, amountPerDay) {
    let totalConsumption = Math.round(age*365*amountPerDay);
    document.write("You will need "+totalConsumption+" to last until the ripe old age of "+age+"<br>");
}

calculateSupply(80, 2);
calculateSupply(100, 1/7);
calculateSupply(90, 2/7);