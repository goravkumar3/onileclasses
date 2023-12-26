var show=document.getElementById("getvalue")
function Value(v){
    show.value+=v
}
function out(){
    console.log(show.value)
    var result=eval(show.value)
    show.value=result
}