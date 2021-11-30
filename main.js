// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// My JavaScript Starts here::
const hearts = document.querySelectorAll('.like-glyph');
  //console.log(hearts);
  for(const heart of hearts){
    heart.addEventListener("click", handleClick)}




//Functions
function handleClick(e){
  mimicServerCall()
  .then(() => {
    handleLike(e);
  })
  .catch(() => {
    handleError()
  })
}
//----------------------------------------------------------------------
//Build function to handle like-- needs to change heart to filled in heart
function handleLike(e){
  const heart = e.target;
  if (heart.innerText === EMPTY_HEART) {
  heart.innerText = FULL_HEART;
  heart.className = "activated-heart";
  } else {
  heart.innerText = EMPTY_HEART;
  heart.className = "";
};
}
//----------------------------------------------------------------------
//Build function to handle server error
function handleError(){
  console.log("Got to my ERROR function")
  const modal = document.querySelector("div#modal");
  modal.className = "";
  modal.innerText = "Random server error. Try again.";
  setTimeout(foo => modal.className = "hidden",
   3000)};



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
