var myVariable = 0

function myClickEvent(){
    myVariable = myVariable + 1
    console.log(myVariable);
}

function myLoadingEvent(){
    document.addEventListener('click', myClickEvent);
}

document.addEventListener('DOMContentLoaded', myLoadingEvent)

