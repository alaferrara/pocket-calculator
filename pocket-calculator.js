var executed = false;
var expressionArray= [];
var decimalStatus = false;
var piStatus = false;


function insert(num){
 if(executed == false){
 document.calculator.display.value = "";
 executed = true;
}

 expressionArray.push(num);
 console.log(expressionArray.join(''));
 if (num === ".") {
     if (!document.calculator.display.value.includes(".")) {
       document.calculator.display.value = document.calculator.display.value + num;
     }
 } else {
   document.calculator.display.value = document.calculator.display.value + num;
 }

 if(Number(document.calculator.display.value.length <= 10)){
   document.calculator.display.value = document.calculator.display.value;
 }else{
   document.getElementById("zero").disabled = true;
   document.getElementById("num1Button").disabled = true;
   document.getElementById("num2Button").disabled = true;
   document.getElementById("num3Button").disabled = true;
   document.getElementById("num4Button").disabled = true;
   document.getElementById("num5Button").disabled = true;
   document.getElementById("num6Button").disabled = true;
   document.getElementById("num7Button").disabled = true;
   document.getElementById("num8Button").disabled = true;
   document.getElementById("num9Button").disabled = true;
   document.getElementById("decimalPoint").disabled = true;
 }

 console.log(document.calculator.display.value.split(",").join(""));
console.log(document.calculator.display.value);
let commaInput = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
document.calculator.display.value = commaInput;
}
function clear(){
 document.calculator.display.value = 0;
 executed = false;
 decimalStatus = false;
   expressionArray = [];
   document.getElementById("zero").disabled = false;
   document.getElementById("num1Button").disabled = false;
   document.getElementById("num2Button").disabled = false;
   document.getElementById("num3Button").disabled = false;
   document.getElementById("num4Button").disabled = false;
   document.getElementById("num5Button").disabled = false;
   document.getElementById("num6Button").disabled = false;
   document.getElementById("num7Button").disabled = false;
   document.getElementById("num8Button").disabled = false;
   document.getElementById("num9Button").disabled = false;
   document.getElementById("decimalPoint").disabled = false;
}
function clearOnOp(){
 document.calculator.display.value = 0;
 executed = false;
 decimalStatus = false;
 document.getElementById("zero").disabled = false;
 document.getElementById("num1Button").disabled = false;
 document.getElementById("num2Button").disabled = false;
 document.getElementById("num3Button").disabled = false;
 document.getElementById("num4Button").disabled = false;
 document.getElementById("num5Button").disabled = false;
 document.getElementById("num6Button").disabled = false;
 document.getElementById("num7Button").disabled = false;
 document.getElementById("num8Button").disabled = false;
 document.getElementById("num9Button").disabled = false;
 document.getElementById("decimalPoint").disabled = false;
}
function equal(){
 document.getElementById("zero").disabled = true;
 document.getElementById("num1Button").disabled = true;
 document.getElementById("num2Button").disabled = true;
 document.getElementById("num3Button").disabled = true;
 document.getElementById("num4Button").disabled = true;
 document.getElementById("num5Button").disabled = true;
 document.getElementById("num6Button").disabled = true;
 document.getElementById("num7Button").disabled = true;
 document.getElementById("num8Button").disabled = true;
 document.getElementById("num9Button").disabled = true;
 document.getElementById("decimalPoint").disabled = true;
 let calcAnswer= eval(expressionArray.join(''));
   expressionArray = [];
   expressionArray = [calcAnswer];
 if(calcAnswer > 999999999){
   document.calculator.display.value = calcAnswer.toExponential(9);
 }else{
   document.calculator.display.value=calcAnswer.toLocaleString("en");
 }

 if(document.calculator.display.value === "Infinity" || document.calculator.display.value === "∞") {
   document.calculator.display.value = "ERROR";
 }
}
function negation(){
   document.calculator.display.value=document.calculator.display.value*-1;
   expressionArray[expressionArray.length -1 ]= expressionArray[expressionArray.length -1] * -1;
   console.log(expressionArray);
}

function percentage(){
 document.calculator.display.value=document.calculator.display.value/100;
 expressionArray[expressionArray.length -1 ]= expressionArray[expressionArray.length -1] /100;
}

function decimalInsert(num){
 if(decimalStatus == false){
   document.calculator.display.value = document.calculator.display.value + num;
   expressionArray.push(num);
   console.log(expressionArray);
   decimalStatus = true;
 }
}
