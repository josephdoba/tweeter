$(document).ready(function(event) {
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