
window.addEventListener('scroll', function() {
  var scrollHeight = window.pageYOffset;
  var scrollToTopButton = document.querySelector('.scroll-to-top');
  
  if (scrollHeight > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}

document.addEventListener('DOMContentLoaded', function () {
	const root = document.documentElement,
		toggle = document.querySelector('#toggle'),
		menu = document.querySelector('menu');
	root.classList.add('js');
	toggle.addEventListener('click', function () {
		if (menu.classList.contains('is-active')) {
			this.setAttribute('aria-expanded', 'false');
			menu.classList.remove('is-active');
		} else {
			menu.classList.add('is-active');
			this.setAttribute('aria-expanded', 'true');
		}
	});
});



