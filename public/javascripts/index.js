jQuery(document).ready(($) => {

var siteScroll = function() {
  $(window).scroll(() => {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > 1) {
      $('.js-main-header').addClass('is-sticky');
    } else {
      $('.js-main-header').removeClass('is-sticky');
    }

    if (scrollTop > 100) {
      $('.js-main-header').addClass('shrink');
    } else {
      $('.js-main-header').removeClass('shrink');
    }
  })
}
siteScroll();


})