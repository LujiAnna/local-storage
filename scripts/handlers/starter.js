"use strict";

let items = JSON.parse(localStorage.getItem("items")) || [];
localStorage.setItem("items", JSON.stringify(items));
populateList(items, itemsList);

/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
