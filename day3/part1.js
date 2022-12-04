const fs = require("fs");
const data = fs.readFileSync("./input.txt").toString();

function getPrioritiesSum(data) {
	const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let sum = 0;
	data = data.split("\n");
	for (let i = 0; i < data.length; i++) {
		const firstHalf = data[i].slice(0, Math.floor(data[i].length / 2));
		const secondHalf = data[i].slice(Math.floor(data[i].length / 2));
		for (let j = 0; j < firstHalf.length; j++) {
			if (secondHalf.includes(firstHalf[j])) {
				sum += abc.indexOf(firstHalf[j]) + 1;
				break;
			}
		}
	}
	return sum;
}

console.log(getPrioritiesSum(data));
