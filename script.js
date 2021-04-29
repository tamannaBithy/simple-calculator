function operatorCase(){
    let displayNum = document.getElementById("display").value;
    if (displayNum == '+' || displayNum == '-' || displayNum == '*' || displayNum == '/' ||
    displayNum == '%' || displayNum == '='){
        alert('give input first');
        document.getElementById("display").value = '';
    }
}

const displayNum = document.getElementById("display").value;

function insert (number){
    document.getElementById("display").value = document.getElementById("display").value + number;
}

function calculate (){
    document.getElementById("display").value = eval(document.getElementById("display").value);
}

function clearAll (){
    document.getElementById("display").value = '';
}

function backSpace (){
   var num = document.getElementById("display").value;
   num = num.substring(0, num.length - 1);
   document.getElementById("display").value = num;
}