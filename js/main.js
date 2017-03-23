// Make it rain!

  $("#slider > div:gt(0)").hide();
    $("#slider").height($("#slider > div > img").height());
    setInterval(function () {
        $('#slider > div:first')
          .fadeOut(0)
          .next()
          .fadeIn(0)
          .end()
          .appendTo('#slider');
    }, 4000);


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