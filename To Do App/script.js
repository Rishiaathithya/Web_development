const inputBox = document.getElementById('input-box')
const listcontainer = document.getElementById('list-container')

function addTask(){
    if (inputBox.value ===""){
        alert("You Must Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // after the condition is over the input box should be empty

    inputBox.value="";
    // whenever the task is called it will saved the data
    saveData();
}


listcontainer.addEventListener("click",function(e){
    // if we click on the li that means it was checked.
    // so we want to strike so we are adding classname checked to strike thorugh it 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }

    // if we click on the cross button
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);

function saveData (){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function displayData(){
     listcontainer.innerHTML = localStorage.getItem("data");
}


displayData();