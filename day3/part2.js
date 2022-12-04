const fs = require("fs");
const data = fs.readFileSync("./input.txt").toString();

function getPriorForEachGroupOfThreeLines(data) {
	const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	data = data.split("\n");
	let sum = 0;
	let firstLine = data[0];
	let secondLine = data[1];
	let thirdLine = data[2];
	for (let i = 2; i < data.length; i += 3) {
		if ((1 + i) % 3 === 0) {
			for (let j = 0; j < firstLine.length; j++) {
				if (
					secondLine.includes(firstLine[j]) &&
					thirdLine.includes(firstLine[j])
				) {
					sum += abc.indexOf(firstLine[j]) + 1;
					break;
				}
			}
			firstLine = data[i + 1];
			secondLine = data[i + 2];
			thirdLine = data[i + 3];
		}
	}
	return sum;
}

console.log(getPriorForEachGroupOfThreeLines(data));
