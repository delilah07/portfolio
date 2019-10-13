$(function() {
     $("body").removeClass('no-scroll');
    
    // Filter
    
    let filter = $("[data-filter]");
    
    filter.on('click', function(event){
        event.preventDefault();
        
        let cat = $(this).data('filter');
        
        if (cat =='all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function(){
            
            let itemCat = $(this).data('cat');
            
            if(itemCat != cat){
                $(this).addClass('hide');
            } else{
                $(this).removeClass('hide');
            }
            
        }); 
        }
         
    });
    
    // Modal Windows
    
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(event){
        let $this = $(this);
        let modalId = $this.data('modal');
        
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        
       setTimeout(function(){
         $(modalId).find(".modal__dialog").css({
            transform:'rotateX(0)'
        });  
       }, 500);
        
       $('#workSlider').slick('setPosition'); 
        
    });
    
    modalClose.on("click", function(event){
        event.preventDefault();
        
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        
        $(modalParent).find(".modal__dialog").css({
            transform:'rotateX(90deg)'
        });
        
        setTimeout(function(){
           $(modalParent).removeClass('show');
        $("body").removeClass('no-scroll');
       }, 500);
        
        

    });
    
    $(".modal").on("click", function(event){
        let $this = $(this);
        
        $this.find(".modal__dialog").css({
            transform:'rotateX(90deg)'
        });
        
        setTimeout(function(){
           $this.removeClass('show');
        $("body").removeClass('no-scroll');
       }, 500);
        
    });
    
    $(".modal__dialog").on("click", function(event){
        
        event.stopPropagation();
        
    });    
    
    // Slick Slider: https://kenwheeler.github.io/slick/
     $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false,
        dots:true
    });
    
    $(".slickPrev").on("click", function(event){
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal');
        let currentSliderId = currentSlider.id;
        let prevSlider = $(this).parents('.modal').prev('.modal_project');
        console.log(currentSlider['0'].id);
        
        if (currentSlider['0'].id == 'modal_project-1'){
            setTimeout(function(){
                    currentSlider.find(".modal__dialog").css({
                        transform:'rotateX(90deg)'
                    });
                    currentSlider.removeClass('show');
                    $("body").removeClass('no-scroll');
               }, 500);
            } else {
                setTimeout(function(){
                    currentSlider.find(".modal__dialog").css({
                        transform:'rotateX(90deg)'
                    });
                    currentSlider.removeClass('show');
                    $("body").removeClass('no-scroll');
               }, 500);
                setTimeout(function(){
                    prevSlider.find(".modal__dialog").css({
                        transform:'rotateX(0)'
                    });
                    prevSlider.addClass('show');
                    $("body").addClass('no-scroll');
                }, 500);
            }
        
    });
    
    $(".slickNext").on("click", function(event){
        event.preventDefault();
        
       let currentSlider = $(this).parents('.modal');
        let nextSlider = $(this).parents('.modal').next('.modal_project');
        
        
                setTimeout(function(){
                    currentSlider.find(".modal__dialog").css({
                        transform:'rotateX(90deg)'
                    });
                    currentSlider.removeClass('show');
                    $("body").removeClass('no-scroll');
               }, 500);
        
                setTimeout(function(){
                    nextSlider.find(".modal__dialog").css({
                        transform:'rotateX(0)'
                    });
                    nextSlider.addClass('show');
                    $("body").addClass('no-scroll');
                }, 500);       
            
    });
    
    
});



