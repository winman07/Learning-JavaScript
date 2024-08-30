let Count = 0;

let addElement = document.getElementById("add");
let subElement = document.getElementById("subtract");
let numberElement = document.getElementById("number");

function addButton() {
    Count++;
    numberElement.innerText = Count;
}

function subButton() {
    Count--;
    numberElement.innerText = Count;
}

addElement.addEventListener("click", addButton);
subElement.addEventListener("click", subButton)
