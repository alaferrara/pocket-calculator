var expression="";
var symbol=false;
function fourfunction(operation) {
 if(operation == '+' && symbol==true) {
   expression+="+";
   document.getElementById('addition').innerHTML=expression;
   symbol=false;
 }
 if(operation=='x' && symbol==true){
   expression+='*';
   document.getElementById('addition').innerHTML=expression;
   symbol=false;
 }
 if(operation == '/' && symbol==true) {
   expression+="/";
   document.getElementById('addition').innerHTML=expression;
   symbol=false;
 }
 if(operation=='-' && symbol==true){
   expression+='-';
   document.getElementById('addition').innerHTML=expression;
   symbol=false;
 }
 if (operation=='.' && symbol==true){
   expression+='.';
   document.getElementById('addition').innerHTML=expression;
   symbol=false;
 }
}
function numbers(operation){
 if (operation=='0'){
   expression+='0';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='1'){
   expression+='1';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='2'){
   expression+='2';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='3'){
   expression+='3';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='4'){
   expression+='4';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='5'){
   expression+='5';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='6'){
   expression+='6';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='7'){
   expression+='7';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='8'){
   expression+='8';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='9'){
   expression+='9';
   document.getElementById('addition').innerHTML=expression;
   symbol=true;
 }
 if (operation=='ans'){
 expression+='ans';
 document.getElementById('addition').innerHTML='ans';
 symbol=true;
}
}
function AC(){
 expression='';
 document.getElementById('addition').innerHTML=expression;
}
function equals(operation){
 if (operation== '='){
   if (eval(expression)==Infinity){
     document.getElementById('addition').innerHTML="Error";
   }
   else if(eval(expression)>=1000000000){
     let exponent=eval(expression).toString().length-1;
     document.getElementById('addition').innerHTML=eval(expression)/(10**(exponent))+'e'+exponent;
   }
   else{
     document.getElementById('addition').innerHTML=eval(expression);
   }
 }
   try {
     eval(expression)
   }
   catch(err) {
     document.getElementById('addition').innerHTML="Error";
   }
   ans=eval(expression);
   expression=''
   console.log(ans);
}
