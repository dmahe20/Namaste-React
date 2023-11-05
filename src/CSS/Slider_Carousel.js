//HTML
<!DOCTYPE html>
<html>

<!-- Slideshow container -->
<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" style="width:100%">
    <div class="text">Caption Text</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" style="width:100%">
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" style="width:100%">
    <div class="text">Caption Three</div>
  </div>

  <!-- Next and previous buttons -->
  <button lass="prev" id='prev' onclick="plusSlides">&#10094;</button>
  <button class="next" id='next' onclick="plusSlides">&#10095;</button>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" id='first' onclick="currentSlide(1)"></span>
  <span class="dot" id='second' onclick="currentSlide(2)"></span>
  <span class="dot" id='third' onclick="currentSlide(3)"></span>
</div>

	<script src="src/index.js">
	</script>
</body>

</html>



//JS
let slideIndex = 0;
showSlides(slideIndex);

document.getElementById("next").onclick = function plusSlides() {
  showSlides((slideIndex += 1));
};

document.getElementById("prev").onclick = function plusSlides() {
  showSlides((slideIndex += -1));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

document.getElementById("first").onclick = function (n) {
  currentSlide(n);
};

document.getElementById("second").onclick = function (n) {
  currentSlide(n);
};

document.getElementById("third").onclick = function (n) {
  currentSlide(n);
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //console.log("slideIndex", slideIndex);
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
