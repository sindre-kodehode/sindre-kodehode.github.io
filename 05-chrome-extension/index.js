"use strict"

const deleteBtn = document.getElementById('delete-btn');
const inputBtn  = document.getElementById('input-btn');
const inputEl   = document.getElementById('input-el');
const tabBtn    = document.getElementById('tab-btn');
const ulEl      = document.getElementById('ul-el');

const leadsFromStorage = localStorage.getItem('myLeads');

let myLeads = [];

if (leadsFromStorage) {
  myLeads = JSON.parse(leadsFromStorage);
  render(myLeads);
}

inputBtn.addEventListener('click', addLead);
deleteBtn.addEventListener('click', deleteLeads);
tabBtn.addEventListener('click', saveTab)

function addLead() {
  myLeads.push(inputEl.value);
  inputEl.value = '';

  saveLeads();
  render(myLeads);
}

function saveLeads() {
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  console.log('hello');
}

function saveTab() {
  console.log('hello');
  browser.tabs.get().url;

  myLeads.push(browser.tabs);
  saveLeads();
  render(myLeads);
}

function deleteLeads() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
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
