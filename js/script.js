const ratingButtons = document.querySelectorAll('form label');

ratingButtons.forEach(btn => {
	btn.onclick = function() {
		ratingButtons.forEach(btn => btn.classList.remove('active'));
		this.classList.add('active');
	}
});

const ratingWidget = document.getElementById('rating')
const thankyouWidget = document.getElementById('thank-you');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const formData = new FormData(form);
	const data = Object.fromEntries(formData);

	if (data.rating !== undefined) {
		ratingWidget.classList.add('d-none');
		thankyouWidget.classList.remove('d-none');
	}

})
