"use strict";

let tasks = [];
let total = 0;

const washCarBtn     = document.getElementById( "wash-car-button"     );
const mowLawnBtn     = document.getElementById( "mow-lawn-button"     );
const pullWeedsBtn   = document.getElementById( "pull-weeds-button"   );
const sendInvoiceBtn = document.getElementById( "send-invoice-button" );

const totalEl         = document.getElementById( "total-element"  );
const taskContainerEl = document.getElementById( "task-container" );

washCarBtn.addEventListener(     "click", addWashCar   );
mowLawnBtn.addEventListener(     "click", addMowLaw    );
pullWeedsBtn.addEventListener(   "click", addPullWeeds );
sendInvoiceBtn.addEventListener( "click", resetTasks   );

function addWashCar() {
  addTask( washCarBtn, "Wash Car", 10 );
}

function addMowLaw() {
  addTask( mowLawnBtn, "Mow Lawn", 20 );
}

function addPullWeeds() {
  addTask( pullWeedsBtn, "Pull Weeds", 30 );
}

function addTask( button, name, price ) {
  if ( !button.disabled ) {
    tasks.push( { name: name, price: price, } );

    button.disabled            = true;
    sendInvoiceBtn.disabled = false;

    renderTasks();
  }
}

function resetTasks() {
  tasks = [];

  washCarBtn.disabled     = false;
  mowLawnBtn.disabled     = false;
  pullWeedsBtn.disabled   = false;
  sendInvoiceBtn.disabled = true;

  renderTasks();
}

function renderTasks() {
  total = 0;
  taskContainerEl.replaceChildren();

  for( let t of tasks ) {
    const taskNameEl   = document.createElement( "p"      );
    const taskRemoveEl = document.createElement( "button" );
    const taskPriceEl  = document.createElement( "p"      );

    taskNameEl.textContent   = `${t.name}`;
    taskRemoveEl.textContent = "Remove";
    taskPriceEl.textContent  = `${t.price}`;

    taskContainerEl.append( taskNameEl   );
    taskContainerEl.append( taskRemoveEl );
    taskContainerEl.append( taskPriceEl  );

    total += t.price;
  }

  totalEl.textContent = `${total}`;
}

renderTasks();
