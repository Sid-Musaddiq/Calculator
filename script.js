const inputBox = document.getElementById('inputBox');
const allButtons = document.querySelectorAll('button');

let displayValue ='';

const arr = Array.from(allButtons);

arr.forEach(clickedButton);

function clickedButton(button){
    button.addEventListener('click', performEvaluation);
}
function performEvaluation(e){
    if(e.target.innerHTML=='='){
        try{
            displayValue = eval(displayValue);
            inputBox.value=displayValue;
        }
        catch{
            displayValue='';
            inputBox.value= 'Invalid input';
        }
        
    }
    else if(e.target.innerHTML=='AC'){
        displayValue='';
        inputBox.value=displayValue;
    }
    else if(e.target.innerHTML=='DEL'){
        displayValue=displayValue.substring(0, displayValue.length-1);
        inputBox.value=displayValue;
    }
    else{
        displayValue+= e.target.innerHTML;
        inputBox.value=displayValue;
    }
}