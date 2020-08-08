'use strict';
console.log('--- loading listener: submit, addItem');
const addItems= document.querySelector('.add-items')
addItems.addEventListener('submit', addItem);

const itemsList = document.querySelector('.plates')

console.log('--- finished listener: submit, addItem');
