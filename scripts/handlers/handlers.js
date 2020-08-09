'use strict';
console.log('--- loading handler: _');

//Panel open handler

const toggleOpen = (event) => {
  console.log(event)
  event.currentTarget.classList.toggle('open')
}

/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
const toggleActive = (event) =>{
  event.target.classList.toggle('open-active')
}

