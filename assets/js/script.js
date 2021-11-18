$(document).ready(function () {
    console.log("document is ready");
    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    $(".nav-link").click(function() {  
        $(".nav-link").removeClass("act");     
        $(this).addClass("act");  
    });

});


$(document).ready(function(){
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });

    $(".img-1").click(function() {  
        $(".carousel-item").removeClass("active");     
        $(".i1").addClass("active");  
    });

    $(".img-2").click(function() {  
        $(".carousel-item").removeClass("active");     
        $(".i2").addClass("active");  
    });

    $(".img-3").click(function() {  
        $(".carousel-item").removeClass("active");     
        $(".i3").addClass("active");  
    });

    $(".img-4").click(function() {  
        $(".carousel-item").removeClass("active");     
        $(".i4").addClass("active");  
    });

    $(".img-5").click(function() {  
        $(".carousel-item").removeClass("active");     
        $(".i5").addClass("active");  
    });

    $(".img-6").click(function() {  
        $(".carousel-item").removeClass("active");     
        $(".i6").addClass("active");  
    });

});