const fs = require("fs");
let data = fs.readFileSync("./input.txt").toString();

function findMarker14Char(data) {
	data = data.split("");
	for (let i = 0; i < data.length - 14; i++) {
		const fourMostRecent = new Set(data.slice(i, i + 14));
		if (fourMostRecent.size === 14) {
			return i + 14;
		}
	}
}

console.log(findMarker14Char(data));
