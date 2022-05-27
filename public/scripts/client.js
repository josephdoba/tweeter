/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function(event) {
  // test: <script>alert("uh oh")</script>
  // test: <script>$("body").empty();</script>
  
  // Cross-site Scripting escape function:
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    let $tweet = `<article>
    <header class="existing-tweet-header">
    <div>
    <img src="${tweet.user.avatars}" class="tweets-container-header-img" alt="">
    <p>${tweet.user.name}</p>
    </div>
    <p class="existing-tweet-handle">${tweet.user.handle}</p>
    </header>
    <main class="existing-tweet-body"> 
    <p>${escape(tweet.content.text)}</p>
    </main>
    <footer class="existing-tweet-footer"> 
    <p>${timeago.format(new Date(tweet.created_at))}</p>
    <div> 
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
    </div>
    </footer>
    </article>`;
    return $tweet;
  };

  const renderTweets = function(tweets) {
    $('#tweets-container').empty();
    for (let i = 0; i < tweets.length; i++) {
      let $tweet = createTweetElement(tweets[i]);
      $('#tweets-container').prepend($tweet);
    }
  };
  

  $("form").on("submit", function(event) {
    event.preventDefault();
    
    // sanitize entry point:
    const tweetText = escape($(".new-tweet-form-textarea").val());
    const safeHTML = `<p>${tweetText}</p>`;
    const data = $(this).serialize();
    const $emptyError = "You can't send an empty tweet!";
    const $lengthError = "Tweet too long. Must be within 140 chars.";
    // console.log(`tweetText: ${tweetText}`);
    // console.log(typeof(tweetText));
    // console.log(safeHTML);
    // console.log(`data: ${data}`);

    // check if empty or over 140 characters.
    if (!tweetText) {
      $(".new-tweet-error").slideDown(200, function() {
      //   // console.log("(From slidedown):You can't send an empty tweet");
        $(".new-tweet-error").text($emptyError);
      });
      // $(".new-tweet-error").slideUp("slow", function() {
      // });

    } else if (tweetText.length > 140) {
      $(".new-tweet-error").slideDown("slow", function() {
        console.log("(From slidedown): Tweet too long. Must be within 140 chars");
        $(".new-tweet-error").text($lengthError);
      });
      
      
    } else {
      $(".new-tweet-error").slideUp(200, function() {
        console.log("No errors.. tweeting");
      });

      $.ajax({
        url: '/tweets',
        type: 'POST',
        data: data
      }).then(data => {
        loadTweets();
      });
    }
  });

  const loadTweets = function() {
    $.ajax({
      url: `/tweets`,
      type: `GET`
    })
      .then(data => {
        renderTweets(data);
      });
  };
  loadTweets();

});
