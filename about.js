console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted sucessfully');
}

function giveComplement(evt) {
	evt.preventDefault();

	alert('You are smart.');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img');

image.addEventListener('mouseover', giveComplement);
