// JavaScript Document
//<div class="container">
  //<img class="mySlides" src="images/scoop.jpg" alt="Scoop" style="width:100%">
  //<img class="mySlides" src="images/lake.jpg" style="width:100%">
  //<button class="btn" onclick="plusDivs(-1)">&#10094;</button>
  //<div id="text">
  //<p>The Hatchery began in the mid-1980's as an outdoor upwelling box located adjacent to Komoka Creek on private property. While it was a simple and rustic affair, the TRAA enjoyed incredible egg hatching and fry survivability rates for several seasons.
//<a href="#">READ MORE</a></p></div>
  //<button class="btn2" onclick="plusDivs(1)">&#10095;</button>
//</div>

//<script>
//var slideIndex = 1;
//showDivs(slideIndex);

//function plusDivs(n) {
  //showDivs(slideIndex += n);
//}

//function showDivs(n) {
  //var i;
  //var x = document.getElementsByClassName("mySlides");
  //if (n > x.length) {slideIndex = 1}
  //if (n < 1) {slideIndex = x.length}
  //for (i = 0; i < x.length; i++) {
   // x[i].style.display = "none";  
  //}
  //x[slideIndex-1].style.display = "block";  
//}
//</script>
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}