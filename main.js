

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorMsg = document.getElementById('modal');
const addHiddenClass = () => {
  errorMsg.className = 'hidden';
}
addHiddenClass();


const hearts = document.querySelectorAll('.like-glyph')

hearts.forEach(heart => heart.addEventListener('click', clickHeart))

function clickHeart(e) {
  mimicServerCall()
  .then(data => thenFun(data))
  .catch(error => errorNotification(error))

  const thenFun = data => {
    const heartSpan = e.target;
    const heartState = heartSpan.textContent;

    if(heartState == EMPTY_HEART) {
      heartSpan.textContent = FULL_HEART;
      heartSpan.className = 'activated-heart';
    } else {
      heartSpan.textContent = EMPTY_HEART;
      heartSpan.className = '';
    }
  }

  const errorNotification = error => {
    errorMsg.textContent = error;
    errorMsg.className = '';
    setTimeout(() => addHiddenClass(), 3000);
  }
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




/*

When you wrote your instructions..
i recommend focusing on broad common patterns, as opposed to "it was done this one time like this, specifically"

Clicking on the heart should change the heart symbol
I need to selert the heart elem



...

...

...

...

...

...
*/
