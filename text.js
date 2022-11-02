const outputDiv = document.getElementById('experience-title');

const txt = 'Working Experience'

let i=0;
let secondWord = false;

const intervalID = setInterval(function(){
    secondWord ?
    outputDiv.firstElementChild.innerHTML += txt[i]:
    outputDiv.innerHTML += txt[i];
    i++;

    if(txt[i]===" "){
        outputDiv.innerHTML += `<span style="color:red;"></span>`;
        secondWord = true;
    }

    if(i===txt.length){
        clearInterval(intervalID);
    }
},150);