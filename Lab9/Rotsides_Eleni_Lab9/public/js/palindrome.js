function isPalindrome(input) {
	if (!input) throw 'Please provide an input';
	if (!input.trim()) {
		return false;
	}
	const regexp = /[\W_]/g;
	const lowerCase = input.toLowerCase().replace(regexp, '');
	const reverse = lowerCase.split('').reverse().join('');

	return reverse === lowerCase;
}

let myForm = document.getElementById('myForm');
let input = document.getElementById('input');
let errorDiv = document.getElementById('error');
let attempts = document.getElementById('attempts');
let yourInputs = document.getElementById('ulP');

yourInputs.hidden = true;

if (myForm) {
	myForm.addEventListener('submit', (event) => {
		event.preventDefault();

		if (!input.value.trim()) {
			errorDiv.hidden = false;
			yourInputs.hidden = true;
			errorDiv.innerHTML = 'Please enter a word or phrase to test!';
			myForm.reset();
			input.focus();
		} else if (isPalindrome(input.value)) {
			errorDiv.hidden = true;
			yourInputs.hidden = false;
			let li = document.createElement('li');
			li.className = 'is-palindrome';
			li.innerHTML = input.value;
			attempts.appendChild(li);
			myForm.reset();
			input.focus();
		} else if (!isPalindrome(input.value)) {
			errorDiv.hidden = true;
			yourInputs.hidden = false;
			let li = document.createElement('li');
			li.className = 'not-palindrome';
			li.innerHTML = input.value;
			attempts.appendChild(li);
			myForm.reset();
			input.focus();
		} else {
			errorDiv.hidden = false;
			errorDiv.innerHTML = 'Please enter a word or phrase to test!';
			input.focus();
		}
	});
}
