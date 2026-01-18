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
     HOME SIM / PASSEIOS NÃO
     DESKTOP APENAS
  ============================ */
  function fullHeight() {
    function setHeight() {

      if (window.innerWidth <= 768) return;

      $('.js-fullheight').each(function () {

        // ignora banner de passeios
        if ($(this).hasClass('hero-passeios') || $(this).find('.hero-passeios').length) {
          return;
        }

        $(this).css('height', $(window).height());
      });
    }

    setHeight();
    $(window).on('resize', setHeight);
  }
  fullHeight();

  /* ===========================
     LOADER
  ============================ */
  $(window).on('load', function () {
    var loader = $('#ftco-loader');
    if (loader.length) {
      loader.removeClass('show').fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  /* ===========================
     STELLAR (opcional / seguro)
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
     OWL CAROUSELS
  ============================ */
  function initCarousels() {

    if (!$.fn.owlCarousel) return;

    /* Destinos */
    $('.destination-slider').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  smartSpeed: 600,

  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,

  navText: [
    '<span class="ion-ios-arrow-back"></span>',
    '<span class="ion-ios-arrow-forward"></span>'
  ],

  responsive: {
    0: {
      items: 1,
      autoplay: false,
      dots: false
    },
    576: {
      items: 2,
      autoplay: false,
      dots: false
    },
    992: {
      items: 3,
      autoplay: true,
      dots: true
    },
    1200: {
      items: 4,
      autoplay: true,
      dots: true
    }
  }
});


    /* ===========================
       BOAT SLIDER (CORRIGIDO)
       SEM autoHeight
       SEM touch-action
    ============================ */
    var boatSlider = $('.boat-slider').owlCarousel({
      items: 1,
      loop: false,
      autoplay: false,
      dots: false,
      nav: false,
      smartSpeed: 500,
      autoHeight: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true
    });

    var totalBoats = $('.boat-slider .boat-card').length;

    function updateBoatCounter(index) {
      $('#boat-counter, #boat-counter-bottom')
        .text('Barco ' + (index + 1) + ' de ' + totalBoats);
    }

    boatSlider.on('initialized.owl.carousel changed.owl.carousel', function (e) {
      if (e.item) {
        updateBoatCounter(e.item.index);
      }
    });

    $('.boat-prev').on('click', function () {
      boatSlider.trigger('prev.owl.carousel');
    });

    $('.boat-next').on('click', function () {
      boatSlider.trigger('next.owl.carousel');
    });

  }
  initCarousels();

  /* ===========================
     ONE PAGE SCROLL (âncoras)
  ============================ */
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
  ============================ */
  $(function () {

    var $btn = $('#backToTop');
    if (!$btn.length) return;

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 300) {
        $btn.fadeIn();
      } else {
        $btn.fadeOut();
      }
    });

    $btn.on('click', function () {
      $('html, body').stop().animate({ scrollTop: 0 }, 600);
    });

  });

})(jQuery);
