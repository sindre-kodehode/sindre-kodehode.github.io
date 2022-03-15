let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", renderLead);

function renderLead() {
  myLeads.push(inputEl.value);

  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
                    <a href="https://${myLeads[i]}" target="_blank">
                      ${myLeads[i]}
                    </a>
                  </li>`;
  }

  inputEl.value = "";
  ulEl.innerHTML = listItems;
}
