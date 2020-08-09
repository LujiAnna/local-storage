
'use strict';
console.log('--- loading listener: submit, addItem');
addItems.addEventListener('submit', addItem);
console.log("--- loading listener: onclick, toggleDone");
itemsList.addEventListener("click", toggleDone);
console.log("--- loading listener: onclick, toggleAll");
allItems.addEventListener("click", toggleAll);
