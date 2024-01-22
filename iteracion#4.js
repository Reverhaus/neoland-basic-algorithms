const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]
console.log("Ejercicio 1.1:", avengers[0])

avengers[0] = "IRONMAN"

console.log("Ejercicio 1.2:", avengers)

console.log("Ejercicio 1.3:", avengers.length, "Avengers en total")

//-----------------------

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]

rickAndMortyCharacters[3] = "Morty"
rickAndMortyCharacters[4] = "Summer"

console.log(`Ejercicio 1.4: ${rickAndMortyCharacters[4]} ---- Array completo: ${rickAndMortyCharacters}`)

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]

console.log(`Ejercicio 1.5:,
${rickAndMortyCharacters2.shift()},${rickAndMortyCharacters2.pop()} ---- Array resultante: ${rickAndMortyCharacters2}`)

const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.splice(1,1)
console.log("Ejercicio 1.6: ",rickAndMortyCharacters3)