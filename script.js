const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function AddTask() {
    if (inputBox.value == '')
    {
        alert("write some task!");
    }
    else {
        //declare
        let li = document.createElement("li");
        //add
        li.innerHTML = inputBox.value;
        //display
        listContainer.appendChild(li);
        //declare
        let span = document.createElement("span")
        //add
        span.innerHTML = "\u00d7";
        //display
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    
} 
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }


}, false);
function saveData() {
    localStorage.setIthem("data", listContainer.innerHTML);
    
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
