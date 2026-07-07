function login(){

let username = document.getElementById("username").value;


if(username === ""){

alert("Please enter your username or email");

}

else{

alert("Logging in as: " + username);

}

}



function phoneLogin(){

alert("Phone number login selected");

}



function googleLogin(){

alert("Google login selected");

}



function signup(){

alert("Opening sign up page");

}



function message(text){

alert(text + " clicked");

}