$(function () {    

    var previousScroll = 0;
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        var heading = $('.containerForPara');
        if (scroll < 750){
            console.log('scrolling down');
            heading.fadeIn("slow", function(){
                heading.css('opacity', '1' );
            })
        } else {
            heading.fadeIn("slow", function(){
                heading.css('opacity', 1 - scroll / 5000)
            })
        }

        previousScroll = scroll;
    });
    
   $('.carousel-control').click(function (e) {
        e.preventDefault();
    });
        
    $(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

    $('#wordsOne').on('mouseout', function() {
        console.log("gooby");
        if($('#wordsOne').css('display', 'flex')){
            $('#wordsOne').css('display', 'none')
        };
    });

    $('#gene').on('click', function(){
        if($('#general').css('display', 'none')){
            $('#general').css("display", "grid");
            $('#gene').css({"color": "#eab25c", "background-color": "#009395"}) 
            $('#madameP').css({"color": "white", "background-color": "#eab25c"});
            $('#paulette').css('display', 'none');
        }
    })

    $('#madameP').on('click', function(){
        if($('#paulette').css('display', 'none')){
            $('#paulette').css("display", "grid"); 
            $('#madameP').css({"color": "#eab25c", "background-color": "#009395"});
            $('#gene').css({"color": "white", "background-color": "#eab25c"}) 
            $('#general').css('display', 'none');
        }
    })

    $('#gen').on('click', function(){
        if($('#general').css('display', 'none')){
            $('#general').css("display", "grid");
            $('#gene').css({"color": "#eab25c", "background-color": "#009395"}) 
            $('#madameP').css({"color": "white", "background-color": "#eab25c"});
            $('#paulette').css('display', 'none');
        }
    })
    $('#pau').on('click', function(){
        if($('#paulette').css('display', 'none')){
            $('#paulette').css("display", "grid"); 
            $('#madameP').css({"color": "#eab25c", "background-color": "#009395"});
            $('#gene').css({"color": "white", "background-color": "#eab25c"}) 
            $('#general').css('display', 'none');
        }
    })

});