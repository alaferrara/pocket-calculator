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
   document.getElementById("zero_button").disabled = true;
   document.getElementById("button1").disabled = true;
   document.getElementById("button2").disabled = true;
   document.getElementById("button3").disabled = true;
   document.getElementById("button4").disabled = true;
   document.getElementById("button5").disabled = true;
   document.getElementById("button6").disabled = true;
   document.getElementById("button7").disabled = true;
   document.getElementById("button8").disabled = true;
   document.getElementById("button9").disabled = true;
 }

 console.log(document.calculator.display.value.split(",").join(""));
console.log(document.calculator.display.value);
let commaInput = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
document.calculator.display.value = commaInput;
}
function clean(){
 document.calculator.display.value = 0;
 executed = false;
 decimalStatus = false;
 piStatus = false;
   expressionArray = [];
   document.getElementById("zero_button").disabled = false;
   document.getElementById("button1").disabled = false;
   document.getElementById("button2").disabled = false;
   document.getElementById("button3").disabled = false;
   document.getElementById("button4").disabled = false;
   document.getElementById("button5").disabled = false;
   document.getElementById("button6").disabled = false;
   document.getElementById("button7").disabled = false;
   document.getElementById("button8").disabled = false;
   document.getElementById("button9").disabled = false;
   document.getElementById("pi_Button").disabled = false;
}
function clearOnOp(){
 document.calculator.display.value = 0;
 executed = false;
 decimalStatus = false;
 piStatus = false;
 document.getElementById("zero_button").disabled = false;
 document.getElementById("button1").disabled = false;
 document.getElementById("button2").disabled = false;
 document.getElementById("button3").disabled = false;
 document.getElementById("button4").disabled = false;
 document.getElementById("button5").disabled = false;
 document.getElementById("button6").disabled = false;
 document.getElementById("button7").disabled = false;
 document.getElementById("button8").disabled = false;
 document.getElementById("button9").disabled = false;
 document.getElementById("pi_Button").disabled = false;
}
function equal(){
 piStatus = false;
 document.getElementById("zero_button").disabled = true;
 document.getElementById("button1").disabled = true;
 document.getElementById("button2").disabled = true;
 document.getElementById("button3").disabled = true;
 document.getElementById("button4").disabled = true;
 document.getElementById("button5").disabled = true;
 document.getElementById("button6").disabled = true;
 document.getElementById("button7").disabled = true;
 document.getElementById("button8").disabled = true;
 document.getElementById("button9").disabled = true;
 document.getElementById("pi_Button").disabled = true;
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
function piInsert(num){
 if(piStatus == false){
   document.calculator.display.value = '';
   document.calculator.display.value = document.calculator.display.value + num;
   expressionArray.push(num);
   console.log(expressionArray);
   piStatus = true;
 }
}
