//switch case
// var j = 1;
// do {
//   var num1 = Number(prompt("Enter your first number"));
//   var num2 = Number(prompt("Enter your second number"));
//   var sign = prompt("Enter arthemtic sign like +,-,*,/");
//   switch (sign) {
//     case '+':
//       document.write(num1+" + "+num2+" = "+(num1 + num2));
//       break;
//     case '-':
//       document.write(num1+" - "+num2+" = "+(num1 - num2));
//       break;
//     case '*':
//       document.write(num1+" * "+num2+" = "+(num1 * num2));
//       break;
//     case '/':
//       document.write(num1+" / "+num2+" = "+(num1 / num2));
//       break;
//     default:
//       alert("Invalid Sign");
//   }
//   var again = prompt("do you want to do again?");
//   j++;
// } while (again === "yes");

var a=Math.pow(4,2)
console.log(a)
var b=Math.sqrt(36)
console.log(b)
var c=3.456
console.log(Math.round(c))
var ran=Math.random()*10000
if(ran>999){
    console.log(Math.floor(ran))
}

var time=document.getElementById("showtime")
setInterval(() => {
    var date=new Date()
    var hour=date.getHours()
    var minute=date.getMinutes()
    var sec=date.getSeconds()
    time.innerHTML=hour+" : "+minute+" : "+sec    
}, 1000);
setTimeout(() => {
    alert("Welcome")
}, 2000);










