import fs from "fs";

const textToNumber = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};

const numberWordsRegExp = /one|two|three|four|five|six|seven|eight|nine/dg;

function taskTwo(fileAdress) {
	const arrayData = fs.readFileSync(fileAdress, "utf-8").split(/\r?\n/gm);
	const arrayDataCovertedToNumbers = arrayData.map((arrayItem) => {
		let isMach = numberWordsRegExp.test(arrayItem);
		if (isMach) {
			let wordNumbers = arrayItem.match(numberWordsRegExp);
			const arrayDataCovertedToNumbersNew = arrayItem
				.replace(wordNumbers[0], textToNumber[wordNumbers[0]])
				.replace(
					wordNumbers[wordNumbers.length - 1],
					textToNumber[wordNumbers[wordNumbers.length - 1]]
				);
			return arrayDataCovertedToNumbersNew;
		}
		return arrayItem;
	});
	const sumNumbersInArray = arrayDataCovertedToNumbers.map((item) => {
		let firstNumber = item.split("").find((value) => Number(value));
		let lastNumber = item.split("").findLast((value) => Number(value));
		return Number(firstNumber + lastNumber);
	});

	// return sumNumbersInArray.reduce((a, b) => a + b);
	return arrayDataCovertedToNumbers;
}

// console.log(taskTwo("./example.txt")); //281
console.log(taskTwo("./data.txt")); //53843
