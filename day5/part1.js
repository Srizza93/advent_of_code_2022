const FormattedText = require("./text-format.js");

class Part1 extends FormattedText {
	constructor(data, crates, instructions) {
		super(data, crates, instructions);
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

console.log(new Part1().getCratesOnTop());
