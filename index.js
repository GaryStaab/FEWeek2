// check logic homework
console.log("----- Check logic homework -----------------------");
console.log
console.log(true && false);
console.log(true || false);
console.log(false && false);
console.log(true && (false || true));
console.log(false || (true && false));
console.log(false || 1 < 5);
console.log(5 >= 4 && 1 > 3);
console.log(10 < 4 || 1 > 4);
console.log(12 >= 2 && 1 < 24);
console.log('Hello'.charAt(0) == 'h');
// Set initial value
let isHotOutside = true;
let isWeekDay = false;
let hasMoneyInPocket = true;
let costOfMilk = 2.99;
let moneyInWallet = 20.00;
let thirstLevel = 8;
// Log calcs to console
console.log("----- Initial values Values -----------------------");
console.log(`     Hot outside: ${isHotOutside}`);
console.log(`        Week Day: ${isWeekDay}`);
console.log(` Money in Pocket: ${hasMoneyInPocket}`);
console.log(`    Cost of Milk: ${costOfMilk}`);
console.log(` Money in Wallet: ${moneyInWallet}`);
console.log(`    Thirst Level: ${thirstLevel}`);
// Do calculations
let shouldBuyIcecream = isHotOutside && hasMoneyInPocket;
let willGoSwimming = isHotOutside && !isWeekDay;
let isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekDay;
let willBuyMilk = thirstLevel >= 3 && hasMoneyInPocket && moneyInWallet > (costOfMilk * 2);
// Log calcs to console
console.log("----- Calculated Values -----------------------");
console.log(`Should buy Icecream: ${shouldBuyIcecream}`);
console.log(`   Will go swimming: ${willGoSwimming}`);
console.log(`        Is Good Day: ${isAGoodDay}`);
console.log(`      Will buy Milk: ${willBuyMilk}`);
// Let continue the calc of change from last week but use arrays and loops - a lot less code!
let denominations = ["Twenty","Ten","Five","One","Quarter","Dime","Nickel","Pennie"];
let denomAmounts = [20,10,5,1,.25,.10,.05,.01];
console.log("----- Calculated Change using modulo arrays and loops --------------------");
remainingOwed = (moneyInWallet - costOfMilk).toFixed(2);
console.log(`Money Tendered: ${moneyInWallet} Amount owed: ${costOfMilk} Change Due: ${remainingOwed}`);
for (i in denominations){
    denomQty = (remainingOwed - (remainingOwed % denomAmounts[i])) / denomAmounts[i];
    remainingOwed -= (denomQty * denomAmounts[i]);
    remainingOwed = remainingOwed.toFixed(2);
    console.log(`${denominations[i]} number of bills/coins ${denomQty}`);
}


