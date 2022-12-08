const fs = require("fs");
let data = fs.readFileSync("./input.txt").toString();

function findMarker4Char(data) {
	data = data.split("");
	for (let i = 0; i < data.length - 4; i++) {
		const fourMostRecent = new Set(data.slice(i, i + 4));
		if (fourMostRecent.size === 4) {
			return i + 4;
		}
	}
}

console.log(findMarker4Char(data));
