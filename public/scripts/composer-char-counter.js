$(document).ready(function(event) {
  console.log("Hello from char counter.js");
  
  $('.new-tweet-form-textarea').on('input',function() {
    const word = $(this).val().length;
    const limit = 140;
    if (limit - word < 0) {
      $('.counter').addClass('counter-over');
    } else {
      $('.counter').removeClass('counter-over');
    }

    $('.counter').text(limit - word);
  });
});
