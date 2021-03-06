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

// calculating amount within weekly and annual production:
function incomeOverTime(selling_price, time){
    switch (time) {
        case 'weekly':
            console.log(`Your weekly income will be Ksh ${totalProduction() * 7 * selling_price}`);
            break;

        case 'yearly':
            console.log(`Your yearly income will be Ksh ${totalProduction() * 365 * selling_price}`);
            break;

        // case `monthly`:
        //     console.log(`your monthly income will be ksh ${ totalProduction() *31 * selling_price}`)
    
        default:
            console.log(totalProduction())
            break;
    }
    checkLeapYear(2020, selling_price);
}
// end of calculating amount within weekly and annually:

function checkLeapYear(year, selling_price){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const isLeap = year => new Date(year, 2, 29).getDate() === 29;
    const getDaysInMonth = function(month,year) {
        return new Date(year, month, 0).getDate();
    };
      if(isLeap(year) == true){
        for (let index = 1; index <= monthNames.length; index++) {
             console.log(`Your income for ${monthNames[index]} is ${totalProduction() * getDaysInMonth(index, year) * selling_price}`)
        }
    }else{
        console.log('the year provided is not a leap year.')
    }
}

