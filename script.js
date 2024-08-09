const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function searchHandler(e) {
	search(input.value); // runs the search function using the input's value
};

function search(str) {
	const strLowerCase = str.toLowerCase();
	let results = [];

	fruit.forEach((f) => {
		if(f.toLowerCase().includes(strLowerCase)){
			results.push(f);
		};
	}); // runs over each value in the fruit array pushes a name into the empty results array if it contains the input's value

	showSuggestions(results, str); // makes the showSuggections parameters the new results array and the input's value
};

function showSuggestions(results, inputVal) {
	const li = document.createElement('li'); // creates a new li
	const fruitMap = results.map((fruit) => {
		if(inputVal !== ''){
			return li.innerHTML = '<li>' + fruit + '</li>'; // makes the innerHTML of a new li a fruit name for every fruit in the results array
		}
	});

	suggestions.innerHTML = fruitMap.join(''); // joins the fruitMap lis made with the suggestions ul to create the dropdown
};

function useSuggestion(e) {
	input.value = e.target.innerText; // makes the input's value the inner text of the target dropdown suggestion
	suggestions.innerHTML = ''; // makes the dropdown HTML nothing
};

input.addEventListener('keyup', searchHandler); // runs searchHandler function everytime a key is released in input
suggestions.addEventListener('click', useSuggestion); // runs useSuggestion everytime something is clicked in suggestions