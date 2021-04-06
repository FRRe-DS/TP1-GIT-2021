const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	alert(document.getElementById('input').value);
});
