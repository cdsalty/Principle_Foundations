const COLORS = [
	"black",
	"brown",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"violet",
	"grey",
	"white"
];

const test = COLORS.indexOf("black"); // note: indexOf will only return the first result
// console.log(test);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// indexOf will return the first match

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// takes the number to begin at and how many positions to remove  .splice(3, 1) --> would remove one element, at index 3
let myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
let removed = myFish.splice(3, 1); // start at 'drum' and remove one element: 'mandarin'
let removed2 = myFish.slice(0, 2); // the starting index value and the index to stop at. (the stopping index position is not included in the new array, only start thru)
// console.log(removed); // ['angel', 'clown', 'drum', 'sturgeon']
// console.log(removed2); // ['angel', 'clown']

const value = arrayOfColors => {
	return arrayOfColors.map(eachColor => COLORS.indexOf(eachColor));
};

console.log(value(["white", "green"]).join(""));

console.log(
	typeof value(["white", "blue", "yellow", "red"])
		.join("")
		.slice(0, 2)
);

// test type conversion from string to number
console.log(
	typeof Number(
		value(["white", "blue", "yellow", "red"])
			.join("")
			.slice(0, 2)
	)
);

console.log(
	Number(
		value(["white", "blue", "yellow", "red"])
			.join("")
			.slice(0, 2)
	)
);

const theNumbers = [4, 8, 15, 16, 23, 42];
// Using 'theNumbers' from above, create a new array of objects with the properties value and the index
const theIndex = theNumbers.map((number, index) => index);
// console.log(theIndex);
const theIndexAndNumber = theNumbers.map((value, index) => {
	return {
		value,
		index
	};
});
// console.log(theIndexAndNumber);

/*
Create a new array with each value multiplied by the next value. 
Since the last value will not have a "next value", the last value should be mulitplied by the first value.
e.g. [2*5, 5*10, 10*2]
*/
const starter = [2, 5, 10];
const mulipleByNext = starter.map((number, index, array) => {
	let nextIndexPosition = index + 1;
	if (index == array.length - 1) {
		// nextIndexPosition = index + 0;	// note to self, this was wrong and the last number was 100; 10 * thatIndexPosition(which is 10)
		nextIndexPosition = 0; // multiple 10 by 2
	}
	// returning the number and mulipling it by the array's index position;
	return number * array[nextIndexPosition];
});
console.log(mulipleByNext);
