const exampleFile = "./example.txt";
const dataFile = "./data.txt";

function dataImport(source) {
	let arr = fetch(source)
		.then((res) => res.text())
		.then((text) => text.split(/\r?\n/gm));
	return arr;
}

function getNumbers(text) {
	const values = text.map((value) => {
		let valueFirst = value.split("").find((v) => Number(v));
		let valueLast = value.split("").findLast((v) => Number(v));
		return Number(valueFirst + valueLast);
	});
	return console.log(values.reduce((a, b) => a + b));
}

const partOne = async (source) => {
	const text = await dataImport(source);
	getNumbers(text);
};

partOne(exampleFile); //142
partOne(dataFile); //54634
