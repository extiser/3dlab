$('.js-top-menu-trigger').click(function () {
  $(this).toggleClass('active');
  $('.js-top-menu-open').slideToggle(300);
});