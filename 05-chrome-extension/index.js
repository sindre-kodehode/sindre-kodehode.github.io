"use strict"

const deleteBtn = document.getElementById('delete-btn');
const inputBtn  = document.getElementById('input-btn');
const inputEl   = document.getElementById('input-el');
const tabBtn    = document.getElementById('tab-btn');
const ulEl      = document.getElementById('ul-el');

const leadsFromStorage = localStorage.getItem('myLeads');

let myLeads = [];

deleteBtn.addEventListener('click', deleteLeads);
 inputBtn.addEventListener('click', addLead);
   tabBtn.addEventListener('click', addTab);

if (leadsFromStorage) {
  myLeads = JSON.parse(leadsFromStorage);
  render(myLeads);
}

function addLead() {
  myLeads.push(inputEl.value);
  inputEl.value = '';

  saveLeads();
  render(myLeads);
}

function addTab() {
  chrome.tabs.query(
    {
      active        : true,
      currentWindow : true
    },
    function(tabs) {
      myLeads.push(tabs[0].url);
      saveLeads();
      render(myLeads);
    }
  );
}

function deleteLeads() {
  localStorage.clear();
  myLeads = [];

  render(myLeads);
}

function saveLeads() {
  localStorage.setItem(
    'myLeads', JSON.stringify(myLeads)
  );
}

function render(list) {
  let listItems = '';

  for (const li of list) {
    listItems += `
    <li>
      <a href="https://${li}" target="_blank">
        ${li}
      </a>
    </li>`;
  }

  ulEl.innerHTML = listItems;
}
