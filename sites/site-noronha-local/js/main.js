(function ($) {

  "use strict";

  /* ===========================
     AOS (seguro)
  ============================ */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'slide'
    });
  }

  /* ===========================
     FULL HEIGHT (HERO)
  ============================ */
  function fullHeight() {
    function setHeight() {
      if (window.innerWidth > 768) {
        $('.js-fullheight').css('height', $(window).height());
      } else {
        $('.js-fullheight').css('height', 'auto');
      }
    }
    setHeight();
    $(window).on('resize', setHeight);
  }
  fullHeight();

  /* ===========================
     LOADER (CRÍTICO)
  ============================ */
  function removeLoader() {
    if ($('#ftco-loader').length > 0) {
      $('#ftco-loader').removeClass('show').fadeOut('slow', function () {
        $(this).remove();
      });
    }
  }
  $(window).on('load', removeLoader);

  /* ===========================
     STELLAR (seguro)
  ============================ */
  if ($.fn.stellar) {
    $(window).stellar({
      responsive: true,
      horizontalScrolling: false,
      parallaxBackgrounds: true
    });
  }

  /* ===========================
     SCROLLAX (seguro)
  ============================ */
  if ($.Scrollax) {
    $.Scrollax();
  }

  /* ===========================
     CAROUSELS (OWL)
  ============================ */
  function initCarousels() {

    if ($.fn.owlCarousel) {

      $('.destination-slider').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        smartSpeed: 600,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
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
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        navText: [
          '<span class="ion-ios-arrow-back">',
          '<span class="ion-ios-arrow-forward">'
        ]
      });

      $('.single-slider').owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        nav: true,
        dots: true
      });

      var boatSlider = $('.boat-slider').owlCarousel({
        items: 1,
        loop: false,
        autoplay: false,
        dots: false,
        nav: false,
        smartSpeed: 500,
        mouseDrag: true,
        touchDrag: true
      });

      var totalBoats = $('.boat-slider .boat-card').length;

      function updateBoatCounter(index) {
        var current = index + 1;
        $('#boat-counter, #boat-counter-bottom')
          .text('Barco ' + current + ' de ' + totalBoats);
      }

      boatSlider.on('initialized.owl.carousel changed.owl.carousel', function (e) {
        updateBoatCounter(e.item.index);
      });

      $('.boat-prev').on('click', function () {
        boatSlider.trigger('prev.owl.carousel');
      });

      $('.boat-next').on('click', function () {
        boatSlider.trigger('next.owl.carousel');
      });

    }
  }
  initCarousels();

 /* ===========================
   ONE PAGE SCROLL (âncoras) – SIMPLES
=========================== */
$("#ftco-nav a[href^='#']").on('click', function (e) {
  var target = $(this.hash);

  if (target.length) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 700);
  }
});

/* ===========================
   BOTÃO VOLTAR AO TOPO
=========================== */
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 300) {
    $('#backToTop').fadeIn();
  } else {
    $('#backToTop').fadeOut();
  }
});

$('#backToTop').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 600);
});
  

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


})(jQuery);
