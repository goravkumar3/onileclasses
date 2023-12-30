function say(value){
    alert(value)
}
var currMode="light"
var body=document.getElementById("main")
var change=document.getElementById("change")
function mode(){
if(currMode==="light"){
 body.classList.add("dark")
 currMode="dark"
 change.src="./media/sun.png"
}
else{
 body.classList.remove("dark")
 currMode="light"
 change.src="./media/moon.png"
}
}




