var age=prompt("Enter your age")
//logical operator and operator && or operator ||
if(age>=18&&age<40){
    //nested if-else
    var city=prompt("Enter your city name").toLowerCase()
    if(city==="hyderabad"||city==="karachi"||city==="lohare"){
        alert("you can apply for job")
    }
    else{
        alert("you cannot apply for job")
    }
}
else{
alert("you cannot apply for job")
}