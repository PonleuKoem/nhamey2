    $(document).ready(function(){
        //slider 1

      var slider1=null;
       slider1=$('.sliderContainer1').bxSlider({
        
        
        slideWidth: 325,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        auto: true,
        pause: 5000
      });
      $(".bx-pager").remove();
      
        var current1=slider1.getCurrentSlide();
        var w=0;
        w=Number.parseInt($("body").width());
        if(w<800&&w>400)
        {
          slider1.reloadSlider({
            
            
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
          slider1.reloadSlider({
            
            
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
          slider1.reloadSlider({
            
  
            slideWidth: 325,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10,
            auto: true,
            pause: 5000
          });          
        }
        slider1.goToSlide(current1);
        $(".bx-pager").remove();
      
      
      $(window).on('resize',function() {
        var current1=slider1.getCurrentSlide();
        var w=0;
        w=Number.parseInt($('body').width());
        if(w<800&&w>400)
        {
          slider1.reloadSlider({
            
            
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
          slider1.reloadSlider({
            
            
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
          slider1.reloadSlider({
            
  
            slideWidth: 325,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10,
            auto: true,
            pause: 5000
          });          
        }
        slider1.goToSlide(current1);
        $(".bx-pager").remove();
      });
      //slider 2
      var slider2=null;
       slider2=$('.sliderContainer2').bxSlider({
        
        
        slideWidth: 325,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        auto: true,
        pause: 5000
      });
      $(".bx-pager").remove();
      
        var current2=slider2.getCurrentSlide();
        var w=0;
        w=Number.parseInt($("body").width());
        if(w<800&&w>400)
        {
          slider2.reloadSlider({
            
            
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
          slider2.reloadSlider({
            
            
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
          slider2.reloadSlider({
            
  
            slideWidth: 325,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10,
            auto: true,
            pause: 5000
          });          
        }
        slider2.goToSlide(current2);
        $(".bx-pager").remove();
      
      
      $(window).on('resize',function() {
        var current2=slider2.getCurrentSlide();
        var w=0;
        w=Number.parseInt($('body').width());
        if(w<800&&w>400)
        {
          slider2.reloadSlider({
            
            
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
          slider2.reloadSlider({
            
            
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
          slider2.reloadSlider({
            
  
            slideWidth: 325,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10,
            auto: true,
            pause: 5000
          });          
        }
        slider2.goToSlide(current2);
        $(".bx-pager").remove();
      });
    });
