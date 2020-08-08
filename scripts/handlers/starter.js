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
