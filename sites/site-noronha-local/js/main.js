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
   FULL HEIGHT (HERO) – FINAL
   HOME SIM / PASSEIOS NÃO
=========================== */
function fullHeight() {
  function setHeight() {

    if (window.innerWidth <= 768) return;

    $('.js-fullheight').each(function () {

      // IGNORA QUALQUER HERO QUE TENHA .hero-passeios DENTRO OU NELE
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
   BOTÃO VOLTAR AO TOPO – SIMPLES
=========================== */
$(function () {

  var $btn = $('#backToTop');

  if (!$btn.length) {
    console.warn('Botão #backToTop não encontrado');
    return;
  }

  // Mostrar / esconder
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      $btn.fadeIn();
    } else {
      $btn.fadeOut();
    }
  });

  // Voltar ao topo
  $btn.on('click', function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 600);
  });

});


  

})(jQuery);
