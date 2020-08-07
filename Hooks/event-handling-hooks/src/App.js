import React, {useState} from "react";

import "./App.css";

const App = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className='container'>
			<h1>useState Hook Practice</h1>
			<input
				type='text'
				placeholder='Enter Username'
				// value='' // Started out with empty value;
				value={username} // the value of username will not appear in the input instead of in the console.
				onChange={e => {
					console.log(e);
					console.log(e.target);
					console.log(e.target.value);
					setUsername(e.target.value); // UPDATING the state with the event.target.value from the user
				}}
			/>
			<input
				// type='password'
				type={showPassword ? "password" : "text"}
				placeholder='Enter Password'
				value={password} // the value of password will not appear in the input instead of in the console.
				onChange={e => {
					// console.log(e);
					// console.log(e.target);
					console.log(e.target.value);
					setPassword(e.target.value);
				}}
			/>
			<h3>{username}</h3>
			<h2>{showPassword ? password : "*".repeat(password.length)}</h2>
			{/* if you set it to false, it will only be able to be set to false */}
			{/* <button onClick={e => setShowPassword(false)}>Show/Hide Password</button> */}
			<button onClick={e => setShowPassword(!showPassword)}>Show/Hide Password</button>
		</div>
	);
};

// it is recommendmended to do: onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
// where is prevShowPassword coming from? how does it know to reference the prev value of ShowPassword??

export default App;
