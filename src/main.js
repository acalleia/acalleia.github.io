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

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $('#gene').on('click', function(){
        if($('#general').css('display', 'none')){
            $('#madameP').mouseenter(function(){
                $(this).css("color", "#ff5959")
            });
            $('#madameP').mouseleave(function(){
                $(this).css("color", "#233142")
            });
            $('#gene').mouseenter(function(){
                $(this).css("color", "#233142")
            });
            $('#gene').mouseleave(function(){
                $(this).css("color", "#ff5959")
            });
            $('#gene').css("color", "#ff5959");
            $('#madameP').css("color", "#233142");
            $('#general').css("display", "grid");
            $('#paulette').css('display', 'none'); 
        }
    })

    $('#madameP').on('click', function(){
        if($('#paulette').css('display', 'none')){
            $('#gene').mouseenter(function(){
                $(this).css("color", "#ff5959")
            });
            $('#gene').mouseleave(function(){
                $(this).css("color", "#233142")
            });
            $('#madameP').mouseenter(function(){
                $(this).css("color", "#233142")
            });
            $('#madameP').mouseleave(function(){
                $(this).css("color", "#ff5959")
            });
            $('#madameP').css("color", "#ff5959");
            $('#gene').css("color", "#233142");
            $('#paulette').css("display", "grid"); 
            $('#general').css('display', 'none');
        }
    })

    $('#gen').on('click', function(){
        if($('#general').css('display', 'none')){
            $('#madameP').mouseenter(function(){
                $(this).css("color", "#ff5959")
            });
            $('#madameP').mouseleave(function(){
                $(this).css("color", "#233142")
            });
            $('#gene').mouseenter(function(){
                $(this).css("color", "#233142")
            });
            $('#gene').mouseleave(function(){
                $(this).css("color", "#ff5959")
            });
            $('#gene').css("color", "#ff5959");
            $('#madameP').css("color", "#233142");
            $('#general').css("display", "grid");
            $('#paulette').css('display', 'none'); 
        }
    })
    $('#pau').on('click', function(){
        if($('#paulette').css('display', 'none')){
            $('#gene').mouseenter(function(){
                $(this).css("color", "#ff5959")
            });
            $('#gene').mouseleave(function(){
                $(this).css("color", "#233142")
            });
            $('#madameP').mouseenter(function(){
                $(this).css("color", "#233142")
            });
            $('#madameP').mouseleave(function(){
                $(this).css("color", "#ff5959")
            });
            $('#madameP').css("color", "#ff5959");
            $('#gene').css("color", "#233142");
            $('#paulette').css("display", "grid"); 
            $('#general').css('display', 'none');
        }
    })

});