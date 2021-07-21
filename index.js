
function navClick(e) {
  const navLink1 = document.getElementById('home');
  const navLink2 = document.getElementById('order');
  const navLink3 = document.getElementById('reviews');
  const navLink4 = document.getElementById('leaveRe');
  if (navLink1.className === "nav-link active") {
    navLink1.className = "nav-link";
  } else if (navLink2.className === "nav-link active") {
    navLink2.className = "nav-link";
  } else if (navLink3.className === "nav-link active") {
    navLink3.className = "nav-link";
  } else if (navLink4.className === "nav-link active") {
    navLink4.className = "nav-link";
  }
  e.className = "nav-link active";
}

function sendReview() {
  const emailReview = document.getElementById('emailReview');
  const nameReview = document.getElementById('nameReview');
  const textReview = document.getElementById('textReview');
  if (!emailReview.value || !nameReview.value || !textReview.value) {
    alert('All the Fields are required to be filled :(');
    return;
  }
  console.log(`Email: ${emailReview.value}`);
  console.log(`Name: ${nameReview.value}`);
  console.log(`Review: ${textReview.value}`);
  emailReview.value = '';
  nameReview.value = '';
  textReview.value = '';
  alert('Review Sent Successfully :)');
}

function placeOrder() {
  const name = document.getElementById('nameOrder');
  const email = document.getElementById('emailOrder');
  const address = document.getElementById('addressOrder');
  const phone = document.getElementById('phoneOrder');
  const weight = document.getElementById('weightOrder');
  const flavour = document.getElementById('flavourOrder');
  const toppings = document.getElementById('toppingsOrder');
  const eggLess = document.getElementById('eggless');
  const homeDelivery = document.getElementById('homeDelivery');
  if (!name.value || !email.value || !address.value || !phone.value || !weight.value || 
    !flavour.value || !toppings.value || eggLess.checked === undefined 
    || homeDelivery.checked === undefined) {
    alert('All the Fields are required to be filled :(');
    return;
  }
  const payableAmount = parseFloat(weight.value) * 1000.00;
  console.log(`Name: ${name.value}`);
  console.log(`Email: ${email.value}`);
  console.log(`Address: ${address.value}`);
  console.log(`Phone Number: ${phone.value}`);
  console.log(`Weight of Cake: ${weight.value}`);
  console.log(`Flavour of Cake: ${flavour.value}`);
  console.log(`Toppings: ${toppings.value}`);
  console.log(`Type: ${eggLess.checked ? 'Egg Less' : 'With Egg'}`);
  console.log(`Home Delivery: ${homeDelivery.checked ? 'Yes' : 'No'}`);
  console.log(`Price of Cake: Rs. ${payableAmount}`)
  alert(`Order Placed Successfully :) \nTotal Payable Amount: Rs. ${payableAmount}`);
  name.value = "";
  email.value = "";
  address.value = "";
  phone.value = "";
  weight.value = "";
  flavour.value = "";
  toppings.value = "";
  eggLess.checked = false;
  homeDelivery.checked = false;
}