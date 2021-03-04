$(document).ready(function () {
   let ImgItem = $('.slider li ').length;
   let imgPos = 1;

   $(".menu").click(function () {


      $(".header nav").css("display", "block").toggle()



   })

   for (i = 0; i <= ImgItem; i++) {
      $('.pagination').append('  <li><span class="fa fa-circle"></span></li>')
   }

   $('.slider li').hide();
   $('.slider li:first').show();
   $('.pagination li:first').css({
      'color': 'yellow'
   })

   $('.pagination li').click(pagination);
   $('.right span').click(nextSlider);
   $('.left span').click(prevSlider);

   setInterval(function () {
      nextSlider()
   }, 4000)

   function pagination() {
      let paginationPos = $(this).index() + 1;


      $('.slider li').hide();

      $('.slider li:nth-child(' + paginationPos + ')').fadeIn();

      $('.pagination li:first').css({
         'color': 'yellow'
      })
      $(this).css({
         'color': "darkblue"
      });

      imgPos = paginationPos;


   }

   function nextSlider() {
      if (imgPos >= ImgItem) {
         imgPos = 1
      } else {
         imgPos++;
      }

      $('.pagination li').css({
         'color': 'yellow'
      })
      $('.pagination li:nth-child(' + imgPos + ')').css({
         'color': "darkblue"
      })

      $('.slider li').hide();

      $('.slider li:nth-child(' + imgPos + ')').fadeIn();
   }

   function prevSlider() {
      if (imgPos >= 1) {
         imgPos = ImgItem
      } else {
         imgPos--;
      }

      $('.pagination li').css({
         'color': 'yellow'
      })
      $('.pagination li:nth-child(' + imgPos + ')').css({
         'color': "darkblue"
      })

      $('.slider li').hide();

      $('.slider li:nth-child(' + imgPos + ')').slideIn();
   }

})