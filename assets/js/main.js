var App = {
    sliderHome: function(){
        jQuery('.slider_rules').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 1500,
          dots: false,
          arrows: false,
          fade: false,
          focusOnSelect: true,
        });
        jQuery('.figure_slider').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 1500,
          dots: false,
          arrows: true,
          fade: false,
          focusOnSelect: true,
          asNavFor: '.figure_text',
          prevArrow: '<div class="prev_slider"><img src="/assets/images/prev.svg"/></div>',
          nextArrow: '<div class="next_slider"><img src="/assets/images/next.svg"/></div>',
        });
        jQuery('.figure_text').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 1500,
          dots: false,
          arrows: false,
          fade: true,
          focusOnSelect: true,
          asNavFor: '.figure_slider',
        });
    },
    menumobile: function () {
      jQuery('.hamburger_btn').click(function(e){
          e.preventDefault();
          jQuery('.hamburger-icon').toggleClass('open');
          jQuery('#menu_mobile').toggleClass('open');
          jQuery('.overlay_menu').toggleClass('is-active');
      });
      jQuery('.overlay_menu').click(function () {
          jQuery('.hamburger-icon').removeClass('open');
          jQuery('#menu_mobile').removeClass('open');
          jQuery('.overlay_menu').removeClass('is-active');
      });
  },
};

jQuery(document).ready(function () {
    App.sliderHome();
    App.menumobile();
    window.addEventListener("load", () => {
      var md = new MobileDetect(window.navigator.userAgent);
      if(md.mobile()==null){
        jQuery('body').html('<div class="notification"><div class="bg-animation"><div id="stars"></div><div id="stars2"></div></div><div class="inner_notify">vui lòng sử dụng điện thoại để được trải nghiệm tốt nhất</div></div>');
      }
    });
});