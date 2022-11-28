let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
$( "#prev" ).on( "click", function( event ) {
  plusSlides(1);
});
// Thumbna
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

   dots[slideIndex-1].className += " active";
  for (i = 0; i < 4; i++) {
    if(slideIndex<=slides.length)
  slides[slideIndex-1].style.display = "block";

else{
  slides[slideIndex-16-1].style.display = "block";
}
  slideIndex+=1;
  }
  slideIndex-=4;
}
