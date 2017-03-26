 $(document).ready(function () {
     $('.js-hide-content').hide();
     $('.js-hide-content').after(
         '<a href="#" class="js-show-content contact-button" >Click here for the contact us form</a>'
     );
     $('.js-show-content').on('click', function (e) {
         e.preventDefault();
         $('.js-hide-content').slideToggle('300', function () {
             $('.js-show-content').fadeOut('300', function () {
                 $('.js-show-content').remove();
             });
         });
     });
    //  window.addEventListener('resize', function () {
    //      if (window.matchMedia('(max-width: 440px)').matches) {
    //          $(".js-carousel").slick({
    //              adaptiveHeight: true,
    //              prevArrow: ''
    //          });
    //      } else {
    //          $(".js-carousel").slick('unslick');
    //      }
    //  });
 });

 function buttonClick() {
     document.getElementById("ul-links").classList.toggle("shown");
     document.getElementById("bdy").classList.toggle("shown");
     document.getElementById("down-a").classList.toggle("shown");
     document.getElementById("up-a").classList.toggle("shown");
     var sectionIDs = document.getElementsByClassName("int-link");
     console.log(sectionIDs);
     for (var i = 0; i < sectionIDs.length; i++) {
         sectionIDs[i].classList.toggle("shown");
     }
 }
 document.addEventListener("DOMContentLoaded", function () {
     document.querySelector('#menu-btn').addEventListener('click', buttonClick);
 });