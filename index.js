 //When the page is ready do this, all jQuery stuff given to use by our Tutor to use
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

     function controlgallery() {
         if (window.matchMedia('(max-width: 440px)').matches) {
             $(".js-carousel").slick({
                 adaptiveHeight: true
             });
         } else {
             $(".js-carousel").slick('unslick');
         }

     }
     window.addEventListener('resize', function (event) {
         controlgallery();
     });
     controlgallery();
 });

 //This function when called adds shown to the end off the elements class, I use this to create an interactive drop down menu
 function buttonClick() {
     document.getElementById("ul-links").classList.toggle("shown");
     document.getElementById("bdy").classList.toggle("shown");
     document.getElementById("down-a").classList.toggle("shown");
     document.getElementById("up-a").classList.toggle("shown");
     //This for loop is there so you can loop through each content section and add shown to the end, 
     //this is useful if you wanted to add more content sections to the site
     var sectionIDs = document.getElementsByClassName("int-link");
     for (var i = 0; i < sectionIDs.length; i++) {
         sectionIDs[i].classList.toggle("shown");
     }
 }
 //This just checks to see if the button has been clicked and when it does get clicked, run the function
 document.addEventListener("DOMContentLoaded", function () {
     document.querySelector('#menu-btn').addEventListener('click', buttonClick);
 });