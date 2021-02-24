var randomnumber1,randomnumber2;
var str1,str2,str3;
str1="✌Player-1 Wins";
str2="Player-2 Wins✌";
str3="Draw";
function random() {
var  i=Math.random();
  i*=6;
  i=Math.floor(i)+1;
  return i;
}
randomnumber1=random();
randomnumber2=random();
document.querySelector(".dice1").setAttribute("src","images/dice"+randomnumber1+".png");
document.querySelector(".dice2").setAttribute("src","images/dice"+randomnumber2+".png");
if(randomnumber1>randomnumber2) {
  document.querySelector("h1").innerText=str1;
}
else if(randomnumber1===randomnumber2) {
  document.querySelector("h1").innerText=str3;
}
else {
  document.querySelector("h1").innerText=str2;
}
