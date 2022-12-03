const fs = require("fs");
const data = fs.readFileSync("./input.txt").toString();

function getTotalScore(data) {
	let total = 0;
	data = data.split("\n");

	const rules = {
		X: {
			score: 0,
			A: "C",
			B: "A",
			C: "B",
		},
		Y: {
			score: 3,
			A: "A",
			B: "B",
			C: "C",
		},
		Z: {
			score: 6,
			A: "B",
			B: "C",
			C: "A",
		},
		A: 1,
		B: 2,
		C: 3,
	};

	for (let i = 0; i < data.length; i++) {
		let game = data[i].split(" ");
		total += rules[game[1]].score + rules[rules[game[1]][game[0]]];
	}
	return total;
}

console.log(getTotalScore(data));
