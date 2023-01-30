import {getDatabase ,get, set, ref, update,remove, child } from  "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";



var nameV,lastV,mailV,textV;

const db=getDatabase();




var namebox = document.getElementById("namebox");
var namebox2 = document.getElementById("namebox2");

var mailbox = document.getElementById("mailbox");
var textbox = document.getElementById("textbox");




function insertData(event){
    event.preventDefault();//for pausing the event
    readData();
    


    set(ref(db, "data/" + nameV),{
        Firstname: nameV,
        Lastname:lastV,
        email:mailV,
        text:textV,
        
    }).then(() => {
        alert("ThankYou For Feedback");
    }).catch((error)=>{alert("Unsucessfull",error);
})
 clearData();
}


//read data

function readData(){

    nameV = namebox.value;
    lastV= namebox2.value;
    mailV=mailbox.value;
    textV=textbox.value;
   
    console.log(nameV,lastV,mailV,textV);
}


function clearData(){
    namebox.value = "";
    namebox2.value= "";
    textbox.value="";
    mailbox.value="";
    // genbox.value="";
    
}

document.querySelectorAll('.btns')[0].onclick = insertData;