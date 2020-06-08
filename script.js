$(document).ready(function () {

  $('.home-click').click(function () {
    $('.contact-click').css('border-top','none');
    $('.download-click').css('border-top','none');
    $('.testimonial-click').css('border-top','none');
    $('.prices-click').css('border-top','none');
    $('.vidio-click').css('border-top','none');
    $('.features-click').css('border-top','none');
    $('.home-click').css('border-top','3px solid greenyellow');
  });
  $('.features-click').click(function () {
    $('.home-click').css('border-top','none');
    $('.contact-click').css('border-top','none');
    $('.download-click').css('border-top','none');
    $('.testimonial-click').css('border-top','none');
    $('.prices-click').css('border-top','none');
    $('.vidio-click').css('border-top','none');
    $('.features-click').css('border-top','3px solid greenyellow');
  });
  $('.vidio-click').click(function () {
    $('.home-click').css('border-top','none');
    $('.features-click').css('border-top','none');
    $('.contact-click').css('border-top','none');
    $('.download-click').css('border-top','none');
    $('.testimonial-click').css('border-top','none');
    $('.prices-click').css('border-top','none');
    $('.vidio-click').css('border-top','3px solid greenyellow');
  });
  $('.prices-click').click(function () {
    $('.home-click').css('border-top','none');
    $('.features-click').css('border-top','none');
    $('.vidio-click').css('border-top','none');
    $('.contact-click').css('border-top','none');
    $('.download-click').css('border-top','none');
    $('.testimonial-click').css('border-top','none');
    $('.prices-click').css('border-top','3px solid greenyellow');
  });
  $('.testimonial-click').click(function () {
    $('.home-click').css('border-top','none');
    $('.features-click').css('border-top','none');
    $('.vidio-click').css('border-top','none');
    $('.prices-click').css('border-top','none');
    $('.contact-click').css('border-top','none');
    $('.download-click').css('border-top','none');
    $('.testimonial-click').css('border-top','3px solid greenyellow');
  });
  $('.download-click').click(function () {
    $('.home-click').css('border-top','none');
    $('.features-click').css('border-top','none');
    $('.vidio-click').css('border-top','none');
    $('.prices-click').css('border-top','none');
    $('.testimonial-click').css('border-top','none');
    $('.contact-click').css('border-top','none');
    $('.download-click').css('border-top','3px solid greenyellow');
  });
  $('.contact-click').click(function () {
    $('.home-click').css('border-top','none');
    $('.features-click').css('border-top','none');
    $('.vidio-click').css('border-top','none');
    $('.prices-click').css('border-top','none');
    $('.testimonial-click').css('border-top','none');
    $('.download-click').css('border-top','none');
    $('.contact-click').css('border-top','3px solid greenyellow');
  });

  $('.page-scroll').on('click',function(){
    const tujuan = $(this).attr('href');
    $('html,body').animate({
      scrollTop :$(tujuan).offset().top-50
    },300,'easeInOutExpo');
  });
  var map = new GMaps({
    el: '#map',
    lat: 23.535726,
    lng: 90.713344,
    scrollwheel: false
  });
  map.addMarker({
    lat: 23.535726,
    lng: 90.713344,
    title: 'Lima',
    infoWindow: {
      content: '<p>Daudkandi Bazar, Comilla</p>'
    }
  });
});
$(window).on('load',function(){
  $('.jumbotron').addClass('jumbotron-show');
});
//parallax
$(window).scroll(function(){
  const wScroll = $(this).scrollTop();
  console.log(wScroll);
  $('.container-content').css({
    'transform' : 'translate(0px,'+ -wScroll/8+'%)'
  });
  if(wScroll <=200 && wScroll >=0){
    console.log('ok');
    $('.features-content.kanan').removeClass('show');
    $('.features-content.kiri').removeClass('show');
  }
  if(wScroll <=1000 && wScroll >=600){
    console.log('ok');
    $('.features-content.kanan').removeClass('show');
    $('.features-content.kiri').removeClass('show');
    $('.show-gallery .gallery img').removeClass('muncul');
    $('.vidio').removeClass('vidio-show');
    $('.cardAll').removeClass('card-show');
  }
  //Show Gallery
  if(wScroll>$('.section-features-content').offset().top-200){
    
     $('.features-content.kanan').addClass('show');
     $('.features-content.kiri').addClass('show');
     
  };
  if(wScroll>$('.section-features-content').offset().top+400){
    
    $('.features-content.kanan').removeClass('show');
    $('.features-content.kiri').removeClass('show');
    
 };

  if(wScroll>$('.show-gallery').offset().top-200){
    $('.show-gallery .gallery').each(function(i){
      setTimeout(function(){
         $('.show-gallery .gallery img').eq(i).addClass('muncul');
      },100 * i + 1); //muncul satu satu
    });
  }
  if(wScroll>$('.show-gallery').offset().top+300){
    $('.show-gallery .gallery').each(function(i){
      setTimeout(function(){
         $('.show-gallery .gallery img').eq(i).removeClass('muncul');
      },100 * i+1); //muncul satu satu
    });
  }


  if(wScroll>$('.vidio').offset().top-400){
    $('.vidio').addClass('vidio-show');
  }
  if(wScroll>$('.vidio').offset().top+600){
    console.log('ok');
    $('.vidio').removeClass('vidio-show');
  }


  if(wScroll>$('.price-catagory').offset().top-200){
    $('.cardAll').each(function (i){
      setTimeout(function () {
         $('.cardAll').eq(i).addClass('card-show');
      },200 * i +1);
    });
  }
  if(wScroll>$('.price-catagory').offset().top+400){
    $('.cardAll').each(function (i){
      setTimeout(function () {
         $('.cardAll').eq(i).removeClass('card-show');
      },200 * i +1);
    });
  }
});