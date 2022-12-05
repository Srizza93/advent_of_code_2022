const fs = require("fs");
const data = fs.readFileSync("./input.txt").toString();

function findElvesWithoutWork(data) {
	data = data.split("\n");
	let count = 0;

	for (let i = 0; i < data.length; i++) {
		const pair1 = data[i].substring(0, data[i].indexOf(",")).split("-");
		const pair2 = data[i].substring(data[i].indexOf(",") + 1).split("-");
		pair1[0] = Number(pair1[0]);
		pair1[1] = Number(pair1[1]);
		pair2[0] = Number(pair2[0]);
		pair2[1] = Number(pair2[1]);

		if (pair1[0] >= pair2[0] && pair1[1] <= pair2[1]) {
			count++;
		} else if (pair2[0] >= pair1[0] && pair2[1] <= pair1[1]) {
			count++;
		}
	}
	return count;
}

console.log(findElvesWithoutWork(data));
