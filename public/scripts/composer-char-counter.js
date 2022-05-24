$(document).ready(function(event) {
  console.log("Hello from char counter.js");
  
  $('.new-tweet-form-textarea').on('input',function() {
    console.log("some crypto coin has been pumped");
    const word = $(this).val().length;
    console.log(word);
    const limit = 140;

    $('.counter').text(limit - word);

  });
  

});
