var	url          = window.location.href,
		count        = 0,
		slider       = document.querySelector('.images'),
		products_background = document.querySelector('.products'),
	  left_arrow   = document.querySelector('.left-arrow > img'),
		right_arrow  = document.querySelector('.right-arrow > img')
		

// Load img based on url	
var current_page = url.substring(48, url.length-5)

if(current_page == 'other-products')
{
	products_background.style.backgroundImage = "url('../src/img/other/other-products.jpg')"
	var products_img = [
											"url('../src/img/other/other-product-1.jpg')", 
											"url('../src/img/other/other-product-2.jpg')", 
											"url('../src/img/other/other-product-3.jpg')", 
											"url('../src/img/other/other-product-4.jpg')"
										 ]
}
else if(current_page == 'smoke-extraction')
{
	products_background.style.backgroundImage = "url('../src/img/smoke-extraction/smoke-extraction.jpg')"
	var products_img = [
											"url('../src/img/smoke-extraction/smoke-extraction-1.jpg')", 
											"url('../src/img/smoke-extraction/smoke-extraction-2.jpg')", 
											"url('../src/img/smoke-extraction/smoke-extraction-3.jpg')", 
											"url('../src/img/smoke-extraction/smoke-extraction-4.jpg')",
											"url('../src/img/smoke-extraction/smoke-extraction-5.jpg')"
										 ]
}
else if(current_page == 'extinguisher')
{	
	products_background.style.backgroundImage = "url('../src/img/extinguisher/extinguisher.jpg')"
	var products_img = [
											"url('../src/img/extinguisher/extinguisher-1.jpg')", 
											"url('../src/img/extinguisher/extinguisher-2.jpg')", 
											"url('../src/img/extinguisher/extinguisher-3.jpg')", 
											"url('../src/img/extinguisher/extinguisher-4.jpg')",
											"url('../src/img/extinguisher/extinguisher-5.jpg')"
										 ]
}

// Slider
slider.style.backgroundImage = products_img[count]

left_arrow.addEventListener('click', function(e) {
	if(count != 0)
	{
		count--
		slider.style.backgroundImage = products_img[count]
	}
	else
	{
		count = products_img.length - 1
		slider.style.backgroundImage = products_img[count]
	}
})

right_arrow.addEventListener('click', function(e) {
	if(count != products_img.length - 1)
	{
		count++
		slider.style.backgroundImage = products_img[count]
	}
	else
	{
		count = 0
		slider.style.backgroundImage = products_img[count]
	}
})