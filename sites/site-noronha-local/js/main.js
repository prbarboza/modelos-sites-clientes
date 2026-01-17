AOS.init({
  duration: 800,
  easing: 'slide'
});

(function ($) {

  "use strict";

  /* ===========================
     MOBILE DETECT
  ============================ */
  var isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () {
      return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
    }
  };

  /* ===========================
     PARALLAX
  ============================ */
  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

  /* ===========================
     FULL HEIGHT (HERO)
  ============================ */
  var fullHeight = function () {

  function setHeight() {
    if (window.innerWidth > 768) {
      $('.js-fullheight').css('height', $(window).height());
    } else {
      $('.js-fullheight').css('height', 'auto');
    }
  }

  setHeight();

  $(window).on('resize', function () {
    setHeight();
  });

};

fullHeight();


  /* ===========================
     LOADER
  ============================ */
  var loader = function () {
    setTimeout(function () {
      if ($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  /* ===========================
     SCROLLAX
  ============================ */
  $.Scrollax();

  /* ===========================
     CAROUSELS
  ============================ */
  var carousel = function () {

    $('.destination-slider').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      smartSpeed: 600,
      navText: [
        '<span class="ion-ios-arrow-back"></span>',
        '<span class="ion-ios-arrow-forward"></span>'
      ],
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 }
      }
    });

    $('.carousel-testimony').owlCarousel({
      autoplay: true,
      loop: true,
      items: 1,
      nav: true,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">']
    });

    $('.single-slider').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      loop: true,
      items: 1,
      nav: true,
      dots: true,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">']
    });

  };
  carousel();

  /* ===========================
     DROPDOWN HOVER
  ============================ */
  $('nav .dropdown').hover(
    function () {
      $(this).addClass('show');
      $(this).find('> a').attr('aria-expanded', true);
      $(this).find('.dropdown-menu').addClass('show');
    },
    function () {
      $(this).removeClass('show');
      $(this).find('> a').attr('aria-expanded', false);
      $(this).find('.dropdown-menu').removeClass('show');
    }
  );

  /* ===========================
     NAVBAR SCROLL
  ============================ */
  var scrollWindow = function () {
    var navbar = $('.ftco_navbar'),
        sd = $('.js-scroll-wrap'),
        st = $(window).scrollTop();

    if (st > 150) navbar.addClass('scrolled');
    if (st > 350) {
      navbar.addClass('awake');
      if (sd.length > 0) sd.addClass('sleep');
    }

    $(window).on('scroll', function () {
      var st = $(this).scrollTop();
      if (st > 150) {
        navbar.addClass('scrolled');
      } else {
        navbar.removeClass('scrolled sleep');
      }
      if (st > 350) {
        navbar.addClass('awake');
        if (sd.length > 0) sd.addClass('sleep');
      } else {
        navbar.removeClass('awake').addClass('sleep');
        if (sd.length > 0) sd.removeClass('sleep');
      }
    });
  };
  scrollWindow();

  /* ===========================
     COUNTER
  ============================ */
  var counter = function () {
    $('#section-counter').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        $('.number').each(function () {
          var $this = $(this),
              num = $this.data('number');
          $this.animateNumber({ number: num }, 7000);
        });
      }
    }, { offset: '95%' });
  };
  counter();

  /* ===========================
     CONTENT ANIMATION
  ============================ */
  var contentWayPoint = function () {
    $('.ftco-animate').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        $(this.element).addClass('fadeInUp ftco-animated');
      }
    }, { offset: '95%' });
  };
  contentWayPoint();

  /* ===========================
     ONE PAGE NAV
  ============================ */
  $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({ scrollTop: $(hash).offset().top }, 700);
  });

  /* ===========================
     POPUPS
  ============================ */
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: { enabled: true },
    zoom: { enabled: true, duration: 300 }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  /* ===========================
     DATE PICKER
  ============================ */
  $('#checkin_date, #checkout_date').datepicker({
    format: 'm/d/yyyy',
    autoclose: true
  });

  /* ===========================
     BOAT SLIDER
  ============================ */
 /* ===========================
   BOAT SLIDER
=========================== */
var boatSlider = $('.boat-slider').owlCarousel({
  items: 1,              // mostra 1 barco por vez (troque para 3 se quiser ver 3 juntos)
  loop: false,
  autoplay: false,
  dots: false,
  nav: false,
  smartSpeed: 500
});

// Conta total de barcos
var totalBoats = $('.boat-slider .boat-card').length;

// Atualiza os dois contadores
function updateBoatCounter(index) {
  var current = index + 1;
  $('#boat-counter').text('Barco ' + current + ' de ' + totalBoats);
  $('#boat-counter-bottom').text('Barco ' + current + ' de ' + totalBoats);
}

// Inicializa contador
boatSlider.on('initialized.owl.carousel', function(e) {
  updateBoatCounter(e.item.index);
});

// Atualiza contador sempre que mudar slide
boatSlider.on('changed.owl.carousel', function(e) {
  updateBoatCounter(e.item.index);
});

// Botões (topo e baixo)
$('.boat-prev').off('click').on('click', function() {
  boatSlider.trigger('prev.owl.carousel');
});
$('.boat-next').off('click').on('click', function() {
  boatSlider.trigger('next.owl.carousel');
});


  // Atualiza contador ao mudar slide
  boatSlider.on('changed.owl.carousel', function (e) {
    updateBoatCounter(e.item.index);
  });

})(jQuery);
