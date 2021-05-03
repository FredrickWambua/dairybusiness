// object : milk production per shed in a day
const perShed = {
	  A: 510,
    B: 308,
    C: 486,
    D: 572
}
// milk production per shed report in a day
for (const [key, value] of Object.entries(perShed)) {
    console.log(`Your production in shed ${key} ${value} litres per day`);
  }
// total milk production in a day
const total = (accumulator, currentValue) => accumulator + currentValue;
const obj = Object.values(perShed);

console.log(`The total production is ${obj.reduce(total)} litres per day`);

return obj.reduce(total);
