const FormattedText = require("./text-format.js");

class Part2 extends FormattedText {
	constructor(data, crates, instructions) {
		super(data, crates, instructions);
	}

	exchangeCrates() {
		for (let i = 0; i < this.instructions.length; i++) {
			const numToExch = this.instructions[i][0];
			const base = this.instructions[i][1];
			const target = this.instructions[i][2];
			this.crates[target].unshift.apply(
				this.crates[target],
				this.crates[base].slice(0, numToExch)
			);
			this.crates[base].splice(0, numToExch);
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

console.log(new Part2().getCratesOnTop());
