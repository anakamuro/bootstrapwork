$(document).ready(function(){
    $('#mycarousel').carousel({ interval: 2000});
    $('#carouselButton').click(function(){
      if($('$caroueslButton').children('span').hasClass('fa-pause')){
        $('#mycarousel').carousel('pause');
        $('$caroueslButton').children('span').removeClass('fa-pause')
        $('$caroueslButton').children('span').addClass('fa-play')
      }
     else if($('$caroueslButton').children('span').hasClass('fa-play')){
        $('#mycarousel').carousel('cycle');
        $('$caroueslButton').children('span').removeClass('fa-play')
        $('$caroueslButton').children('span').addClass('fa-pause')
      }
     });
    $('#loginButton').click(function(){
      $('#loginModal').modal('show');
    });
    $('#reserveButton').click(function(){
      $('#reserveModal').modal('show');
    });
  })