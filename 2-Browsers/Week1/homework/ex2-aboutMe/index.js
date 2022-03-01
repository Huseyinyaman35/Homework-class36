'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
const myInfo = ['Thunder', 'Hamburger', 'Amsterdam'];
// TODO add your JavaScript code here.
const spans = document.getElementsByTagName('span');

[...spans].forEach((span, i) => {
  span.textContent = myInfo[i];
});

const lists = document.getElementsByTagName('li');
[...lists].forEach((list) => {
  list.classList.add('list-item');
});

console.log(lists);