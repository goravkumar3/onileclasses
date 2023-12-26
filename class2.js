var prect=prompt("enter your prectage")
if(prect>=50&&prect<60){
    alert("C Grade")
}
else if(prect>=60&&prect<70){
    alert("B Grade")
}
else if(prect>=70&&prect<80){
    alert("B+ Grade")
}
else if(prect>=80&&prect<90){
    alert("A Grade")
}
else if(prect>=90){
    alert("A+ Grade")
}
else{
    alert("Fail")
}
//array
var stdNames=["Aqsa","Aisha Khan","Kashish","Prena","Fedwa"]
console.log(stdNames)
console.log(stdNames[2])
//stack pop,push LIFO(Last in First out)
//pop is used to remove value from end of array
stdNames.pop() 
stdNames.pop() 
console.log(stdNames)
//push is used to add value from end of array
stdNames.push("Asiha Siyal")
stdNames.push("Muskan")
console.log(stdNames)
//queue FIFO(First in First out)
//shift is used to remove value from front of array
stdNames.shift()
console.log(stdNames)
//unshift is used to add value from front of array
stdNames.unshift("Zoya")
console.log(stdNames)
//splice(starting point,delete number,add value)
stdNames.splice(2,2,"Zaniab","Manhoor","fazia")
console.log(stdNames)
var passedStudent=[]
//slice(starting point,end point) slice is used to copy value from another array
passedStudent=stdNames.slice(3,5)
console.log(passedStudent)

//increament/decreament
//pre,post
var i=3
console.log(i++)
console.log(i++)
console.log(i++)
console.log("Pre")
var a=3
console.log(++a)
console.log(++a)
console.log(++a)
var b=3
console.log(b--)
console.log(b--)
console.log(b--)
console.log("Pre")
var c=3
console.log(--c)
console.log(--c)
console.log(--c)













