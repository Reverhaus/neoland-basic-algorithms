 firstName = 'Jon';
lastName = 'Snow';
age = 24
console.log('Soy',firstName,lastName,', tengo',age,'y me gustan los lobos') 

//---------------//

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

const sumaPrecio = toy1.price + toy2.price;

console.log(sumaPrecio); 

//---------------//

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000

car1.finalPrice = globalBasePrice+car1.basePrice
car2.finalPrice = globalBasePrice+car2.basePrice

console.log(car1, car2)

//---------------//