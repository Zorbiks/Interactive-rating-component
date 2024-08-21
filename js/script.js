const ratingButtons = document.querySelectorAll('form label');

ratingButtons.forEach(btn => {
	btn.onclick = function() {
		ratingButtons.forEach(btn => btn.classList.remove('active'));
		this.classList.add('active');
	}
});

