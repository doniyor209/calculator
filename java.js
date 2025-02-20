const ekran=document.getElementById("ekran");

function reshi() {
    calculator.value= eval(calculator.value);
}
function deletecalculator(){
    calculator.value=calculator.value.slice(0,-1);
}
function clearcalculator(){
    calculator.value="";
}