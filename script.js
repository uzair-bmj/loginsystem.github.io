let users = []
function signup(){
   let nam = document.getElementById("name").value;
    let em = document.getElementById("Email").value;
    let pss = document.getElementById("pass").value
    
    
    users.push({
       name : nam,
       email : em,
       password : pss       
    }
        
    )
    alert("User Registered Succesfully")
    console.log(users)
}
function login(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("Pass").value;

    for(let i=0; i<users.length; i++){
        if(email==users[i].email && pass== users[i].password){
            window.alert("login Successfull")
        }
        else{
            window.alert("INVALID EMAIL OR PASSWORD")
        }


    }    
}