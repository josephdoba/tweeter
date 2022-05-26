$(document).ready(function(event) {
  console.log("Hello from char counter.js");
  
  $('.new-tweet-form-textarea').on('input',function() {
    const word = $(this).val().length;
    const limit = 140;
    $('.counter').text(limit - word);

  });
  

});
