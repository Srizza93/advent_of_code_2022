const fs = require("fs");
const data = fs.readFileSync("./fruits.txt").toString();

function getOneMostCarrying(data) {
	let fruits = data.split("\n").map((fruit) => fruit.trim());
	let count = Number(fruits[0]);
	let max = 0;

	for (let i = 1; i < fruits.length; i++) {
		count += Number(fruits[i]);
		if (fruits[i] === "") {
			count > max ? (max = count) : max;
			count = 0;
		}
	}

	return max;
}

console.log(getOneMostCarrying(data));
