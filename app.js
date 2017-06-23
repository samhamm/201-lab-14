'use strict';

var form = document.getElementById('orderform');
Order.all = [];

function Order(selection, quantity, name, street, city, state, zip, phone, email){
  this.selection = selection;
  this.quantity = quantity;
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.email = email;
  Order.all.push(this);
}


function handleForm(e){
  e.preventDefault();
  // console.log(e.target.quantity.value)
  new Order(
    event.target.selection.value,
    event.target.quantity.value,
    event.target.name.value,
    event.target.street.value,
    event.target.city.value,
    event.target.state.value,
    event.target.zip.value,
    event.target.phone.value,
    event.target.email.value);
  console.table(Order.all);

  localStorage.orders = JSON.stringify(Order.all);

  var names = ['selection','quantity','name','street','city','state','zip','phone','email'];
  for (var i = 0; i < names.length; i++){
    event.target[names[i]].value = null;
  }

}

if(localStorage.orders) {
  Order.all = JSON.parse(localStorage.orders);
}

form.addEventListener('submit', handleForm);
