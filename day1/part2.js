const fs = require("fs");
const data = fs.readFileSync("./fruits.txt").toString();

function getThreeMostCarrying(data) {
	let fruits = data.split("\n").map((fruit) => fruit.trim());
	let eachElfCarrying = [];
	let count = Number(fruits[0]);

	for (let i = 1; i < fruits.length; i++) {
		count += Number(fruits[i]);
		if (fruits[i] === "") {
			eachElfCarrying.push(count);
			count = 0;
		}
	}

	eachElfCarrying = eachElfCarrying.sort((a, b) => b - a);

	return eachElfCarrying[0] + eachElfCarrying[1] + eachElfCarrying[2];
}

console.log(getThreeMostCarrying(data));
