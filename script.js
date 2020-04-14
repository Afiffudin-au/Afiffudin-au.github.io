jQuery(document).ready(function ($) {

 

  /*---------------------------------------------*
   * Mobile menu
   ---------------------------------------------*/
  

  /*---------------------------------------------*
   * Scroll Total Navbar
   ---------------------------------------------*/

  

  /*---------------------------------------------*
   * Google Map Area
   ---------------------------------------------*/

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

	/*---------------------------------------------*
     * Gallery Pop Up Animation
     ---------------------------------------------*/



  /*---------------------------------------------*
   * Youtube Media
   ---------------------------------------------*/
  
  /*---------------------------------------------*
   * Scroll Up
   ---------------------------------------------*/
 

  //    $('.statistic-counter').counterUp({
  //        delay: 10,
  //        time: 2000
  //    });




  /*---------------------------------------------*
   * WOW
   ---------------------------------------------*/

  //        var wow = new WOW({
  //            mobile: false // trigger animations on mobile devices (default is true)
  //        });
  //        wow.init();


  /* ---------------------------------------------------------------------
   Carousel
   ---------------------------------------------------------------------= */

  //    $('.testimonials').owlCarousel({
  //        responsiveClass: true,
  //        autoplay: false,
  //        items: 1,
  //        loop: true,
  //        dots: true,
  //        autoplayHoverPause: true
  //
  //    });


  //End
});