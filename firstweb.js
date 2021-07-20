document.getElementById("btn").addEventListener("click",value1);
document.getElementById("btn1").addEventListener("click",value2);
function value1(){
   let ele = (document.getElementById("ai").value)*(document.getElementById("bi").value) + (document.getElementById("aj").value)*(document.getElementById("bj").value) + (document.getElementById("ak").value)*(document.getElementById("bk").value);
   document.getElementById("ans").innerHTML = ele;
   console.log(ele);
}
function value2(){
  document.getElementById("ans2").innerHTML = ((document.getElementById("ay").value)*(document.getElementById("bz").value) - (document.getElementById("az").value)*(document.getElementById("by").value))+" "+  " \\({\\vec{i}}\\) " + " + " + ((document.getElementById("az").value)*(document.getElementById("bx").value) - (document.getElementById("ax").value)*(document.getElementById("bz").value)) +" "+ "\\({\\vec{j}}\\)" +  "+" + ((document.getElementById("ax").value)*(document.getElementById("by").value) - (document.getElementById("ay").value)*(document.getElementById("bx").value)) +" "+ "\\({\\vec{k}}\\)";
}
let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Calculate";


let button1 = document.querySelector('.button1');
let buttonText1 = document.querySelector('.tick1');

buttonText1.innerHTML = "Calculate";
let buttonText2 = document.querySelector('.tick2');

buttonText2.innerHTML = "Calculate";

