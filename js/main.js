// Make it rain!



// Smooth scroll this mother!

// Do it when someone clicks a nav link
$('.navlinks a').on('click', function(e) {
  
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top -200;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
  $('a.reload').click(function() {
    window.location.reload();
  })
  
});



  $("#slider > div:gt(0)").hide();
    $("#slider").height($("#slider > div > img").height());
    setInterval(function () {
        $('#slider > div:first')
          .fadeOut(0)
          .next()
          .fadeIn(0)
          .end()
          .appendTo('#slider');
    }, 3000);


$(window).on('scroll', function () {

  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);

 
if(distanceScrolled >= 480) {
    $('.nav').css('opacity', '100');
  }
  });

$('.hamburger').on('click', function (event) {
  event.preventDefault();
  $('.navlinks').slideToggle();
});

// STATEMENT LINKS

$('.statementlink').click(function() {
    $('.statement').slideToggle('fast');
    return false;
});
$('.statementlink2').click(function() {
    $('.statement2').slideToggle('fast');
    return false;
});

// MODAL GALLERIES

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function openModal2() {
  document.getElementById('myModal2').style.display = "block";
}

function closeModal2() {
  document.getElementById('myModal2').style.display = "none";
}

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  var caption2Text = document.getElementById("caption2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
  caption2Text.innerHTML = dots[slideIndex2-1].alt;
}

function openModal3() {
  document.getElementById('myModal3').style.display = "block";
}

function closeModal3() {
  document.getElementById('myModal3').style.display = "none";
}

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("demo3");
  var caption3Text = document.getElementById("caption3");
  if (n > slides.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " active";
  caption3Text.innerHTML = dots[slideIndex3-1].alt;
}