$(document).ready(function(event) {
  console.log("Hello from hover.js");

  $(".fa-flag").mouseenter(function() {
    console.log("mouse over flag icon detected");
    background-color: gold;
  }).mouseleave(function() {
    console.log("mouse left flag icon detected");
  });
  
  $(".fa-retweet").mouseenter(function() {
    console.log("mouse over flag icon detected");
  }).mouseleave(function() {
    console.log("mouse left flag icon detected");
  });
  
  $(".fa-heart").mouseenter(function() {
    console.log("mouse over flag icon detected");
  }).mouseleave(function() {
    console.log("mouse left flag icon detected");
  });


});