let s = document.getElementById("step");
s.style.display='none';
let s1 = document.getElementById("step1");
s1.style.display='none';
let s2 = document.getElementById("step2");
s2.style.display='none';
let s3=document.getElementById("ste");
s3.style.display='none';
let ani=document.getElementById("circle");
ani.style.display='none';
let y=document.getElementById("btn");
y.addEventListener("click",val);
function val(){
let ai = document.getElementById("ai").value;
let aj = document.getElementById("aj").value;
let ak = document.getElementById("ak").value;
let bi = document.getElementById("bi").value;
let bj = document.getElementById("bj").value;
let bk = document.getElementById("bk").value;

if(ai!="" && bi!="" && bj!=""&& bk!=""&& bj!=""&& bk!=""){
s.value = " = "+"("+ai+")"+"\xB7"+"("+bi+")" + " + " + "("+ aj+")"+"\xB7"+"("+bj+")" + " + " +"("+ak+")"+"\xB7"+"("+bk+")"  ;
s1.value = "= "+ ai*bi + " + " + aj*bj + " + " +ak*bk;
s2.value = "= "+ (ai*bi+ aj*bj + ak*bk);
document.getElementById("steps").addEventListener("click", show);
function show(){
    if(ani.style.display=='none'){
      ani.style.display='block';
    }
  setTimeout(function(){
    if(ani.style.display=='block'){
      ani.style.display='none';
    }
  },1000);
  
  setTimeout(function(){
      if(s.style.display=='none'){
    s.style.display='block';
  }
  else if(s.style.display=='block'){
     s.style.display='none';
  }
  if(s1.style.display=='none'){
    s1.style.display='block';
  }
  else{
     s1.style.display='none';
  }
  if(s2.style.display=='none'){
    s2.style.display='block';
  }
  else{
     s2.style.display='none';
  }
  if(s3.style.display=='none'){
    s3.style.display='block';
  }
  else{
     s3.style.display='none';
 }
},1500);
}
}
else{
  alert("Please enter some value");
  buttonText.innerHTML = "Calculate";
  document.getElementById("ans").innerHTML = "";
}
}
let ss = document.getElementById("sstep");
ss.style.display='none';
let ss1 = document.getElementById("sstep1");
ss1.style.display='none';
let u=document.getElementById("sste");
u.style.display='none';
let ani1=document.getElementById("circle1");
ani1.style.display='none';
document.getElementById("btn1").addEventListener("click",val1);
function val1(){
let ax = document.getElementById("ax").value;
let ay = document.getElementById("ay").value;
let az = document.getElementById("az").value;
let bx = document.getElementById("bx").value;
let by = document.getElementById("by").value;
let bz = document.getElementById("bz").value;
if(ax!="" && bx!="" && by!="" && bz!="" && ay!="" && az!="" ){
ss.innerHTML = "= " + "(" + "("+ay+")" + " \xB7 " + "("+bz+")" + " - " + "("+az+")" + " \xB7 " +"("+ by+")" + " )"+ "\\({\\vec{i}}\\)" + " - " +"("+"(" + ax +")"+ " \xB7 " + "("+bz+")"+ " - " +"("+ az + ")"+" \xB7 " + "("+bx + ")"+")" + "\\({\\vec{j}}\\)" + " + " + "(" + "("+ax+")" + " \xB7 "+"(" + by+")" + " - " + "("+ay+")" + " \xB7 " + "("+bx+")" + ")" + "\\({\\vec{k}}\\)";
ss1.innerHTML = "= " + (ay*bz-az*by) + "\\({\\vec{i}}\\)" + " + " + (ax*bz - az*bx)*(-1) + "\\({\\vec{j}}\\)" + " + " + (ax*by-ay*bx) + "\\({\\vec{k}}\\)" ;
MathJax.typeset();
document.getElementById("ssteps").addEventListener("click", show1);
function show1(){
  if(ani1.style.display=='none'){
    ani1.style.display='block';
  }
setTimeout(function(){
  if(ani1.style.display=='block'){
    ani1.style.display='none';
  }
},1000);
       setTimeout(function(){
         if(ss.style.display=='none'){
    ss.style.display='block';
  }
  else if(ss.style.display=='block'){
     ss.style.display='none';
  }
  if(ss1.style.display=='none'){
    ss1.style.display='block';
  }
  else if(ss1.style.display=='block'){
     ss1.style.display='none';
  }
 
  if(u.style.display=='none'){
    u.style.display='block';
  }
  else if(u.style.display=='block'){
     u.style.display='none';
  }
},1500);
}
}
else{
  alert("Please enter some value");
  buttonText1.innerHTML = "Calculate";
  document.getElementById("ans2").innerHTML = "";
}
}
document.getElementById("btn2").addEventListener("click",binn);
function binn(){
  let ea=document.getElementById("user_input").value;
   if(ea=="x^1"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `x^1 dx` = `x^2/2` + `c`";
    MathJax.typeset();
  }
  else if(ea=="x^2"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `x^2 dx` = `x^3/3` + `c`";
    MathJax.typeset();
  }
  else if(ea=="x^3"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `x^3 dx` = `x^4/4` + `c`";
    MathJax.typeset();
  }
  else if(ea=="x^4"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `x^4 dx` = `x^5/5` + `c`";
    MathJax.typeset();
  }
  else if(ea=="x^5"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `x^5 dx` = `x^6/6` + `c`";
    MathJax.typeset();
  }
  else if(ea=="x^6"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `x^6 dx` = `x^7/7` + `c`";
    MathJax.typeset();
  }
  else if(ea=="cosx"){
    document.getElementById("ans3").innerHTML="`sin x` + `c`";
    MathJax.typeset();
  }
  else if(ea=="sinx"){
    document.getElementById("ans3").innerHTML="`-cos x` + `c`";
    MathJax.typeset();
  }
  else if(ea=="xsinx"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `x``sinx dx` = `x(-cos x)` + \\(\\int\\)-`cosx dx` = `-xcos x`  `-` `sinx +` `c` ";
    MathJax.typeset();
  }
  else if(ea=="xcosx"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `x``cosx dx` = `x(sin x)` + \\(\\int\\)`sinx dx` = `xsin x`  `-` `cosx + c` ";
    MathJax.typeset();
  }
  else if(ea=="1/x"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `1/x dx` = `lnx + c`";
    MathJax.typeset();
  }
  else if(ea=="1/(x^2)"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `1/x^2 dx` = `-1/x + c`";
    MathJax.typeset();
  }
  else if(ea=="1/(x^3)"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `1/x^3 dx` = `-1/(2x^2) + c`";
    MathJax.typeset();
  }
  else if(ea=="1/(x^4)"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `1/x^4 dx` = `-1/(3x^3) + c`";
    MathJax.typeset();
  }
  else if(ea=="1/(x^5)"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `1/x^5 dx` = `-1/(4x^4) + c`";
    MathJax.typeset();
  }
  else if(ea=="1/(x^6)"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `1/x^6 dx` = `-1/(5x^5) + c`";
    MathJax.typeset();
  }
  else if(ea=="1/(x^7)"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `1/x^7 dx` = `-1/(6x^6) + c`";
    MathJax.typeset();
  }
  else if(ea=="x^2/(x^4+1)"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `x^2/(x^4+1) dx` = `1/2` \\(\\int\\) `((x^2)+1)/(x^4+1) dx` + `1/2` \\(\\int\\) `((x^2)-1)/(x^4+1)` `dx`= `1/2` \\(\\int\\) `(1+1/(x^2))/(x^2+1/(x^2)) dx` + `1/2` \\(\\int\\) `(1-1/(x^2))/(x^2+1/(x^2)) dx` =  ";

    MathJax.typeset();
  }
  else if(ea=="e^x"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `e^x dx` = `e^x + c`";
    MathJax.typeset();
  }
  else if(ea=="e^(-x)"){
    document.getElementById("ans3").innerHTML="\\(\\int\\) `e^(-x) dx` = `-e^(-x) + c`";
    MathJax.typeset();
  }
  

  
}
let e = document.getElementById("node");
let node=document.querySelectorAll("p");
function t(){
let e=document.getElementById("text_area").value;
if(e=="x^2"){
  document.getElementById("r").innerHTML= "\\({{a}_{x}} = \\frac{\\,d^2 z}{\\,dt ^2}\\)"+
"\\(\\int{x cos{\\left(x^{e} \\right)} d x}\\)"+e+"\\({\\vec{j}}\\)"+ "\\({a^2}\\)"+"`a^2`"+"\\(\\int\\) `x^2 dx` = `x^3/3 + c`";
MathJax.typeset();
}
}