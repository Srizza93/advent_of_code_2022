const fs = require("fs");
const data = fs.readFileSync("./input.txt").toString();

class Day5 {
	constructor(data) {
		this.data = data;
		this.crates = {
			1: [],
			2: [],
			3: [],
			4: [],
			5: [],
			6: [],
			7: [],
			8: [],
			9: [],
		};
		this.instructions = [];
		this.getInstructions();
		this.fillCrates();
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
			if (line === 10) {
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

	exchangeCrates() {
		for (let i = 0; i < this.instructions.length; i++) {
			const numToExch = this.instructions[i][0];
			const base = this.instructions[i][1];
			const target = this.instructions[i][2];
			for (let j = 0; j < numToExch; j++) {
				this.crates[target].unshift(this.crates[base][0]);
				this.crates[base].shift();
			}
		}
	}

	getCratesOnTop() {
		this.exchangeCrates();
		let solution = "";
		for (const prop in this.crates) {
			solution += this.crates[prop][0];
		}

		return solution;
	}
}

const Part1Class = new Day5(data);
console.log(Part1Class.getCratesOnTop());

module.exports = Part1Class;
