
$(document).ready(function () {
    $('.footer-icons').mouseover(function () {
        $(this).addClass('fa-bounce');  // Add the fa-flip class
    });
    
    $('.footer-icons').mouseout(function () {
        $(this).removeClass('fa-bounce');  // Remove the fa-flip class
    });
});
