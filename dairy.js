// object : milk production per shed
const perShed = {
	A: 510,
    B: 308,
    C: 486,
    D: 572
}
// milk production per shed report
for (const [key, value] of Object.entries(perShed)) {
    console.log(`Your production in shed ${key} ${value} litres per day`);
  }
