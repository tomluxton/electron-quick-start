let money = 0;
let date = new Date(2022, 1, 1);

const titleElement = document.getElementById("title");
const moneyElement = document.getElementById("money-total");
const dateElement = document.getElementById("date");

document.getElementById("nextDayButton").addEventListener("click", newDayUpdate);
document.getElementById("saveAndExit").addEventListener("click", saveGame);
document.getElementById("save").addEventListener("click", saveGame);


moneyElement.innerHTML = money;
dateElement.innerHTML = date.toDateString();


function updateMoney(newAmount) {
    moneyElement.innerHTML = newAmount;
}

function newDayUpdate() {
    date.setDate(date.getDate() + 1);
    dateElement.innerHTML = date.toDateString();

}

function saveGame() {
    localStorage.setItem('money', JSON.stringify(money));
    localStorage.setItem('date', JSON.stringify(date));

}

function loadGame() {
    money = JSON.parse(localStorage.getItem('money'));
    date = JSON.parse(localStorage.getItem('date'));
  }


