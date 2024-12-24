const inputbox=document.getElementById("inputtext");
const listcontainer=document.getElementById("listcontainer");
function addtask()
{
    if(inputbox.value=='')
    {
        alert("you must write something");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML=inputbox.value  ;
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
        listcontainer.appendChild(li);
    }
    inputbox.value='';
    savedata();
}
listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata()
{
    localStorage.setItem("data",listcontainer.innerHTML);   
}

function loaddata() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listcontainer.innerHTML = savedData;
    }
}

window.onload = loaddata;