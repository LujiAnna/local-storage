
'use strict';

function addItem (event) {
event.preventDefault();
const newItem = (document.querySelector('[name=item]')).value
const item = {
newItem,
done: false

};
items.push(item);
populateList(items,itemsList)
this.reset();
} 

const items = JSON.parse(localStorage.getItem("items")) || [];
localStorage.setItem("items", JSON.stringify(items));
populateList(items, itemsList);

function toggleDone(e) {
  debugger;
  if (!e.target.matches("input")) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function toggleAll (e) {
  debugger;
 
  // if everything true ...make all false
  // iterate through the items to get number of checked items

let doneItems = 0;
const totalItems = items.length;
  for (let i = 0; i < items.length; i++) {
     if(items[i].done === true ) {
        doneItems++;
     }
   }  

  if (doneItems === totalItems) {
    for (let i = 0; i < items.length; i++) {
      items[i].done = false;
  }
} else { // if everything false ...make all true

for (let i = 0; i < items.length; i++) {
      items[i].done = true;
  }
}
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function populateList(plates = [], platesLis) {
  debugger;
  platesLis.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.newItem}</label>
      </li>
    `;
  }).join('');

}
console.log('--- finished handler: _');
/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/