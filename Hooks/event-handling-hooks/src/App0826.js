import React, { useState, useEffect } from "react";

const App = () => {
	const [count, setCount] = useState(0)

	// happens only after the initial render
	useEffect(() => {

	}, []);

	// happens after the initial render + every time that any of the variables in the dependency array change (in this case, when the count changes)
	useEffect(() => {
		// didMount, didUpdate

		return () => {
			// willUnmount
		}
	}, [count]);

	return (
		<div>
			{ console.log('RENDER') }
			<button onClick={ () => setCount(count - 1) }>Decrement</button>
			<h1>{ count }</h1>
			<button onClick={ () => setCount(count + 1) }>Increment</button>
		</div>
	);
}

export default App;

