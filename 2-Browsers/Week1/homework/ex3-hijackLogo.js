'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  // TODO your code goes in here
  const image = document.querySelector('.lnXdpd');
  const hackYourFuture = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  image.src = hackYourFuture;
  image.srcset =
    'https://www.hackyourfuture.dk/static/logo-dark.svg 1x, https://www.hackyourfuture.dk/static/logo-dark.svg 2x';
}

hijackGoogleLogo();
