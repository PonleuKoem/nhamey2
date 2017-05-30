    $(document).ready(function(){
        //slider 1

      var slider1=null;
       slider1=$('.sliderContainer1').bxSlider({
        // create slide
        
        slideWidth: 325,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        // margin between two slide 
        auto: true,
        pause: 5000
        // auto set the slide to run auto
        // pause set the interval of slide when it's auto scroll
      });
      $(".bx-pager").remove();
      // remove the pager
      
        var current1=slider1.getCurrentSlide();
        // get current slide number
        var w=0;
        w=Number.parseInt($("body").width());
        if(w<800&&w>400)
        {
            // if the screen is 400-800px set max slide to 2
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
            // if the screen is <400px set max slide to 1
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
            
        // if the screen is >800px set max slide to 4
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
      
      // same as upper but only if the window are resize
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
