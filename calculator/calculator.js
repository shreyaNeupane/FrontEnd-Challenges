let firstNumber = document.getElementById("display");
let secondNumber;
let operation = ("+", "-", "*", "%", "/");
function clearAll(){
    document.getElementById('display').value=' ';

}
function appendNumber(number) {
  const display = document.getElementById("display");
  display.value += number; // Add the clicked number to the current value
}
function setOperator(){
    
    switch(operation){
          case '+':
            firstNumber+=secondNumber;
            break
            

    }
}