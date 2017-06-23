'use strict';

var openOrders = [];

if(localStorage.orders) {
  openOrders = JSON.parse(localStorage.orders);
  console.log('Data retrieved from local storage')
} else {
  console.log('No data in local storage');
}

var orderDisplay = document.getElementById('orders');

function newEl(type, content, parent, className, id){
  var newEl = document.createElement(type);
  newEl.textContent = content;
  newEl.className = className;
  newEl.id = id;
  parent.appendChild(newEl);
}

function render() {
  orderDisplay.innerHTML = '';
  for(var i = 0; i < openOrders.length; i++){
    var container = document.createElement('article');
    container.id = openOrders[i].src;
    var imgEl = document.createElement('img');
    imgEl.src = 'img/' + openOrders[i].src + '.jpg';
    container.appendChild(imgEl);
    newEl('h2', openOrders[i].selection, container, 'inline');
    newEl('p', 'Quantity Ordered: ' + openOrders[i].quantity, container, 'inline');
    newEl('p', 'Customer Name: ' + openOrders[i].name, container);
    newEl('p', 'Customer Address: ' + openOrders[i].street + ' ' + openOrders[i].city + ' ' + openOrders[i].state + ' ' + openOrders[i].zip, container);
    newEl('p', 'Customer Phone: ' + openOrders[i].phone, container);
    newEl('p', 'Customer Email: ' + openOrders[i].email, container);
    newEl('button', 'Click Here When Order Is Filled', container, ' ', openOrders[i].src);
    orderDisplay.appendChild(container);
  }
}

function handleClick(e){
  console.log(e.target);
  for(var i = 0; i < openOrders.length; i++){
    if(event.target.id === openOrders[i].src){
      openOrders.splice(i, 1);
      render();
      localStorage.orders = JSON.stringify(openOrders);
    }
  }
}

render();
orderDisplay.addEventListener('click', handleClick);
