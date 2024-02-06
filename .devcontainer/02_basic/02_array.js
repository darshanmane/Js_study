const marvels_heros =["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvels_heros.push(dc_heros)

// console.log(marvels_heros);
// console.log(marvels_heros[3][1]);

// const all_heros = marvels_heros.concat(dc_heros)
// console.log(all_heros);

const all_New_Heros = [...marvels_heros,...dc_heros]
// console.log(all_New_Heros);  // concat spread array

const another_array = [1, 2, 3, [4, 5, 6], 7,[8, 9, [10, 11]]]

const real_another_arry = another_array.flat(Infinity)
// console.log(real_another_arry);

// console.log(Array.isArray("Suresh")); 
// console.log(Array.from("Suresh")); 
// console.log(Array.from({name: "Suresh"}));  // it will return blank array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));