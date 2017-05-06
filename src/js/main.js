var	slider      = document.querySelector('.images'),
	  left_arrow  = document.querySelector('.left-arrow > img'),
		right_arrow = document.querySelector('.right-arrow > img')

left_arrow.addEventListener('click', function(e) {
	console.log(slider.style.backgroundImage);
	slider.style.backgroundImage = "url('../src/img/other-product-4.jpg')"
})

right_arrow.addEventListener('click', function(e) {
	console.log('right');
})