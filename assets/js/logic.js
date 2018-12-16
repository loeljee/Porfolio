// $(document).ready(function(){
//     // Activate Carousel
//     $("#myCarousel").carousel();
    
//     // Enable Carousel Indicators
//     $(".item1").click(function(){
//         $("#myCarousel").carousel(0);
//     });
//     $(".item2").click(function(){
//         $("#myCarousel").carousel(1);
//     });
//     $(".item3").click(function(){
//         $("#myCarousel").carousel(2);
//     });
    
//     // Enable Carousel Controls
//     $(".carousel-control-prev").click(function(){
//         $("#myCarousel").carousel("prev");
//     });
//     $(".carousel-control-next").click(function(){
//         $("#myCarousel").carousel("next");
//     });
// });

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }

// $(".nav .nav-link").on("click", function(){
//     $(".nav").find(".active").removeClass("active");
//     $(this).addClass("active");
//  });


$( document ).on( 'click', '.nav-list li', function ( e ) {
    $( this ).addClass( 'active' ).siblings().removeClass( 'active' );
} );

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

//   // Or with jQuery

//   $(document).ready(function(){
//     $('.carousel').carousel();
//   });
      