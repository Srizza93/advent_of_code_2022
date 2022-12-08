const fs = require("fs");

class Day5 {
	constructor(data) {
		this.data = fs.readFileSync("./input.txt").toString();
		this.crates = {};
		this.instructions = [];
		this.getInstructions();
		this.createEmptyCrates();
		this.fillCrates();
	}

	createEmptyCrates() {
		let cratesNumbers = this.data.substring(this.data.indexOf("1"));
		cratesNumbers = cratesNumbers
			.substring(0, cratesNumbers.indexOf("\n"))
			.trim();
		const length = cratesNumbers[cratesNumbers.length - 1];
		for (let i = 1; i <= length; i++) {
			this.crates[i] = [];
		}
	}

	fillCrates() {
		let count = 0;
		let line = 1;
		let crates = this.data.substring(0, this.data.lastIndexOf("]") + 2);
		for (let i = 0; i < crates.length; i++) {
			if (count === 4) {
				count = 0;
				line++;
			}
			if (line === Number(Object.keys(this.crates).pop()) + 1) {
				line = 1;
			}
			if (crates[i].match(/[A-Z]/)) {
				this.crates[line].push(crates[i]);
			}
			count++;
		}
	}

	getInstructions() {
		let instructionsVehicle = [];
		let moves = this.data
			.substring(this.data.indexOf("move"))
			.split(/[a-z\n]/)
			.filter((item) => item)
			.map((item) => item.trim());
		for (let i = 0; i < moves.length; i++) {
			instructionsVehicle.push(moves[i]);
			if ((i + 1) % 3 === 0) {
				this.instructions.push(instructionsVehicle);
				instructionsVehicle = [];
			}
		}
	}
}

module.exports = Day5;
