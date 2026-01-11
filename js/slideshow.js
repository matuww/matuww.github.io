// Initialize all slideshows on page load
document.querySelectorAll('.slideshow-container').forEach(initSlideshow);

function initSlideshow(container) {
  container.dataset.index = 1;
  showSlides(container, 1);
}

// Next/previous controls
function plusSlides(el, n) {
  const container = el.closest('.slideshow-container');
  let index = Number(container.dataset.index);
  showSlides(container, index + n);
}

// Dot controls
function currentSlide(el, n) {
  const container = el.closest('.slideshow-container');
  showSlides(container, n);
}

function showSlides(container, n) {
  const slides = container.getElementsByClassName("mySlides");
  const dots = container.getElementsByClassName("dot");
  let index = n;

  if (index > slides.length) index = 1;
  if (index < 1) index = slides.length;

  container.dataset.index = index;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active";
}



let slideIndex = 1; showSlides(slideIndex); // Next/previous controls function plusSlides(n) { showSlides(slideIndex += n); } // Thumbnail image controls function currentSlide(n) { showSlides(slideIndex = n); } function showSlides(n) { let i; let slides = document.getElementsByClassName("mySlides"); let dots = document.getElementsByClassName("dot"); if (n > slides.length) {slideIndex = 1} if (n < 1) {slideIndex = slides.length} for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; } for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", ""); } slides[slideIndex-1].style.display = "block"; dots[slideIndex-1].className += " active"; }
