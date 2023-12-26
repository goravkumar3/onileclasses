var pass=document.querySelector('#pass')
var eye=document.querySelector('#eye')

function toggle(){
    if(pass.type==="password"){
        pass.type='text'
        eye.src="./media/view (1).png"
    }
    else{
        pass.type='password'
        eye.src="./media/hidden (1).png"
    }
}

