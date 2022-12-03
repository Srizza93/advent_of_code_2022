const fs = require("fs");
const data = fs.readFileSync("./input.txt").toString();

function getTotalScore(data) {
	let total = 0;
	data = data.split("\n");
	// Rock Me: X opponent: A
	// Paper Me: Y opponent: B
	// Scissors Me: Z opponent: C
	const rules = {
		X: {
			A: 3,
			B: 0,
			C: 6,
			bonus: 1,
		},
		Y: {
			A: 6,
			B: 3,
			C: 0,
			bonus: 2,
		},
		Z: {
			A: 0,
			B: 6,
			C: 3,
			bonus: 3,
		},
	};
	for (let i = 0; i < data.length; i++) {
		let game = data[i].split(" ");
		total += rules[game[1]].bonus + rules[game[1]][game[0]];
	}
	return total;
}

console.log(getTotalScore(data));
