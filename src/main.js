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
    

        
   
    // let $home = $('<a id="HomeBtn" class="nav">Home</a>').appendTo('.navBar');
    
    // let $Projects = $('<a id="ProjectsBtn" href="#projects" class="nav">Web Projects</a>').appendTo('.navBar');

    // let $Design = $('<a id="DesignBtn" href="#designs" class="nav">Design</a>').appendTo('.navBar');
    
    // let $AboutNav = $('<a id="AboutBtn" href="#about" class="nav">About</a>').appendTo('.navBar');
    
    // let $Contact = $('<a id="ContactBtn" href="#contact" class="nav">Contact</a>').appendTo('.navBar');
    
    // let $About = $('<p id="aboutText" class="box">I am a results-oriented full stack developer and graphic designer. While working in the fashion industry I gained invaluable experience designing and executing within tight deadlines. I use my passion of pop culture and current design trends to help curate each project so they have a fresh, modern look that captures the users attention. I believe that finding the solutions within the constraints of each project I work on pushes me to become a better developer and  designer. I put an emphasis on user experience to ensure my websites are easy to navigate and visually clear. I am an avid learner and love exploring new technology to constantly enhance my abilities and evolve my style.<br><br></p>').appendTo('#about');

    // let $TheBandShell = $('<div id="projectsOne" class="col-lg-6 col-md-6 col-sm-12"><a href="https://immense-depths-23632.herokuapp.com/"><img src = "assets/bandstand-thumb.png" /></a></div>').appendTo('.project-container');

    // let $TvTrackr = $('<div id="projectsTwo" class="col-lg-6 col-md-6 col-sm-12"><a href="https://tvshowtrakr.herokuapp.com/"><img src = "assets/tvshowtrakr-thumb.png" /></a></div>').appendTo('.project-container');

    // let $Hangman = $('<div id="projectsThree" class="col-lg-6 col-md-6 col-sm-12"><a href="http://hangmanadarkday.bitballoon.com/"><img src = "assets/hangman-thumb.png" /></a></div>').appendTo('.project-container');

    // let $Inktober = $('<div id="projectsFour" class="col-lg-6 col-md-6 col-sm-12"><a href="https://inktoberapp.herokuapp.com/"><img src = "assets/inktoberapp-thumb.png" /></div>').appendTo('.project-container');


    $(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});


    let $TheBandShellHover = $('<p class="hoverWords">The Band Stand</p>').appendTo('#projectsOne');

    let $TvTrackrHover = $('<p class="hoverWords">Tv Show Trackr</p>').appendTo('#projectsTwo');

    let $HangmanHover = $('<p class="hoverWords">Hangman: A Dark Day</p>').appendTo('#projectsThree');

    let $InktoberHover = $('<p class="hoverWords">Inktober</p>').appendTo('#projectsFour');

   

    // let $headDiv = $('<img class = "self-img" src = "assets/alex-head-colors.png" />').appendTo('.face');

    // let $linkedin = $('<a class="faBtn" href="https://www.linkedin.com/in/alex-calleia/"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>').appendTo('.icons');

    // let $github = $('<a class="faBtn" href="https://github.com/acalleia"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a>').appendTo('.icons');

    // let $insta = $('<a class="faBtn" href="https://www.instagram.com/alexgoescalleia/"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i>').appendTo('.icons');

    // let $email = $('<p>Email: alexcalleia97531@gmail.com</p>').appendTo('#contact');

    // let $TopBtnContact = $('<a class="top-btn" href="#top">Top</a>').appendTo('#contact');

    // $('#projectsTwo').on('mouseenter', function() {
    //     console.log("gooby");
    //     if($('#wordsTwo').css('display', 'none')){
    //         $('#wordsTwo').css('display', 'flex')
    //     };
    // });
    $('#wordsOne').on('mouseout', function() {
        console.log("gooby");
        if($('#wordsOne').css('display', 'flex')){
            $('#wordsOne').css('display', 'none')
        };
    });

    // $('#AboutBtn').on('click', function() {
    // 	if($('#about').css('display', 'none')){
    // 		$('#about').css("display", "flex");
    // 		$('#projects').css('display', 'none');
    // 		$('#contact').css('display', 'none');
    // 	};
    // });

    // $('#ProjectsBtn').on('click', function() {
    // 	if($('#projects').css('display', 'none')){
    // 		$('#projects').css("display", "flex");
    // 		$('#about').css('display', 'none');
    // 		$('#contact').css('display', 'none');
    // 	};
    // });

    // $('#ContactBtn').on('click', function() {
    // 	if($('#contact').css('display', 'none')){
    // 		$('#contact').css("display", "flex");
    // 		$('#projects').css("display", "none");
    // 		$('#about').css('display', 'none');
    // 	};
    // });

    // $('#HomeBtn').on('click', function() {
    // 		$('#contact').css("display", "none");
    // 		$('#projects').css("display", "none");
    // 		$('#about').css('display', 'none');  	 
    // });

    // $('#HomeBtn-2').on('click', function() {
    // 		$('#contact').css("display", "none");
    // 		$('#projects').css("display", "none");
    // 		$('#about').css('display', 'none');  	 
    // });

});