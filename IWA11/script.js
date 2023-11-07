const root1 = document.querySelector('[data-key="order1"]');
let biscuits1 = document.querySelector(".biscuits .count");
let donuts1 = document.querySelector(".donuts .count");
let pancakes1 = document.querySelector(".pancakes .count");
let status1 = document.querySelector(".status");

const root2 = document.querySelector('[data-key="order2"]');
let biscuits2 = document.querySelector(".biscuits .count");
let donuts2 = document.querySelector(".donuts .count");
let pancakes2 = document.querySelector(".pancakes .count");
let status2 = document.querySelector(".status");

const root3 = document.querySelector('[data-key="order3"]');
let biscuits3 = document.querySelector(".biscuits .count");
let donuts3 = document.querySelector(".donuts .count");
let pancakes3 = document.querySelector(".pancakes .count");
let status3 = document.querySelector(".status");

biscuits1.innerHTML = root1.dataset.biscuits;
donuts1.innerHTML = root1.dataset.donuts;
pancakes1.innerHTML = root1.dataset.pancakes;
status1.innerHTML = root1.dataset.delivered ? "Delivered" : "Pending";

biscuits2.innerHTML = root2.dataset.biscuits;
donuts2.innerHTML = root2.dataset.donuts;
pancakes2.innerHTML = root2.dataset.pancakes;
status2.innerHTML = root2.dataset.delivered ? "Delivered" : "Pending";

biscuits3.innerHTML = root3.dataset.biscuits;
donuts3.innerHTML = root3.dataset.donuts;
pancakes3.innerHTML = root3.dataset.pancakes;
status3.innerHTML = root3.dataset.delivered ? "Delivered" : "Pending";
