// import axios from "axios";
const axios = require("axios");

const FIXER_API_KEY = "a8430199fe48e4147ccb420fe9376a8e"; // https://www.oanda.com/foreign-exchange-data-services/en/exchange-rates-api/
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`; // fixer.io
const REST_COUNTRIES_API = `https://restcountries.eu/rest/v2/currency`; // http://restcountries.eu/

// Create a function, "getExchangeRate", to convert currency from & exchange rate
const getExchangeRate = async (fromCurrency, toCurrency) => {
	// const response = await axios.get(FIXER_API); ---> destructured out data
	const {data} = await axios.get(FIXER_API);
	// console.log(data.rates);
	const eruo = 1 / data.rates[fromCurrency]; //?
	const exchangeRate = eruo * data.rates[toCurrency];

	return exchangeRate; // will need a ".then"?
};
// console.log(getExchangeRate("USD", "EUR"));// WILL RETURN A PROMISE //?

// Fetch Data about countries (example: which countries can a currency be used in?)
const getCountries = async currencyCode => {
	const {data} = await axios.get(`${REST_COUNTRIES_API}/${currencyCode}`); // will return array of countries but only need the name from the array
	return data.map(country => {
		country.name;
	});
	// console.log(data)
};

// console.log(getCountries("AUD"));

// Gather data and convert currency
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
	// take the input, fromCurrency and call the toUppercase method. The api must have capital letters
	fromCurrency = fromCurrency.toUpperCase();
	toCurrency = toCurrency.toUpperCase();

	// Implementing PROMISE.ALL - see destructured example in notes (const values = await Promise.all--- I pulled out exchangRate and countries from values)
	const [exchangeRate, countries] = await Promise.all([
		// now we can pull the values at the same time instead of waiting for each function to run.
		await getExchangeRate(fromCurrency, toCurrency),
		await getCountries(toCurrency)
	]);
	console.log(countries);
	const convertedAmount = (amount * exchangeRate).toFixed(2);

	return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following: ${countries}`;
	// console.log(countries);
	// console.log(exchangeRate);
};

convertCurrency("USD", "HRK", 20)
	.then(result => console.log(result))
	.catch(error => console.log(error));
/*
data.map((country) => country.name)
destructured: 
data.map(({name}) => name)
*/
