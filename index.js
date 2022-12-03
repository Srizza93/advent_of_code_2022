import data from "./fruits.js";

let fruits = data.split("\n").map((fruit) => fruit.trim());

let count = Number(fruits[0]);
let eachElfCarrying = [];

for (let i = 1; i < fruits.length; i++) {
	count += Number(fruits[i]);
	if (fruits[i] === "") {
		eachElfCarrying.push(count);
		count = 0;
	}
}

eachElfCarrying = eachElfCarrying.sort((a, b) => b - a);

const topThree = eachElfCarrying[0] + eachElfCarrying[1] + eachElfCarrying[2];

console.log(topThree);
