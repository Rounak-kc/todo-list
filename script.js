const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = ()=>{
    if(inputBox.value===''){
        alert("You must write somthing");
    }else{
        const currentTime = new Date();
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let timeList = document.createElement("p");
        timeList.innerHTML=`${currentTime.getHours()}:${currentTime.getMinutes()} ${dayName(currentTime.getDay())},${currentTime.getDate()} ${mounthName(currentTime.getMonth())} ${currentTime.getFullYear()}`;
        li.appendChild(timeList);
        let span = document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    setToDoData();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        setToDoData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        setToDoData();
    }
},false);

function setToDoData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function getToDoData(){
    listContainer.innerHTML=localStorage.getItem("data")
}

function dayName(num){
    let name='';
    switch(num){
        case 1:{
            name='Mon';
            return name;
        }
        case 2:{
            name='Tue';
            return name;
        }
        case 3:{
            name='Wed';
            return name;
        }
        case 4:{
            name='Thu';
            return name;
        }
        case 5:{
            name='Fri';
            return name;
        }
        case 6:{
            name='Sat';
            return name;
        }
        case 7:{
            name='Sun';
            return name;
        }
    }
}


function mounthName(num){
    let name='';
    switch(num){
        case 1:{
            name='Jan';
            return name;
        }
        case 2:{
            name='Feb';
            return name;
        }
        case 3:{
            name='Mar';
            return name;
        }
        case 4:{
            name='Apr';
            return name;
        }
        case 5:{
            name='May';
            return name;
        }
        case 6:{
            name='Jun';
             return name;
        }
        case 7:{
            name='Jul';
             return name;
        }
        case 8:{
            name='Aug';
             return name;
        }
        case 9:{
            name='Sep';
             return name;
        }
        case 10:{
            name='Oct';
             return name;
        }
        case 11:{
            name='Nov';
             return name;
    }
        case 12:{
            name='Dec';
             return name;
        }
    }
}

getToDoData();