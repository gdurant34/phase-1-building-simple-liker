

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likeHearts = document.querySelectorAll('.like-glyph');
const errorModal = document.querySelector('#modal');
errorModal.className = "hidden";

likeHearts.forEach(heart => heart.addEventListener('click', callback));

function callback(e) {
  mimicServerCall()
  .then(data => { // this runs when it's sucessful
    const heartSpan = e.target;
    let heartState = heartSpan.textContent; 
  
    if(heartState == EMPTY_HEART) {
      e.target.textContent = FULL_HEART;
      e.target.className = "activated-heart";
    } else {
      e.target.textContent = EMPTY_HEART;
      e.target.className = "";
    };
  })
  .catch(error => {
    errorModal.className = "";
    errorModal.innerText = error;
    setTimeout(() => {errorModal.className = "hidden"}, 3000);

  })
  
}

// ------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
// ------------------------------------------------------------------------------

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






// locate the elements i want to add click events to
// <span class="like-glyph">♡</span> - the heart 
