// Destructuring

const person = {
	firstName: "Christopher",
	lastName: "Soltis",
	age: 39,
	car: {
		type: "Chevy",
		year: 2015,
		wheels: 4,
		color: "brown"
	}
};

const {
	firstName,
	lastName,
	age,
	car: {type, year, wheels, color}
} = person;

// console.log each property in the person object and in the car object belonging to the person
console.log(`First Name is: ${firstName}`);
console.log(`Last Name is: ${lastName}`);
console.log(`Age is: ${age}`);
console.log(`Car type is: ${type}`);
console.log(`Car year is: ${year}`);
console.log(`Car wheels is: ${wheels}`);
console.log(`Car color is: ${color}`);

// const {name, year} = props;

// app.get("/", (req, res, next) => {
// 	const {userName, fullName, age} = req.body;

// 	User.create({userName, fullName, age});
// });

// const [state, setState] = useState("");

const animals = ["Dogs", "Cats", "Llamas", "Tigers", "Bear"];
// const person = { name: "Adrian" }
const [firstAnimal] = animals;
// const { name } = person;

console.log(`The first animal is: ${firstAnimal}`);
console.log(`The second animal is: ${secondAnimal}`);
console.log(`The third animal is: ${thirdAnimal}`);
console.log(`The fourth animal is: ${animals[3]}`);
console.log(`The fith animal is: ${animals[4]}`);

// DRY

// JavaScript 6/7
// React 6/7
// Node/express 6/7
// MongoDB/SQL 4/5

// React => Backend => Fullstack

// - build basic MERN App

// - getting data back, specifically with async/await
// - updateing state using spread [ ...state, contact: ]

// https://javascript.info/destructuring-assignment

// do exercises at bottom...

// talk about array destructing when talking about usestate hook.
// talk about renaming variables in destructing...
