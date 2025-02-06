$(document).ready(function () {
    $('.footer-icons').mouseover(function () {
            $(this).addClass('fa-beat');
            
        }
    );
    $('.footer-icons').mouseout(function () { 
        $(this).removeClass('fa-beat');
    });
});
    
$('.anima').mouseover(function (){
    $(this).addClass('animation');
});
$('.anima').mouseout(function (){
    $(this).removeClass('animation');
});
    