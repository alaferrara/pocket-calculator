var executed = false;
var expressionArray= [];
var decStatus = false;
var piStatus = false;
var decInserted = false;
//var firstCondition = false;
//var secondCondition = false;
function insert(num){
  if(executed == false){
  document.calc.display.value=""
  executed = true;
}



  expressionArray.push(num)

  console.log(expressionArray.join(''))
  if (num === ".") {
      if (!document.calc.display.value.includes(".")) {
        document.calc.display.value = document.calc.display.value + num;
      }
  } else {
    document.calc.display.value = document.calc.display.value + num;
  }

  if(Number(document.calc.display.value.length) <= 10){
    document.calc.display.value = document.calc.display.value
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
    document.getElementById("decimalButton").disabled = true;
  }

  if(decInserted == false){
 let commaInput = Number(document.calc.display.value.split(",").join("")).toLocaleString();
 document.calc.display.value = commaInput;
  }
}
function clearCalc(){
  document.calc.display.value=0;
  executed = false;
  decStatus = false;
  piStatus = false;
  decInserted = false;
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
    document.getElementById("piButton").disabled = false;
    document.getElementById("decimalButton").disabled = false;
}
function clearOnOp(){
  document.calc.display.value= 0
  executed = false;
  decStatus = false;
  piStatus = false;
  decInserted = false;
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
  document.getElementById("piButton").disabled = false;
  document.getElementById("decimalButton").disabled = false;
}
function equal(){
  piStatus = false;
  document.getElementById("decimalButton").disabled = true;
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
  document.getElementById("piButton").disabled = true;
  let calcAnswer= eval(expressionArray.join(''));
    expressionArray = [];
    expressionArray = [calcAnswer];
  if(calcAnswer > 999999999 || calcAnswer < -999999999){
    document.calc.display.value = calcAnswer.toExponential(9)
  }else{
    document.calc.display.value=calcAnswer.toLocaleString("en")
  }

  if(document.calc.display.value === "Infinity" || document.calc.display.value === "∞" || document.calc.display.value === "NaN") {
    document.calc.display.value = "ERROR";
  }
}
function numberNegation(){
  document.calc.display.value = document.calc.display.value.split(",").join('')
  document.calc.display.value = document.calc.display.value * -1
  document.calc.display.value = Number(document.calc.display.value.split(",").join('')).toLocaleString();
    expressionArray[expressionArray.length - expressionArray.length ]= expressionArray[expressionArray.length - expressionArray.length] *-1
    console.log(expressionArray)
}

function numberPercentage(){
  document.calc.display.value = document.calc.display.value.split(",").join("")
  document.calc.display.value = document.calc.display.value / 100
  expressionArray = document.calc.display.value
  console.log(expressionArray)
}

function decimalInsert(num){
  if(decStatus == false){
    document.calc.display.value = document.calc.display.value + num
    expressionArray.push(num)
    console.log(expressionArray)
    decStatus = true;
    decInserted = true;
    document.getElementById("decimalButton").disabled = true;
  }
}
function piInsert(num){
  if(piStatus == false){
    document.calc.display.value = ''
    document.calc.display.value = document.calc.display.value + num
    expressionArray.push(num)
    console.log(expressionArray)
    piStatus=true;
  }
}
