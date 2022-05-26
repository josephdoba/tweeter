/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(event) {
// Test / driver code (temporary). Eventually will get this from the server.
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461116959088
    }
  ];

  const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
    for (let i = 0; i < tweets.length; i++) {
      let $tweet = createTweetElement(tweets[i]);
      $('#tweets-container').append($tweet);
    }
  // takes return value and appends it to the tweets container
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
        <p>${tweet.content.text}</p>
      </main>
      <footer class="existing-tweet-footer"> 
        <p>${new Date(tweet.created_at)}</p>
        <div> 
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`;
    // ...
    return $tweet;
  };

  renderTweets(data);

  $("form").on("submit", function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    // const data = $(".new-tweet-form-div").serialize();
    console.log(data);
    $.ajax("/tweets", { method : "post", data
    });
  });
    
  


});
