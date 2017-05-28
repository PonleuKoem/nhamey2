    $(document).ready(function(){
      var slider=null;
       slider=$('.sliderContainer').bxSlider({
        
        
        slideWidth: 325,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        auto: true,
        pause: 5000
      });
      $(".bx-pager").remove();
      
     //   var current=slider.getCurrentSlide();
        var w=0;
        w=Number.parseInt($("body").width());
        if(w<800&&w>400)
        {
          slider.reloadSlider({
            
            
            slideWidth: 325,
            minSlides: 2,
            maxSlides: 2,
            moveSlides: 1,
            slideMargin: 10,
            auto: true,
            pause: 5000
          });
        }
        else if(w<400)
        {
          slider.reloadSlider({
            
            
            slideWidth: 325,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideMargin: 10,
            auto: true,
            pause: 5000
          });
        }
        else
        {
          slider.reloadSlider({
            
  
            slideWidth: 325,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10,
            auto: true,
            pause: 5000
          });          
        }
    //    slider.goToSlide(current);
        $(".bx-pager").remove();
      
      
      $(window).on('resize',function() {
     //   var current=slider.getCurrentSlide();
        var w=0;
        w=Number.parseInt($('body').width());
        if(w<800&&w>400)
        {
          slider.reloadSlider({
            
            
            slideWidth: 325,
            minSlides: 2,
            maxSlides: 2,
            moveSlides: 1,
            slideMargin: 10,
            auto: true,
            pause: 5000
          });
        }
        else if(w<400)
        {
          slider.reloadSlider({
            
            
            slideWidth: 325,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideMargin: 10,
            auto: true,
            pause: 5000
          });
        }
        else
        {
          slider.reloadSlider({
            
  
            slideWidth: 325,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10,
            auto: true,
            pause: 5000
          });          
        }
       // slider.goToSlide(current);
        $(".bx-pager").remove();
      });
      
    });
       