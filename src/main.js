$(function () {    
    let $home = $('<a id="HomeBtn" class="nav">Home</a>').appendTo('.navBar');
    
    let $Projects = $('<a id="ProjectsBtn" href="#projects" class="nav">Projects</a>').appendTo('.navBar');
    
    let $AboutNav = $('<a id="AboutBtn" href="#about" class="nav">About</a>').appendTo('.navBar');
    
    let $Contact = $('<a id="ContactBtn" href="#contact" class="nav">Contact</a>').appendTo('.navBar');
    

    let $TheBandShell = $('<div class="projects"><a href="https://immense-depths-23632.herokuapp.com/"><img src = "assets/bandstand-thumb.png" /></a>The Band Stand</div>').appendTo('.project-container');

    let $TvTrackr = $('<div class="projects"><a href="https://tvshowtrakr.herokuapp.com/"><img src = "assets/tvshowtrakr-thumb.png" /></a>Tv Show Trakr</div>').appendTo('.project-container');

    let $Hangman = $('<div class="projects"><a href="http://hangmanadarkday.bitballoon.com/"><img src = "assets/hangman-thumb.png" /></a>Hangman: A Dark Day</div>').appendTo('.project-container');

    let $Inktober = $('<div class="projects"><a href="https://inktoberapp.herokuapp.com/"><img src = "assets/inktoberapp-thumb.png" /></a>Inktober</div>').appendTo('.project-container');

    let $About = $('<p id="about">I am a results-oriented full stack developer with a background in design. While working in the fashion industry I gained invaluable experience designing and executing within tight deadlines. I use my passion of pop culture and current design trends to help curate each project so they have a fresh, modern look that captures the users attention. I believe that finding the solutions within the constraints of each project I work on pushes me to become a better developer and  designer. I put an emphasis on user experience to ensure my websites are easy to navigate and visually clear. I am an avid learner and love exploring new technology to constantly enhance my abilities and evolve my style.<br><br></p>').appendTo('.about');
    let $headDiv = $('<img class = "self-img" src = "assets/alex-head-colors.png" />').appendTo('.face');

    let $linkedin = $('<a class="faBtn" href="https://www.linkedin.com/in/alex-calleia/"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>').appendTo('.icons');

    let $github = $('<a class="faBtn" href="https://github.com/acalleia"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a>').appendTo('.icons');

    let $insta = $('<a class="faBtn" href="https://www.instagram.com/alexgoescalleia/"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i>').appendTo('.icons');

    let $email = $('<p>Email: alex_calleia@yahoo.com</p>').appendTo('.contact');

    $('#AboutBtn').on('click', function() {
    	if($('#about').css('display', 'none')){
    		$('#about').css("display", "flex");
    		$('#projects').css('display', 'none');
    		$('#contact').css('display', 'none');
    	};
    });

    $('#ProjectsBtn').on('click', function() {
    	if($('#projects').css('display', 'none')){
    		$('#projects').css("display", "flex");
    		$('#about').css('display', 'none');
    		$('#contact').css('display', 'none');
    	};
    });

    $('#ContactBtn').on('click', function() {
    	if($('#contact').css('display', 'none')){
    		$('#contact').css("display", "flex");
    		$('#projects').css("display", "none");
    		$('#about').css('display', 'none');
    	};
    });

    $('#HomeBtn').on('click', function() {
    		$('#contact').css("display", "none");
    		$('#projects').css("display", "none");
    		$('#about').css('display', 'none');  	 
    });

    $('#HomeBtn-2').on('click', function() {
    		$('#contact').css("display", "none");
    		$('#projects').css("display", "none");
    		$('#about').css('display', 'none');  	 
    });

});