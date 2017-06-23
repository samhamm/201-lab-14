'use strict';

var form = document.getElementById('orderform');

function Order(){
  this.
}

function handleForm(e){
  e.preventDefault();
  // console.log(e.target.quantity.value)
  new Order();
}

form.addEventListener('submit', handleForm)
